'use server';
import { promises as fs } from 'fs';
import https from 'node:https';
import path from 'path';
import sharp from 'sharp';

const bufferToBase64 = (buffer: Buffer) => {
  return `data:image/png;base64,${buffer.toString('base64')}`;
};

const getFileBufferLocal = (filepath: string) => {
  const realFilepath = path.join(process.cwd(), 'public', filepath);
  return fs.readFile(realFilepath);
};

// https.get은 기본 타임아웃이 없어, 빌드 프리렌더 중 멈춘 소켓 하나가
// staticPageGenerationTimeout(60초)에 걸려 빌드를 실패시킨다. 무응답 기준 타이머라
// 큰 파일이 꾸준히 내려오는 중에는 발동하지 않는다.
const REQUEST_TIMEOUT_MS = 10_000;

// Node의 https로 직접 받는다. Next가 패치한 전역 fetch를 쓰면, 개발 모드에서
// 렌더 중 다수의 fetch 호출마다 디버그 스택이 붙어 RSC 직렬화가 스택 오버플로로
// 터진다("failed to pipe response: Maximum call stack size exceeded"). 프로덕션은
// 무관하지만, dev에서 블로그 페이지가 잘리는 것을 막기 위해 패치된 fetch를 우회한다.
const getFileBufferRemote = (url: string) =>
  new Promise<Buffer>((resolve, reject) => {
    const request = https.get(url, (res) => {
      const status = res.statusCode ?? 0;
      if (status >= 400) {
        res.resume();
        reject(new Error(`Request failed (${status}): ${url}`));
        return;
      }
      const chunks: Uint8Array[] = [];
      res.on('data', (chunk: Uint8Array) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    });

    request.setTimeout(REQUEST_TIMEOUT_MS, () => {
      request.destroy(new Error(`Request timed out: ${url}`));
    });

    request.on('error', reject);
  });

const getFileBuffer = (src: string) => {
  const isRemote = src.startsWith('http');
  return isRemote ? getFileBufferRemote(src) : getFileBufferLocal(src);
};

type PlaceholderResult = {
  src: string;
  width: number;
  height: number;
  placeholder: string;
};

const fallbackResult = (filepath: string): PlaceholderResult => ({
  src: filepath,
  width: 1000,
  height: 1000,
  placeholder:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
});

const computePlaceholderImage = async (
  filepath: string,
): Promise<PlaceholderResult> => {
  const originalBuffer = await getFileBuffer(filepath);
  const sharpInstance = sharp(originalBuffer);
  // .png()으로 통일: 입력이 GIF여도 placeholder를 PNG로 만들어 data:image/png 라벨과 일치시킨다.
  const resizedBuffer = await sharpInstance.resize(20).png().toBuffer();
  const metadata = await sharpInstance.metadata();

  return {
    src: filepath,
    width: metadata.width ?? 1000,
    height: metadata.height ?? 0,
    placeholder: bufferToBase64(resizedBuffer),
  };
};

// 이미지별 결과를 메모리에 캐시한다. blur 계산은 원본을 통째로 받아 sharp로 처리하므로
// 비싸다. 빌드 프리렌더에서는 한 워커 프로세스 안의 여러 라우트가, 동적(ƒ)인 /blog에서는
// 요청들이 같은 URL을 공유할 때 중복을 막는다. 실패는 캐시하지 않는다.
const placeholderCache = new Map<string, Promise<PlaceholderResult>>();

const getPlaceholderImage = async (
  filepath: string,
): Promise<PlaceholderResult> => {
  const cached = placeholderCache.get(filepath);
  if (cached) return cached;

  const promise = computePlaceholderImage(filepath).catch((error) => {
    console.error(error);
    placeholderCache.delete(filepath);
    return fallbackResult(filepath);
  });

  placeholderCache.set(filepath, promise);
  return promise;
};

export default getPlaceholderImage;

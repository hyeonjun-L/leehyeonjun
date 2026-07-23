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

// Node의 https로 직접 받는다. Next가 패치한 전역 fetch를 쓰면, 개발 모드에서
// 렌더 중 다수의 fetch 호출마다 디버그 스택이 붙어 RSC 직렬화가 스택 오버플로로
// 터진다("failed to pipe response: Maximum call stack size exceeded"). 프로덕션은
// 무관하지만, dev에서 블로그 페이지가 잘리는 것을 막기 위해 패치된 fetch를 우회한다.
const getFileBufferRemote = (url: string) =>
  new Promise<Buffer>((resolve, reject) => {
    https
      .get(url, (res) => {
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
      })
      .on('error', reject);
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
// 비싸고, 블로그 페이지는 동적 렌더(ƒ)라 매 요청마다 반복된다. 프로세스 수명 동안 캐시해
// 이미지당 최초 1회만 처리하도록 한다(dev/prod 요청 간 공유). 실패는 캐시하지 않는다.
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

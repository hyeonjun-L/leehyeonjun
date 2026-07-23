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

const getPlaceholderImage = async (filepath: string) => {
  try {
    const originalBuffer = await getFileBuffer(filepath);
    const sharpInstance = sharp(originalBuffer);
    const resizedBuffer = await sharpInstance.resize(20).toBuffer();
    const metadata = await sharpInstance.metadata();

    return {
      src: filepath,
      width: metadata.width ?? 1000,
      height: metadata.height ?? 0,
      placeholder: bufferToBase64(resizedBuffer),
    };
  } catch (error) {
    console.error(error);
    return {
      src: filepath,
      width: 1000,
      height: 1000,
      placeholder:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
    };
  }
};

export default getPlaceholderImage;

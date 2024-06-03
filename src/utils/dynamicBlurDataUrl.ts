'use server';
import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const bufferToBase64 = (buffer: Buffer) => {
  return `data:image/png;base64,${buffer.toString('base64')}`;
};

const getFileBufferLocal = (filepath: string) => {
  const realFilepath = path.join(process.cwd(), 'public', filepath);
  return fs.readFile(realFilepath);
};

const getFileBufferRemote = async (url: string) => {
  const cacheState = url.endsWith('.gif');

  const response = await fetch(url, {
    cache: cacheState ? 'no-cache' : 'default',
  });
  return Buffer.from(await response.arrayBuffer());
};

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

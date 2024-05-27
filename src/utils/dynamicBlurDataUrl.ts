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
  const isLargeOrGif = url.endsWith('.gif');
  const fetchOptions = isLargeOrGif
    ? { cache: 'no-cache' }
    : { cache: 'force-cache' };

  const response = await fetch(
    url,
    fetchOptions as { cache: 'no-cache' | 'force-cache' },
  );
  return Buffer.from(await response.arrayBuffer());
};

const getFileBuffer = (src: string) => {
  const isRemote = src.startsWith('http');
  return isRemote ? getFileBufferRemote(src) : getFileBufferLocal(src);
};

const getPlaceholderImage = async (filepath: string) => {
  try {
    const originalBuffer = await getFileBuffer(filepath);
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer();

    return {
      src: filepath,
      placeholder: bufferToBase64(resizedBuffer),
    };
  } catch (error) {
    console.error(error);
    return {
      src: filepath,
      placeholder:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
    };
  }
};

export default getPlaceholderImage;

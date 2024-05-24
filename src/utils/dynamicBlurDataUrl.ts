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

const getPlaceholderImage = async (filepath: string) => {
  try {
    const originalBuffer = await getFileBufferLocal(filepath);
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

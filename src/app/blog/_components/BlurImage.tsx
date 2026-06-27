import Image from 'next/image';
import React from 'react';
import getPlaceholderImage from '@/utils/dynamicBlurDataUrl';

const BlurImage = async ({
  imageURL,
  title,
}: {
  imageURL: string;
  title: string;
}) => {
  const { src, width, height, placeholder } =
    await getPlaceholderImage(imageURL);
  return (
    <Image
      src={src}
      alt={`${title} 이미지`}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={placeholder}
      className="mx-auto h-auto w-full"
      unoptimized={src.endsWith('.gif')}
    />
  );
};

export default BlurImage;

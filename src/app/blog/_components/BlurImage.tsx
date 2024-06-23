import getPlaceholderImage from '@/utils/dynamicBlurDataUrl';
import Image from 'next/image';
import React from 'react';

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
    <div className="mx-auto aspect-video md:w-2/3">
      <Image
        src={src}
        alt={`${title} 이미지`}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={placeholder}
        className="size-full"
      />
    </div>
  );
};

export default BlurImage;

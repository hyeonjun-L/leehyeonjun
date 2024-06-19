import { Post } from '@/types/types';
import getPlaceholderImage from '@/utils/dynamicBlurDataUrl';
import Image from 'next/image';

const BlogTitle = async ({
  title,
  publishDate,
  categories,
  posterImage,
}: Post) => {
  const { src, width, height, placeholder } =
    await getPlaceholderImage(posterImage);

  return (
    <header>
      <h1 className="mb-0">{title}</h1>
      <div className="flex gap-3">
        <p>{new Date(publishDate).toLocaleDateString()}</p>
        <p>
          ({categories.map((categorie, i) => `${i ? ', ' : ''}${categorie}`)})
        </p>
      </div>
      <hr className="mt-0" />
      <div className="mx-auto aspect-video md:w-2/3">
        <Image
          src={src}
          alt={`${title} 포스터 이미지`}
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={placeholder}
          className="size-full"
        />
      </div>
    </header>
  );
};

export default BlogTitle;

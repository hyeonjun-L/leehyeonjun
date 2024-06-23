import { Post } from '@/types/types';
import Image from 'next/image';
import BlurImage from './BlurImage';

const BlogTitle = async ({
  title,
  publishDate,
  categories,
  posterImage,
}: Post) => {
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
      <BlurImage imageURL={posterImage} title={title} />
    </header>
  );
};

export default BlogTitle;

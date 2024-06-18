import { Post } from '@/types/types';
import Image from 'next/image';

const BlogTitle = ({ title, publishDate, categories, posterImage }: Post) => {
  return (
    <header>
      <h1 className="mb-0">{title}</h1>
      <div className="flex gap-3">
        <p>{new Date(publishDate).toLocaleDateString()}</p>
        <p>({categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)})</p>
      </div>
      <hr className="mt-0" />
      <div className="mx-auto aspect-video md:w-2/3">
        <Image
          src={posterImage}
          alt={`${title} 포스터 이미지`}
          width={1000}
          height={1000}
          className="size-full"
        />
      </div>
    </header>
  );
};

export default BlogTitle;

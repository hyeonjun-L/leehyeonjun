import Image from 'next/image';
import Link from 'next/link';
import getPlaceholderImage from '@/utils/dynamicBlurDataUrl';
import { Post } from '@/types/types';

interface PostsProps {
  posts: Post[];
  selectedCategory: string;
}

const Posts = ({ posts, selectedCategory }: PostsProps) => {
  return (
    <ol>
      {posts.map(
        async ({
          slug,
          title,
          description,
          publishDate,
          categories,
          posterImage,
        }) => {
          const { src, placeholder } = await getPlaceholderImage(posterImage);

          const isCategoryMatch =
            categories.some(
              (currentCategory) => selectedCategory === currentCategory,
            ) || selectedCategory === undefined;

          return (
            isCategoryMatch && (
              <li key={slug} className="mb-8 border-b border-solid pb-8">
                <Link href={`blog/${slug}`} className="flex flex-col gap-2">
                  <div className="relative aspect-video">
                    <Image
                      src={src}
                      placeholder="blur"
                      blurDataURL={placeholder}
                      alt={`${title} 이미지`}
                      layout="fill"
                    />
                  </div>
                  <h2 className="text-3xl">{title}</h2>
                  <p>{description}</p>
                  <p className="text-White-menu-text dark:text-dark-text">
                    {new Date(publishDate).toLocaleDateString()} (
                    {categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)})
                  </p>
                </Link>
              </li>
            )
          );
        },
      )}
    </ol>
  );
};

export default Posts;

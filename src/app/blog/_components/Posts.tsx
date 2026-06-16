import Image from 'next/image';
import Link from 'next/link';
import getPlaceholderImage from '@/utils/dynamicBlurDataUrl';
import { CategoryBadgeList } from './CategoryBadge';
import { Post } from '@/types/types';

interface PostsProps {
  posts: Post[];
  selectedCategory: string;
}

const Posts = ({ posts, selectedCategory }: PostsProps) => {
  const filteredPosts = posts.filter(
    ({ categories }) =>
      selectedCategory === undefined ||
      categories.some((category) => category === selectedCategory),
  );

  return (
    <ol className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
      {filteredPosts.map(
        async ({
          slug,
          title,
          description,
          publishDate,
          categories,
          posterImage,
          readingTime,
        }) => {
          const { src, placeholder } = await getPlaceholderImage(posterImage);

          return (
            <li key={slug} className="animate-fadeInUp">
              <Link
                href={`/blog/${slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-solid border-White-line bg-White-body transition duration-300 hover:-translate-y-1 hover:border-White-myVScodeText hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-White-myVScodeText dark:border-dark-line dark:bg-dark-selectFileMenu-bg dark:hover:border-dark-text dark:focus-visible:ring-dark-text"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={src}
                    placeholder="blur"
                    blurDataURL={placeholder}
                    alt={`${title} 포스트 대표 이미지`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h2 className="line-clamp-2 text-2xl font-semibold">
                    {title}
                  </h2>
                  <p className="line-clamp-2 flex-1 text-White-menu-text dark:text-dark-text">
                    {description}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-White-menu-text dark:text-dark-text">
                    <time dateTime={publishDate}>
                      {new Date(publishDate).toLocaleDateString()}
                    </time>
                    {readingTime ? (
                      <>
                        <span aria-hidden>·</span>
                        <span>{readingTime}분</span>
                      </>
                    ) : null}
                    <CategoryBadgeList categories={categories} size="sm" />
                  </div>
                </div>
              </Link>
            </li>
          );
        },
      )}
    </ol>
  );
};

export default Posts;

import { getPosts } from '@/utils/posts';
import BlurImage from './BlurImage';
import { CategoryBadgeList } from './CategoryBadge';
import { Post } from '@/types/types';

const BlogTitle = async ({
  title,
  publishDate,
  categories,
  posterImage,
}: Post) => {
  const posts = await getPosts();
  const readingTime = posts.find((post) => post.title === title)?.readingTime;

  return (
    <header className="not-prose mb-8">
      <h1 className="mb-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-White-menu-text dark:text-dark-text">
        <time dateTime={publishDate}>
          {new Date(publishDate).toLocaleDateString()}
        </time>
        {readingTime ? (
          <>
            <span aria-hidden>·</span>
            <span>{readingTime}분</span>
          </>
        ) : null}
        <CategoryBadgeList categories={categories} asLink size="md" />
      </div>
      <hr className="my-6 border-t border-solid border-White-line dark:border-dark-line" />
      <BlurImage imageURL={posterImage} title={title} />
    </header>
  );
};

export default BlogTitle;

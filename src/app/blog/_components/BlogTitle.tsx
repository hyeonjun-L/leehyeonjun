import JsonLd from '@/app/_components/JsonLd';
import { SITE_NAME, SITE_URL } from '@/constants/site';
import { formatPostDate } from '@/utils/formatDate';
import { getPosts } from '@/utils/posts';
import BlurImage from './BlurImage';
import { CategoryBadgeList } from './CategoryBadge';
import ViewCounter from './ViewCounter';
import { Post } from '@/types/types';

const BlogTitle = async ({
  title,
  publishDate,
  categories,
  posterImage,
}: Post) => {
  const posts = await getPosts();
  const post = posts.find((item) => item.title === title);
  const readingTime = post?.readingTime;
  const postUrl = `${SITE_URL}/blog/${post?.slug ?? ''}`;

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: post?.description,
    image: posterImage,
    datePublished: publishDate,
    dateModified: publishDate,
    author: { '@type': 'Person', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Person', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    url: postUrl,
    keywords: categories.join(', '),
    inLanguage: 'ko-KR',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: '블로그',
        item: `${SITE_URL}/blog`,
      },
      { '@type': 'ListItem', position: 3, name: title, item: postUrl },
    ],
  };

  return (
    <header className="not-prose mb-8">
      <JsonLd data={[blogPostingJsonLd, breadcrumbJsonLd]} />
      <h1 className="mb-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-White-menu-text dark:text-dark-text">
        <time dateTime={publishDate}>{formatPostDate(publishDate)}</time>
        {readingTime ? (
          <>
            <span aria-hidden>·</span>
            <span>{readingTime}분</span>
          </>
        ) : null}
        <ViewCounter slug={post?.slug ?? ''} increment />
        <CategoryBadgeList categories={categories} asLink size="md" />
      </div>
      <hr className="my-6 border-t border-solid border-White-line dark:border-dark-line" />
      <BlurImage imageURL={posterImage} title={title} />
    </header>
  );
};

export default BlogTitle;

import { Metadata } from 'next';
import { getPosts } from '@/utils/posts';
import Categories from './_components/Categories';
import Pagination from './_components/Pagination';
import Posts from './_components/Posts';
import SearchPost from './_components/SearchPost';

export const metadata: Metadata = {
  title: '블로그',
  description: 'GIS·지도·웹 개발에 대한 기록을 남기는 이현준의 블로그',
  alternates: {
    canonical: '/blog',
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: '이현준 블로그 RSS' }],
    },
  },
};

const PAGE_SIZE = 8;

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const {
    categorie: selectedCategory,
    q: query,
    page: pageParam,
  } = await searchParams;
  const postList = await getPosts();

  const normalizedQuery = query?.trim().toLowerCase() ?? '';

  const filteredPosts = postList.filter((post) => {
    const matchesCategory =
      !selectedCategory ||
      post.categories.some((category) => category === selectedCategory);

    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    return (
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.description.toLowerCase().includes(normalizedQuery) ||
      post.categories.some((category) =>
        category.toLowerCase().includes(normalizedQuery),
      )
    );
  });

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, Number(pageParam) || 1), totalPages);
  const pagedPosts = filteredPosts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <main
      className={`${pagedPosts.length > 1 ? '' : 'min-h-dvh'} mx-auto w-full max-w-6xl p-4 lg:p-8`}
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl font-semibold sm:text-5xl">이현준 블로그</h1>
        <SearchPost />
      </div>
      <Categories selectCategorie={selectedCategory} posts={postList} />
      {query && (
        <p className="mt-4 text-White-menu-text dark:text-dark-text">
          총 {filteredPosts.length}개의 포스트를 찾았습니다.
        </p>
      )}
      <Posts posts={pagedPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        query={query}
        category={selectedCategory}
      />
    </main>
  );
};

export default page;

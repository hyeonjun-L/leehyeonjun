import { Metadata } from 'next';
import { getPosts } from '@/utils/posts';
import Categories from './_components/Categories';
import Posts from './_components/Posts';
import SearchPost from './_components/SearchPost';

export const metadata: Metadata = {
  title: '이현준 | 블로그',
  description: '이현준 블로그 메인 페이지',
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const { categorie: selectedCategory, q: query } = await searchParams;
  const postList = await getPosts();

  const getFilteredPosts = () => {
    const lowerQuery = query.toLowerCase();

    const filteredPosts = postList.filter(
      ({ title, description, categories }) => {
        const lowerTitle = title.toLowerCase();
        const lowerDescription = description.toLowerCase();
        const lowerCategories = categories.map((category) =>
          category.toLowerCase(),
        );

        return (
          lowerTitle.includes(lowerQuery) ||
          lowerDescription.includes(lowerQuery) ||
          lowerCategories.some((category) => category.includes(lowerQuery))
        );
      },
    );

    return filteredPosts;
  };

  const posts = query ? getFilteredPosts() : postList;

  return (
    <main
      className={`${posts.length > 1 ? '' : 'min-h-dvh'} mx-auto w-full max-w-6xl p-4 lg:p-8`}
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl font-semibold sm:text-5xl">이현준 블로그</h1>
        <SearchPost />
      </div>
      <Categories selectCategorie={selectedCategory} posts={postList} />
      {query && (
        <p className="mt-4 text-White-menu-text dark:text-dark-text">
          총 {posts.length}개의 포스트를 찾았습니다.
        </p>
      )}
      <Posts selectedCategory={selectedCategory} posts={posts} />
    </main>
  );
};

export default page;

import { Metadata } from 'next';
import { getPosts } from '@/utils/posts';
import Categories from './_components/Categories';
import SearchPost from './_components/SearchPost';
import Posts from './_components/Posts';

export const metadata: Metadata = {
  title: '이현준 | 블로그',
  description: '이현준 블로그 메인 페이지',
};

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { categorie: selectedCategory, q: query } = searchParams;
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
      className={`${posts.length > 1 ? '' : 'min-h-dvh'} w-full gap-3 p-4 lg:flex xl:p-8`}
    >
      <Categories selectCategorie={selectedCategory} posts={postList} />
      <section className="mx-auto mt-5 lg:mt-0 lg:w-[44.5rem] xl:w-[47.5rem]">
        <div className="mb-4">
          <div className="flex items-center justify-between py-3">
            <h1>이현준 블로그</h1>
            <SearchPost />
          </div>
          {query && <p>총 {posts.length}개의 포스트를 찾았습니다.</p>}
        </div>
        <Posts selectedCategory={selectedCategory} posts={posts} />
      </section>
    </main>
  );
};

export default page;

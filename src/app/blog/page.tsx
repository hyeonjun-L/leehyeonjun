import { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/utils/posts';
import Categories from './_components/Categories';
import SearchPost from './_components/SearchPost';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '이현준 | 블로그',
  description: '이현준 블로그 메인 페이지',
};

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { categorie, q: query } = searchParams;
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
      <Categories selectCategorie={categorie} posts={postList} />
      <section className="mx-auto mt-5 lg:mt-0 lg:w-[44.5rem] xl:w-[47.5rem]">
        <div className="mb-8">
          <div className="flex items-center justify-between py-3">
            <h1>이현준 블로그</h1>
            <SearchPost />
          </div>
          {query && <p>총 {posts.length}개의 포스트를 찾았습니다.</p>}
        </div>
        <ol>
          {posts.map(
            ({
              slug,
              title,
              description,
              publishDate,
              categories,
              posterImage,
            }) => (
              <li key={slug} className="mb-8 border-b border-solid pb-8">
                <Link href={`blog/${slug}`} className="flex flex-col gap-2">
                  <div className="relative aspect-video">
                    <Image
                      src={posterImage}
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
            ),
          )}
        </ol>
      </section>
    </main>
  );
};

export default page;

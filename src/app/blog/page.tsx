import { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/utils/posts';
import Categories from './_components/Categories';
import SearchPost from './_components/SearchPost';

export const metadata: Metadata = {
  title: '이현준 | 블로그',
  description: '이현준 블로그 메인 페이지',
};

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { categorie, q } = searchParams;
  const posts = await getPosts();

  return (
    <main className="min-h-dvh w-full gap-3 p-4 lg:flex xl:p-8">
      <Categories selectCategorie={categorie} posts={posts} />
      <section className="mx-auto mt-5 lg:mt-0">
        <div className="flex items-center justify-between py-3">
          <h1>이현준 블로그</h1>
          <SearchPost />
        </div>
        <button className="border border-solid border-white p-3">
          <ol>
            {posts.map(({ slug, title, publishDate, categories }) => (
              <li key={slug}>
                <Link href={`blog/${slug}`}>
                  <h2>{title}</h2>
                  <p>
                    <strong>Published:</strong>
                    {new Date(publishDate).toLocaleDateString()}
                    <strong>Categories:</strong>
                    {categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)}
                  </p>
                </Link>
              </li>
            ))}
          </ol>
        </button>
      </section>
    </main>
  );
};

export default page;

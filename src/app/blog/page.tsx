import { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/utils/posts';

export const metadata: Metadata = {
  title: '이현준 | 블로그',
  description: '이현준 블로그 메인 페이지',
};

const page = async ({}: { params: { slug: string } }) => {
  const posts = await getPosts();

  return (
    <main className="flex min-h-[80dvh] flex-col items-center gap-3">
      <h1>Next.js MDX Blog</h1>
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
    </main>
  );
};

export default page;

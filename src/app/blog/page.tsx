import { getPosts } from '@/posts';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.title,
  }));
}

const page = async ({ params }: { params: { slug: string } }) => {
  console.log(params);
  const posts = await getPosts();

  return <main className="flex flex-col"></main>;
};

export default page;

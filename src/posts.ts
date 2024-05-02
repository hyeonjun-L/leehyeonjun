import { readdir } from 'fs/promises';

const categories = ['dog', 'cat', 'rock'];

type Category = (typeof categories)[number];

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
}

export async function getPosts(): Promise<Post[]> {
  const slugs = (
    await readdir('./src/app/blog/(posts)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/blog/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    }),
  );

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

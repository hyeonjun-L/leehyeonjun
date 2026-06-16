import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { cache } from 'react';
import { getReadingTime } from '@/utils/readingTime';
import { Post } from '@/types/types';

export const getPosts = cache(async (): Promise<Post[]> => {
  const postPath = path.resolve(process.cwd(), 'src', 'app', 'blog', '(posts)');

  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const [{ metadata }, raw] = await Promise.all([
        import(`../app/blog/(posts)/${name}/page.mdx`),
        readFile(path.join(postPath, name, 'page.mdx'), 'utf-8'),
      ]);

      return { slug: name, ...metadata, readingTime: getReadingTime(raw) };
    }),
  );

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
});

export async function getAdjacentPosts(
  slug: string,
): Promise<{ prev: Post | null; next: Post | null }> {
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: posts[index - 1] ?? null,
    next: posts[index + 1] ?? null,
  };
}

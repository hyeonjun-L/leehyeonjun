import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { cache } from 'react';
import { getReadingTime } from '@/utils/readingTime';
import { Post } from '@/types/types';

// (posts) 아래를 재귀로 걸어 page.mdx를 직접 가진 디렉터리를 포스트로 인식한다.
// 시리즈별 route group((gis)/(next) 등)으로 감싸도 slug/URL은 리프 폴더명 그대로다.
const collectPostDirs = async (
  dir: string,
  rel: string,
): Promise<{ slug: string; relPath: string }[]> => {
  const entries = await readdir(dir, { withFileTypes: true });

  if (entries.some((e) => e.isFile() && e.name === 'page.mdx')) {
    return [{ slug: path.basename(dir), relPath: rel }];
  }

  const nested = await Promise.all(
    entries
      .filter((e) => e.isDirectory())
      .map((e) =>
        collectPostDirs(
          path.join(dir, e.name),
          rel ? `${rel}/${e.name}` : e.name,
        ),
      ),
  );

  return nested.flat();
};

export const getPosts = cache(async (): Promise<Post[]> => {
  const postPath = path.resolve(process.cwd(), 'src', 'app', 'blog', '(posts)');

  const postDirs = await collectPostDirs(postPath, '');

  const posts = await Promise.all(
    postDirs.map(async ({ slug, relPath }) => {
      const [{ metadata }, raw] = await Promise.all([
        import(`../app/blog/(posts)/${relPath}/page.mdx`),
        readFile(path.join(postPath, relPath, 'page.mdx'), 'utf-8'),
      ]);

      return { slug, ...metadata, readingTime: getReadingTime(raw) };
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

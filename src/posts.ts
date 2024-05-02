// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const getPosts = async (): Promise<Post[]> => {
//   const slugs = (
//     await readdir('./src/app/blog/(posts)', { withFileTypes: true })
//   ).filter((dirent) => dirent.isDirectory());

//   console.log('slugs:::', slugs);

//   const posts = await Promise.all(
//     slugs.map(async ({ name }) => {
//       const moduleUrl = new URL(`./(posts)/${name}/page.mdx`, import.meta.url);
//       const { metadata } = await import(moduleUrl.href);
//       return { slug: name, ...metadata };
//     }),
//   );

//   posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

//   return posts;
// };

import { readdir } from 'fs/promises';

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  //   categories: Category[];
}

export const postsPerPage = 3 as const;

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

// export async function getPostsByCategory({
//   category,
// }: {
//   category: Category;
// }): Promise<Post[]> {
//   const allPosts = await getPosts();

//   // Filter posts by specified category
//   const posts = allPosts.filter(
//     (post) => post.categories.indexOf(category) !== -1
//   );

//   return posts;
// }

// export async function getPaginatedPosts({
//   page,
//   limit,
// }: {
//   page: number;
//   limit: number;
// }): Promise<{ posts: Post[]; total: number }> {
//   const allPosts = await getPosts();

//   // Get a subset of posts pased on page and limit
//   const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

//   return {
//     posts: paginatedPosts,
//     total: allPosts.length,
//   };
// }

// export async function getPaginatedPostsByCategory({
//   page,
//   limit,
//   category,
// }: {
//   page: number;
//   limit: number;
//   category: Category;
// }): Promise<{ posts: Post[]; total: number }> {
//   const allCategoryPosts = await getPostsByCategory({ category });

//   // Get a subset of posts pased on page and limit
//   const paginatedCategoryPosts = allCategoryPosts.slice(
//     (page - 1) * limit,
//     page * limit
//   );

//   return {
//     posts: paginatedCategoryPosts,
//     total: allCategoryPosts.length,
//   };
// }

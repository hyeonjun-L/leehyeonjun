import { MetadataRoute } from 'next';
import { getPosts } from '@/utils/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getPosts();

  const posts = allPosts.map((post) => ({
    url: `https://www.leehyeonjun.com/blog/${post.slug}`,
    lastModified: new Date(post.publishDate).toISOString().split('T')[0],
  }));

  const routes = [
    '',
    '/blog',
    '/profile',
    '/portfolio',
    '/portfolio/connection',
    '/portfolio/connection-health',
  ].map((route) => ({
    url: `https://www.leehyeonjun.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}

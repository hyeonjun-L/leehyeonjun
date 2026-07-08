import { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/site';
import { getPosts } from '@/utils/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getPosts();
  const today = new Date().toISOString().split('T')[0];

  const posts: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate).toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  return [...routes, ...posts];
}

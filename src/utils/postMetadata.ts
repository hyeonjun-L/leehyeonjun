import { SITE_NAME, SITE_URL, ogImageUrl } from '@/constants/site';
import type { Metadata } from 'next';

interface PostMetaInput {
  title: string;
  description: string;
  publishDate: string;
  posterImage: string;
  categories: string[];
  slug: string;
}

export function createPostMetadata(
  input: PostMetaInput,
): Metadata & Omit<PostMetaInput, 'slug'> {
  const { title, description, publishDate, posterImage, categories, slug } =
    input;

  const url = `${SITE_URL}/blog/${slug}`;
  const ogImage = ogImageUrl({
    title,
    category: categories[0],
    date: publishDate,
  });

  return {
    title,
    description,
    publishDate,
    posterImage,
    categories,
    keywords: categories,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      url,
      siteName: SITE_NAME,
      title,
      description,
      publishedTime: publishDate,
      authors: [SITE_NAME],
      tags: categories,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

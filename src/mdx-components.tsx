import type { MDXComponents } from 'mdx/types';
import BlogTitle from './app/blog/_components/BlogTitle';
import Link from 'next/link';
import ReferenceList from './app/blog/_components/ReferenceList';
import BlurImage from './app/blog/_components/BlurImage';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Link,
    BlogTitle,
    ReferenceList,
    BlurImage,
    ...components,
  };
}

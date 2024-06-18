import type { MDXComponents } from 'mdx/types';
import BlogTitle from './app/blog/_components/BlogTitle';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    BlogTitle,
    ...components,
  };
}

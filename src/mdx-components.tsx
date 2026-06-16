import Link from 'next/link';
import BlogTitle from './app/blog/_components/BlogTitle';
import BlurImage from './app/blog/_components/BlurImage';
import CodeBlock from './app/blog/_components/CodeBlock';
import ReferenceList from './app/blog/_components/ReferenceList';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Link,
    BlogTitle,
    ReferenceList,
    BlurImage,
    pre: CodeBlock,
    ...components,
  };
}

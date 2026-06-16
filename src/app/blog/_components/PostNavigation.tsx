'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Post } from '@/types/types';

interface PostNavigationProps {
  posts: Post[];
}

const CARD_CLASS =
  'group flex flex-col gap-1 rounded-lg border border-solid border-White-line p-4 transition-colors duration-300 hover:border-White-myVScodeText hover:bg-White-anchor-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-White-myVScodeText dark:border-dark-line dark:hover:border-dark-text dark:hover:bg-dark-menu-hover dark:focus-visible:ring-dark-text';

const PostNavigation = ({ posts }: PostNavigationProps) => {
  const pathname = usePathname();
  const slug = pathname.split('/').filter(Boolean).pop();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return null;
  }

  // posts는 최신순 정렬 → index+1이 더 오래된(이전) 글, index-1이 더 최신(다음) 글
  const older = posts[index + 1] ?? null;
  const newer = posts[index - 1] ?? null;

  if (!older && !newer) {
    return null;
  }

  return (
    <nav
      aria-label="이전·다음 글"
      className="not-prose mt-12 grid grid-cols-2 gap-4 border-t border-solid border-White-line pt-6 dark:border-dark-line"
    >
      {older ? (
        <Link href={`/blog/${older.slug}`} className={CARD_CLASS}>
          <span className="text-xs text-White-menu-text dark:text-dark-text">
            ← 이전 글
          </span>
          <span className="line-clamp-2 font-semibold">{older.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {newer ? (
        <Link
          href={`/blog/${newer.slug}`}
          className={`${CARD_CLASS} items-end text-right`}
        >
          <span className="text-xs text-White-menu-text dark:text-dark-text">
            다음 글 →
          </span>
          <span className="line-clamp-2 font-semibold">{newer.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
};

export default PostNavigation;

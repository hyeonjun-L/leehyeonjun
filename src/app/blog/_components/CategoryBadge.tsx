import Link from 'next/link';

interface CategoryBadgeProps {
  category: string;
  asLink?: boolean;
  size?: 'sm' | 'md';
}

const SIZE_CLASS = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
} as const;

const BASE_CLASS =
  'inline-flex items-center gap-0.5 rounded-full border border-solid border-White-line bg-White-selectFileMenu-bg text-White-myVScodeText transition-colors duration-300 dark:border-dark-line dark:bg-dark-selectFileMenu-bg dark:text-dark-text';

const LINK_CLASS =
  'hover:bg-White-anchor-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-White-myVScodeText dark:hover:bg-dark-menu-hover dark:focus-visible:ring-dark-text';

const CategoryBadge = ({
  category,
  asLink = false,
  size = 'sm',
}: CategoryBadgeProps) => {
  const content = (
    <>
      <span aria-hidden className="opacity-60">
        #
      </span>
      {category}
    </>
  );

  if (asLink) {
    return (
      <Link
        href={`/blog?categorie=${category}`}
        aria-label={`${category} 카테고리 글 보기`}
        className={`${BASE_CLASS} ${SIZE_CLASS[size]} ${LINK_CLASS}`}
      >
        {content}
      </Link>
    );
  }

  return <span className={`${BASE_CLASS} ${SIZE_CLASS[size]}`}>{content}</span>;
};

interface CategoryBadgeListProps {
  categories: string[];
  asLink?: boolean;
  size?: 'sm' | 'md';
}

export const CategoryBadgeList = ({
  categories,
  asLink,
  size,
}: CategoryBadgeListProps) => (
  <ul className="not-prose flex flex-wrap gap-1.5">
    {categories.map((category) => (
      <li key={category}>
        <CategoryBadge category={category} asLink={asLink} size={size} />
      </li>
    ))}
  </ul>
);

export default CategoryBadge;

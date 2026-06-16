import Link from 'next/link';
import { Post } from '@/types/types';

interface CategoriesProps {
  posts: Post[];
  selectCategorie?: string;
}

const Categories = ({ posts, selectCategorie }: CategoriesProps) => {
  const categories: { [key: string]: number } = posts.reduce(
    (acc: { [key: string]: number }, post) => {
      post.categories.forEach((category) => {
        if (acc[category]) {
          acc[category]++;
        } else {
          acc[category] = 1;
        }
      });
      return acc;
    },
    { 전체보기: posts.length },
  );

  return (
    <nav
      aria-label="카테고리"
      className="border-b border-solid border-White-line pb-4 dark:border-dark-line"
    >
      <ul className="flex flex-wrap gap-2">
        {Object.entries(categories).map(([categorie, count]) => {
          const isActive =
            (!selectCategorie && categorie === '전체보기') ||
            selectCategorie === categorie;
          const href =
            categorie === '전체보기' ? '/blog' : `/blog?categorie=${categorie}`;

          return (
            <li key={categorie}>
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-solid px-3 py-1 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-White-myVScodeText dark:focus-visible:ring-dark-text ${
                  isActive
                    ? 'border-White-myVScodeText bg-White-menu-bg font-semibold text-White-myVScodeText dark:border-dark-text dark:bg-dark-menu-hover dark:text-white'
                    : 'border-White-line text-White-menu-text hover:bg-White-anchor-hover dark:border-dark-line dark:text-dark-text dark:hover:bg-dark-menu-hover'
                }`}
              >
                {categorie}
                <span className="opacity-60">({count})</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Categories;

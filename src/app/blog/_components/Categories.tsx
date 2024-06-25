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
    <aside className="mt-2 lg:mt-0 lg:w-52 xl:w-64">
      <div className="hidden border-b border-solid border-White-line py-3 lg:block dark:border-dark-line">
        카테고리 목록
      </div>
      <ul className="hidden lg:block">
        {Object.entries(categories).map(([categorie, count]) => (
          <li
            key={categorie}
            className={`flex gap-2 pt-2 ${(!selectCategorie && categorie === '전체보기') || selectCategorie === categorie ? 'font-bold dark:text-white' : 'dark:[&>a]:text-dark-text'}`}
          >
            <Link
              href={
                categorie === '전체보기'
                  ? '/blog'
                  : `/blog?categorie=${categorie}`
              }
              className={`underline-offset-4 ${(!selectCategorie && categorie === '전체보기') || selectCategorie === categorie ? '' : 'hover:underline'}`}
            >
              {categorie}
            </Link>
            <span>({count})</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 overflow-auto pb-2 lg:hidden">
        {Object.entries(categories).map(([categorie, count]) => (
          <Link
            key={categorie}
            href={
              categorie === '전체보기'
                ? '/blog'
                : `/blog?categorie=${categorie}`
            }
            className={`${(!selectCategorie && categorie === '전체보기') || selectCategorie === categorie ? 'bg-White-menu-bg dark:bg-dark-menu-hover' : 'hover:bg-White-menu-bg dark:hover:bg-dark-menu-hover'} flex gap-1 whitespace-nowrap rounded-full border border-solid border-black px-3 py-1 dark:border-white`}
          >
            {categorie}
            <span>({count})</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Categories;

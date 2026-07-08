import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  query?: string;
  category?: string;
}

const buildHref = (page: number, query?: string, category?: string) => {
  const params = new URLSearchParams();

  if (category) params.set('categorie', category);
  if (query) params.set('q', query);
  if (page > 1) params.set('page', String(page));

  const queryString = params.toString();

  return queryString ? `/blog?${queryString}` : '/blog';
};

const linkClass =
  'flex h-10 min-w-10 items-center justify-center rounded-md border border-solid border-White-line px-3 text-sm transition hover:border-White-myVScodeText hover:text-White-myVScodeText focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-White-myVScodeText dark:border-dark-line dark:hover:border-dark-text dark:hover:text-dark-text';

const Pagination = ({
  currentPage,
  totalPages,
  query,
  category,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="페이지 네비게이션"
      className="mt-12 flex items-center justify-center gap-2"
    >
      {currentPage > 1 ? (
        <Link
          href={buildHref(currentPage - 1, query, category)}
          rel="prev"
          aria-label="이전 페이지"
          className={linkClass}
        >
          ←
        </Link>
      ) : null}

      {pages.map((page) => {
        const isActive = page === currentPage;

        return (
          <Link
            key={page}
            href={buildHref(page, query, category)}
            aria-current={isActive ? 'page' : undefined}
            className={`${linkClass} ${
              isActive
                ? 'border-White-myVScodeText font-semibold text-White-myVScodeText dark:border-dark-text dark:text-dark-text'
                : ''
            }`}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages ? (
        <Link
          href={buildHref(currentPage + 1, query, category)}
          rel="next"
          aria-label="다음 페이지"
          className={linkClass}
        >
          →
        </Link>
      ) : null}
    </nav>
  );
};

export default Pagination;

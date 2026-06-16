'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { SearchSVG } from '@/icons/index';
import debounce from '@/utils/debounce';

const SearchPost = () => {
  const router = useRouter();

  const debouncedSearch = debounce((searchTerm?: string) => {
    router.push(searchTerm ? `/blog?q=${searchTerm}` : '/blog');
  }, 500);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    debouncedSearch(searchTerm);
  };

  return (
    <div className="flex h-10 w-full items-center overflow-hidden rounded-md border border-solid border-White-line bg-White-body transition-colors duration-300 focus-within:border-White-myVScodeText focus-within:ring-2 focus-within:ring-White-myVScodeText sm:w-64 dark:border-dark-line dark:bg-dark-selectFileMenu-bg dark:focus-within:border-dark-text dark:focus-within:ring-dark-text">
      <label
        htmlFor="search"
        className="flex h-full cursor-pointer items-center px-2"
      >
        <SearchSVG className="size-5 [&>path]:fill-White-menu-text dark:[&>path]:fill-dark-text" />
      </label>
      <input
        id="search"
        aria-label="블로그 검색"
        className="h-full w-full bg-transparent pr-3 text-White-menu-text placeholder:text-White-menu-text/60 focus:outline-none dark:text-dark-text dark:placeholder:text-dark-disabled"
        placeholder="검색어를 입력하세요"
        type="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchPost;

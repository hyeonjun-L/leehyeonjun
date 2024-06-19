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
    <div className="flex h-8 overflow-hidden rounded-md border border-solid border-black ">
      <label
        htmlFor="search"
        className="flex cursor-pointer items-center bg-white px-1"
      >
        <SearchSVG className="size-6" />
      </label>
      <input
        id="search"
        className="flex-grow text-black focus:outline-none"
        placeholder="검색어를 입력하세요"
        type="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchPost;

'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { SearchSVG } from '@/icons/index';

const SearchPost = () => {
  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    router.push(`/blog?q=${searchTerm}`);
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

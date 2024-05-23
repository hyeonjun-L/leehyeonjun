'use client';
import Image from 'next/image';
import { useState } from 'react';
import { MobileSVG, PcSVG } from '@/icons/index';
import {
  instructor_detail_pc,
  instructor_detail_mobile,
} from '@/images/connection';

interface GifContainerProps {
  title: string;
  children: React.ReactNode;
}

const GifContainer = ({ title, children }: GifContainerProps) => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <>
      <div className="absolute right-0 top-0 flex gap-3 lg:hidden">
        <button
          className="group p-1"
          onClick={() => setIsMobile(true)}
          aria-label="gif-mobile-view"
        >
          <MobileSVG
            className={`size-7 ${isMobile ? 'fill-black dark:fill-white' : 'fill-dark-disabled'} group-hover:fill-black group-hover:dark:fill-white`}
          />
        </button>
        <button
          className="group p-1"
          onClick={() => setIsMobile(false)}
          aria-label="gif-pc-view"
        >
          <PcSVG
            className={`size-7 ${isMobile ? 'fill-dark-disabled' : 'fill-black dark:fill-white'} group-hover:fill-black group-hover:dark:fill-white`}
          />
        </button>
      </div>
      <figure
        className={`sm:grid ${isMobile ? 'sm:grid-cols-[auto_1fr]' : ''} lg:grid-cols-[auto_1fr]`}
      >
        <div
          className={`${isMobile ? '' : 'hidden lg:block'} mx-auto aspect-[9/16] max-h-[28rem] sm:mx-0 sm:max-h-[37.5rem]`}
        >
          <Image
            src={instructor_detail_mobile}
            className="mx-auto h-full w-auto border border-solid border-black"
            alt={`${title}-mobile-동작-gif`}
          />
        </div>
        <Image
          src={instructor_detail_pc}
          className={`${isMobile ? 'hidden lg:block' : ''} h-full w-auto border border-solid border-black`}
          alt={`${title}-pc-동작-gif`}
        />
        <figcaption className="my-4 lg:col-span-2">{children}</figcaption>
      </figure>
    </>
  );
};

export default GifContainer;

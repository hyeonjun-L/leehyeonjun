'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  instructor_detail_pc,
  instructor_detail_mobile,
} from '@/images/connection';

interface GifContainerProps {
  children: React.ReactNode;
}

const GifContainer = ({ children }: GifContainerProps) => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <>
      <div className="absolute right-0 top-0 flex gap-3 lg:hidden">
        <button onClick={() => setIsMobile(true)}>mobile</button>
        <button onClick={() => setIsMobile(false)}>pc</button>
      </div>
      <figure
        className={`grid ${isMobile ? 'sm:grid-cols-[auto_1fr]' : ''} lg:grid-cols-[auto_1fr]`}
      >
        <div
          className={`${isMobile ? '' : 'hidden lg:block'} aspect-[9/16] max-h-[37.5rem]`}
        >
          <Image
            src={instructor_detail_mobile}
            className="h-full w-auto"
            alt="ss"
          />
        </div>
        <Image
          src={instructor_detail_pc}
          className={`${isMobile ? 'hidden lg:block' : ''} h-full w-auto`}
          alt="ss"
        />
        <figcaption className="my-4 lg:col-span-2">{children}</figcaption>
      </figure>
    </>
  );
};

export default GifContainer;

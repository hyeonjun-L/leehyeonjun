'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { HIDE_PATH } from '@/constants/constants';
import { Headings } from '@/types/types';

const AnchorNav = () => {
  const [headings, setHeadings] = useState<Headings[]>([]);
  const pathname = usePathname();
  const marginRef = useRef(0);
  const initialMargin = 5;

  useEffect(() => {
    const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const newHeadings: Headings[] = Array.from(allHeadings).map(
      (heading: Element) => {
        const element = heading as HTMLElement;
        return {
          level: Number(element.localName.slice(1)),
          text: element.innerText,
        };
      },
    );
    marginRef.current = 0;
    setHeadings(newHeadings);
  }, [pathname]);

  const calculateMargin = (beforeLevel: number, currentLevel: number) => {
    if (beforeLevel < currentLevel) {
      marginRef.current += initialMargin;
    } else if (beforeLevel > currentLevel) {
      marginRef.current -= initialMargin * (beforeLevel - currentLevel);
    }
  };

  return (
    !HIDE_PATH.includes(pathname) && (
      <aside className="bg-White-anchor-bg hidden h-full w-72 flex-shrink-0 overflow-y-auto px-6 py-5 text-sm lg:block dark:bg-dark-anchor-bg">
        <section className="text-dark-600 flex max-h-full w-full flex-col gap-1 border-l border-solid border-black dark:border-white">
          {headings.map(({ level, text }, index) => {
            const beforeLevel = index > 0 ? headings[index - 1].level : level;

            calculateMargin(beforeLevel, level);

            const mlStyle = { paddingLeft: `${marginRef.current}px` };

            return (
              <div
                style={mlStyle}
                key={index}
                className="has-[:hover]:bg-White-anchor-hover flex w-full dark:has-[:hover]:bg-dark-anchor-hover"
              >
                <Link
                  href={`#${text}`}
                  className="line-clamp-2 max-w-full break-words dark:hover:text-white"
                  replace
                >
                  {text}
                </Link>
              </div>
            );
          })}
        </section>
      </aside>
    )
  );
};

export default AnchorNav;

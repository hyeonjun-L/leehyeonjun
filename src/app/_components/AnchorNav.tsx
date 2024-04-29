'use client';

import { Headings } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

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
    <aside className="bg-dark-200 hidden h-full w-72 flex-shrink-0 px-6 py-5 lg:block ">
      <section className="text-dark-600 flex w-full flex-col gap-1 border-l border-solid border-white">
        {headings.map(({ level, text }, index) => {
          const beforeLevel = index > 0 ? headings[index - 1].level : level;

          calculateMargin(beforeLevel, level);

          const mlStyle = { paddingLeft: `${marginRef.current}px` };

          return (
            <div
              style={mlStyle}
              key={index}
              className="has-[:hover]:bg-dark-400 flex w-full "
            >
              <Link
                href={`#${text}`}
                className="max-w-full truncate hover:text-white"
                replace
              >
                {text}
              </Link>
            </div>
          );
        })}
      </section>
    </aside>
  );
};

export default AnchorNav;

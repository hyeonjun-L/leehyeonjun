'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HIDE_PATH } from '@/constants/constants';
import { Headings } from '@/types/types';

const AnchorNav = () => {
  const [headings, setHeadings] = useState<Headings[]>([]);
  const [viewHeadings, setViewHeadings] = useState<Headings[]>([]);
  const pathname = usePathname();

  const viewHeading = viewHeadings.reduce<Headings>(
    (acc, heading) => {
      return acc.level < heading.level ? acc : heading;
    },
    { level: 7, text: '', id: '' },
  );

  const generateIdFromText = (text: string) => {
    return text.replace(/\s+/g, '-').toLowerCase();
  };

  useEffect(() => {
    const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const newHeadings: Headings[] = Array.from(allHeadings).map(
      (heading: Element) => {
        const element = heading as HTMLElement;
        const id = generateIdFromText(element.innerText);
        element.setAttribute('id', id);
        return {
          level: Number(element.localName.slice(1)),
          text: element.innerText,
          id,
        };
      },
    );
    setHeadings(newHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const headingText = target?.innerText;
          const headingLevel = Number(target.nodeName.slice(1));
          const headingId = target.id;

          if (entry.isIntersecting) {
            setViewHeadings((prevHeadings) => {
              const exists = prevHeadings.some(
                (heading) => heading.text === headingText,
              );
              if (!exists) {
                return [
                  ...prevHeadings,
                  { level: headingLevel, text: headingText, id: headingId },
                ];
              }
              return prevHeadings;
            });
          } else {
            setViewHeadings((prevHeadings) =>
              prevHeadings.filter((heading) => heading.text !== headingText),
            );
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    );

    allHeadings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      allHeadings.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, [pathname]);

  const ANCHOR_HEADER_MARGIN = ['', 'pl-4', 'pl-8', 'pl-12', 'pl-16', 'pl-20'];

  return (
    !HIDE_PATH.includes(pathname) && (
      <aside className="pl- hidden h-full w-72 flex-shrink-0 overflow-y-auto bg-White-anchor-bg p-5 text-sm lg:block dark:bg-dark-anchor-bg">
        <section className="text-dark-600 flex max-h-full w-full flex-col gap-1 border-l border-solid border-black pl-1 dark:border-white">
          {headings.map(({ level: currentLevel, text, id }, index) => {
            const beforeLevel = headings[index - 1]?.level;
            const hasHigherPrevLevel =
              beforeLevel && beforeLevel !== currentLevel;

            return (
              <div
                key={index}
                className={`flex w-full has-[:hover]:bg-White-anchor-hover dark:has-[:hover]:bg-dark-anchor-hover 
                ${viewHeading.id === id ? 'bg-dark-anchor-active' : ''}`}
              >
                <Link
                  href={`#${id}`}
                  className={`${ANCHOR_HEADER_MARGIN[--currentLevel]} relative line-clamp-2 max-w-full break-words dark:hover:text-white`}
                  replace
                >
                  {hasHigherPrevLevel && (
                    <span className="absolute -translate-x-5">┗</span>
                  )}
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

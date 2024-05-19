'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { HIDE_PATH } from '@/constants/constants';
import { Context } from '../Provider';
import { Headings } from '@/types/types';

const AnchorNav = () => {
  const { anchorView } = useContext(Context);
  const [headings, setHeadings] = useState<Headings[]>([]);
  const [viewHeadings, setViewHeadings] = useState<Headings[]>([]);
  const pathname = usePathname();

  const viewHeading = viewHeadings.reduce(
    (acc, heading) => (acc.level < heading.level ? acc : heading),
    { level: 7, text: '', id: '' },
  );

  const generateIdFromText = (text: string) => {
    return text.replace(/\s+/g, '-').toLowerCase();
  };

  const resetViewHeadings = () => {
    setViewHeadings([]);
  };

  const addViewHeadings = (prevHeadings: Headings[], newHeading: Headings) => {
    const exists = prevHeadings.some(({ id }) => id === newHeading.id);
    if (!exists) {
      return [...prevHeadings, { ...newHeading }];
    }
    return prevHeadings;
  };

  useEffect(() => {
    const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    const newHeadings: Headings[] = Array.from(allHeadings).map(
      (heading: Element, index) => {
        const element = heading as HTMLElement;
        const id = generateIdFromText(element.innerText + index);
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
          const { target, isIntersecting, boundingClientRect, rootBounds } =
            entry;
          const headingText = (target as HTMLElement).innerText;
          const headingLevel = Number(target.nodeName.slice(1));
          const headingId = target.id;

          if (isIntersecting) {
            setViewHeadings((prevHeadings) =>
              addViewHeadings(prevHeadings, {
                id: headingId,
                text: headingText,
                level: headingLevel,
              }),
            );
          } else {
            setViewHeadings((prevHeadings) => {
              const newHeadings = prevHeadings.filter(
                ({ id }) => id !== headingId,
              );

              const isTopBoundaryExceeded =
                rootBounds && boundingClientRect.top < rootBounds.top;

              if (isTopBoundaryExceeded) {
                return newHeadings.length === 0 ? prevHeadings : newHeadings;
              } else {
                const prevIndex =
                  prevHeadings.findIndex(({ id }) => id === headingId) - 1;

                return newHeadings.length === 0 || !isTopBoundaryExceeded
                  ? newHeadings
                  : prevIndex >= 0
                    ? [prevHeadings[prevIndex]]
                    : [];
              }
            });
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
      <aside
        className={`${anchorView ? 'block' : 'hidden'} h-full w-72 flex-shrink-0 overflow-y-auto bg-White-anchor-bg p-5 text-sm xl:block dark:bg-dark-anchor-bg`}
      >
        <section className="text-dark-600 flex max-h-full w-full flex-col gap-1 border-l border-solid border-black pl-1 dark:border-white">
          {headings.map(({ level: currentLevel, text, id }, index) => {
            const beforeLevel = headings[index - 1]?.level;
            const hasHigherPrevLevel =
              beforeLevel && beforeLevel !== currentLevel;

            return (
              <div
                key={index}
                className={`flex w-full has-[:hover]:bg-White-anchor-hover dark:has-[:hover]:bg-dark-anchor-hover
                ${viewHeading.id === id ? 'bg-White-anchor-active dark:bg-dark-anchor-active' : ''}`}
              >
                <Link
                  href={`#${id}`}
                  onClick={resetViewHeadings}
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

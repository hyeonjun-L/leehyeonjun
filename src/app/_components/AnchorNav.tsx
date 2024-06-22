'use client';

import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../Provider';
import { Headings } from '@/types/types';
import { usePathname } from 'next/navigation';
import { HIDE_PATH } from '@/constants/constants';
import Link from 'next/link';
import { DoubleArrowSVG } from '@/icons/index';

const AnchorNav = () => {
  const ANCHOR_HEADER_MARGIN = [
    '',
    'pl-4',
    'pl-8',
    'pl-12',
    'pl-16',
    'pl-20',
  ] as const;

  const { anchorView, changeAnchorView } = useContext(Context);
  const [headings, setHeadings] = useState<Headings[]>([]);
  const [viewHeadings, setViewHeadings] = useState<{
    view: Headings[];
    keep: boolean;
  }>({ view: [], keep: false });
  const pathname = usePathname();

  const generateIdFromText = (text: string) => {
    return text.replace(/\s+/g, '-').toLowerCase();
  };

  const createHeadings = (allHeadings: NodeListOf<Element>) => {
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

    return newHeadings;
  };

  const viewHeading = viewHeadings.view.reduce(
    (acc, heading) => (acc.level <= heading.level ? acc : heading),
    { level: 7, text: '', id: '' },
  );

  const addViewHeadings = (newHeading: Headings) => {
    setViewHeadings(({ view, keep }) => {
      const exists = view.some(({ id }) => id === newHeading.id);

      if (!exists) {
        if (keep) {
          return { view: [{ ...newHeading }], keep: false };
        }
        return { view: [...view, { ...newHeading }], keep: false };
      }
      return { view, keep };
    });
  };

  const removeViewHeadings = (
    removeHeading: Headings,
    scrollUp: boolean,
    newHeadings: Headings[],
  ) => {
    setViewHeadings(({ view }) => {
      if (view.length > 1) {
        return {
          view: view.filter((heading) => heading.id !== removeHeading.id),
          keep: false,
        };
      } else {
        if (scrollUp) {
          return { view, keep: true };
        } else {
          const prevIndx =
            newHeadings.findIndex(({ id }) => id === view[0].id) - 1;
          return { view: [{ ...newHeadings[prevIndx] }], keep: true };
        }
      }
    });
  };

  useEffect(() => {
    const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const newHeadings = createHeadings(allHeadings);

    setHeadings(newHeadings);
    setViewHeadings({ view: [], keep: false });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting, boundingClientRect, rootBounds } =
            entry;
          const heading = {
            level: Number(target.nodeName.slice(1)),
            id: target.id,
            text: (target as HTMLElement).innerText,
          };

          const isTopBoundaryExceeded =
            rootBounds && boundingClientRect.top < rootBounds.top;

          if (isIntersecting) {
            console.log('add event');
            // 헤더 나타날때
            addViewHeadings(heading);
          } else {
            console.log('remove event');
            // 헤더 사라 질때
            removeViewHeadings(heading, !!isTopBoundaryExceeded, newHeadings);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
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

  return (
    <>
      <aside
        className={`${anchorView ? (HIDE_PATH.includes(pathname) ? 'hidden' : 'block') : HIDE_PATH.includes(pathname) ? 'hidden' : 'hidden xl:block'} absolute z-anchorNav flex h-full w-72 flex-shrink-0 overflow-y-auto border-l border-solid border-black bg-White-anchor-bg p-5 text-sm sm:left-16 md:max-xl:left-20 xl:static dark:border-white dark:bg-dark-anchor-bg`}
      >
        <section className="text-dark-600 flex max-h-full w-full flex-col gap-1 pl-1">
          {headings.map(({ level: currentLevel, text, id }, index) => {
            const beforeLevel = headings[index - 1]?.level;
            const hasHigherPrevLevel =
              beforeLevel && beforeLevel !== currentLevel;

            return (
              <Fragment key={index}>
                <div
                  className={`flex w-full has-[:hover]:bg-White-anchor-hover dark:has-[:hover]:bg-dark-anchor-hover
                  ${viewHeading?.id === id ? 'bg-White-anchor-active dark:bg-dark-anchor-active' : ''}`}
                >
                  <Link
                    href={`#${id}`}
                    onClick={() =>
                      setViewHeadings({
                        view: [{ text, id, level: currentLevel }],
                        keep: false,
                      })
                    }
                    className={`${ANCHOR_HEADER_MARGIN[--currentLevel]} relative line-clamp-2 max-w-full break-words dark:hover:text-white`}
                    replace
                  >
                    {hasHigherPrevLevel && (
                      <span className="absolute -translate-x-5">┗</span>
                    )}
                    {text}
                  </Link>
                </div>
                {headings.length - 1 === index && <br />}
              </Fragment>
            );
          })}
        </section>
      </aside>
      {anchorView && !HIDE_PATH.includes(pathname) && (
        <button
          onClick={changeAnchorView}
          className="group absolute bottom-8 left-[300px] z-anchorNav rounded-full border border-solid border-White-activity bg-White-selectFileMenu-disabled p-2 sm:bottom-auto sm:left-[22rem] sm:rounded-none sm:border-none sm:bg-none sm:p-3 md:max-xl:left-[23rem] xl:hidden dark:border-dark-disabled dark:bg-dark-activity"
          aria-label="close anchorNav"
        >
          <DoubleArrowSVG className="size-8 fill-white group-hover:fill-cursor-dark sm:fill-black sm:dark:fill-white " />
        </button>
      )}
    </>
  );
};

export default AnchorNav;

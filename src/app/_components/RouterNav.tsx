'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CloseSVG } from '@/icons/index';

const RouterNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const pathnameList = pathname.split('/').filter((p) => p);

  const createHrefHandler = (index: number) => {
    const href = `/${pathnameList.slice(0, index + 1).join('/')}`;
    const closeHref = `/${pathnameList.slice(0, index).join('/')}` || '/';
    return { href, closeHref };
  };

  const closeFileHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <aside className="z-nav top-0 bg-White-selectFileMenu-bg sm:sticky dark:bg-dark-selectFileMenu-bg">
      <section>
        <nav className="flex">
          {pathnameList.map((name, index) => {
            if (!name) return null;

            const { href, closeHref } = createHrefHandler(index);

            return (
              <Link
                className={`flex gap-2 p-4 ${href === pathname ? 'bg-White-body dark:bg-dark-body' : 'bg-White-selectFileMenu-disabled dark:bg-dark-selectFileMenu-disabled'}`}
                key={href}
                href={href}
              >
                {name}
                <button onClick={(e) => closeFileHandler(e, closeHref)}>
                  <CloseSVG className="size-4 fill-black hover:fill-gray-600 dark:fill-dark-menu-text dark:hover:fill-white" />
                </button>
              </Link>
            );
          })}
        </nav>
      </section>
    </aside>
  );
};

export default RouterNav;

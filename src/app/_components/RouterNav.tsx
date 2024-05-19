'use client';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { CloseSVG, ListSVG } from '@/icons/index';

const RouterNav = ({ anchorView }: { anchorView: boolean }) => {
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

  const changeAnchorViewHandler = () => {
    Cookies.set('anchor_view', String(!anchorView));
    router.refresh();
  };

  return (
    <aside className="z-nav top-0 bg-White-selectFileMenu-bg sm:sticky dark:bg-dark-selectFileMenu-bg">
      <section className="flex">
        <button
          onClick={changeAnchorViewHandler}
          className="group hidden size-14 bg-White-anchor-bg p-4 sm:max-xl:block dark:bg-dark-anchor-bg"
        >
          <ListSVG
            className={`${anchorView ? 'fill-black group-hover:fill-dark-disabled dark:fill-white ' : 'fill-dark-disabled group-hover:fill-black group-hover:dark:fill-white'}`}
          />
        </button>
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

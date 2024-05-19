'use client';

import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { HIDE_PATH } from '@/constants/constants';
import { ListSVG } from '@/icons/index';
import { Context } from '../Provider';

const AnchorNavButton = () => {
  const pathname = usePathname();
  const { changeAnchorView } = useContext(Context);

  return (
    !HIDE_PATH.includes(pathname) && (
      <div className="fixed bottom-8 left-6 sm:hidden">
        <button
          onClick={changeAnchorView}
          className="group flex size-12 items-center justify-center rounded-full border border-solid border-dark-disabled bg-White-activity hover:fill-white"
          aria-label="anchorNav open"
        >
          <ListSVG className="size-7 fill-dark-disabled" />
        </button>
      </div>
    )
  );
};

export default AnchorNavButton;

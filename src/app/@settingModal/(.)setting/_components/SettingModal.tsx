'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { applyThemeClass, storeTheme, type Theme } from '@/app/_lib/theme';
import { BrushSVG, CloseSVG, MusicSvg } from '@/icons/index';
import Modal from './Modal';
import Music from './Music';
import Thema from './Theme';

const SettingModal = () => {
  const router = useRouter();
  const [selectMenu, setSelectMenu] = useState(0);

  const closeModalHandler = () => {
    router.back();
  };

  const changeThemeHandler = (theme: Theme) => {
    storeTheme(theme);
    applyThemeClass(theme);
  };

  const MENU_LIST = [
    {
      title: '테마',
      SVGComponent: <BrushSVG className="size-4 fill-black dark:fill-white" />,
      Component: <Thema changeThemeHandler={changeThemeHandler} />,
    },
    // {
    //   title: '글자',
    //   SVGComponent: <TextSVG className="size-4 fill-black dark:fill-white" />,
    //   Component: <Text />,
    // },
    {
      title: '음악',
      SVGComponent: <MusicSvg className="size-4" />,
      Component: <Music />,
    },
  ];

  return (
    <Modal>
      <nav className="flex w-full justify-between bg-White-selectFileMenu-bg dark:bg-dark-selectFileMenu-bg">
        <div className="flex">
          {MENU_LIST.map(({ title, SVGComponent }, index) => (
            <button
              key={title}
              onClick={() => setSelectMenu(index)}
              className={`flex items-center gap-1 px-3 py-2 ${selectMenu === index ? 'bg-White-body dark:bg-dark-body' : 'bg-White-selectFileMenu-disabled dark:bg-dark-selectFileMenu-disabled'} `}
            >
              {SVGComponent}
              {title}
            </button>
          ))}
        </div>
        <button className="px-3" onClick={closeModalHandler}>
          <CloseSVG className="size-6 fill-black dark:fill-white" />
        </button>
      </nav>
      {MENU_LIST[selectMenu].Component}
    </Modal>
  );
};

export default SettingModal;

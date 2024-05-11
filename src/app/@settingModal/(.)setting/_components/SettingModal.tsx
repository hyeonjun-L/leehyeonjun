'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BrushSVG, CloseSVG, TextSVG } from '@/icons/index';
import Modal from './Modal';
import Text from './Text';
import Thema from './Theme';

interface SettingModalProps {
  selectTheme: string;
}

const SettingModal = ({ selectTheme }: SettingModalProps) => {
  const router = useRouter();
  const [selectMenu, setSelectMenu] = useState(0);

  const closeModalHandler = () => {
    router.back();
  };

  const changeThemeHandler = (theme: string) => {
    Cookies.set('theme', theme);
    router.refresh();
  };

  const MENU_LIST = [
    {
      title: '테마',
      SVGComponent: <BrushSVG className="size-4 fill-black dark:fill-white" />,
      Component: (
        <Thema
          selectTheme={selectTheme}
          changeThemeHandler={changeThemeHandler}
        />
      ),
    },
    {
      title: '글자',
      SVGComponent: <TextSVG className="size-4 fill-black dark:fill-white" />,
      Component: <Text />,
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

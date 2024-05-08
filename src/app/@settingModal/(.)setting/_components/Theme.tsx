import { CheckSVG } from '@/icons/index';
import React from 'react';

interface ThemeProps {
  selectTheme: string;
  changeThemeHandler: (theme: string) => void;
}

const Theme = ({ selectTheme, changeThemeHandler }: ThemeProps) => {
  const THEME_LIST = [
    {
      theme: 'Dark',
      bg: 'bg-white',
      activity: 'bg-dark-activity',
      body: 'bg-dark-body',
    },
    {
      theme: 'White',
      bg: 'bg-dark-body',
      activity: 'bg-White-activity',
      body: 'bg-White-body',
    },
  ];

  return (
    <section className="h-80 p-5">
      <ul className="grid size-full grid-cols-3 grid-rows-2 gap-3">
        {THEME_LIST.map(({ theme, bg, activity, body }) => (
          <li
            key={theme}
            className="relative rounded-md border-2 border-solid border-dark-disabled px-4 pb-2 pt-1 hover:border-white"
          >
            {selectTheme === theme && (
              <CheckSVG className="absolute right-0 size-5 fill-white" />
            )}
            <button
              className="flex size-full flex-col"
              onClick={() => changeThemeHandler(theme)}
            >
              {theme}
              <div
                className={`flex size-full items-center justify-center rounded-md px-3 py-2 ${bg}`}
              >
                <div className="flex size-full">
                  <div className={`h-full w-1/4 ${activity}`} />
                  <div className={`size-full ${body}`} />
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Theme;

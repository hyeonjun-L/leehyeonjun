import React from 'react';
import { type Theme as ThemeName } from '@/app/_lib/theme';
import { CheckSVG } from '@/icons/index';

interface ThemeProps {
  changeThemeHandler: (theme: ThemeName) => void;
}

// 선택 표시를 상태로 들면 서버(테마 모름)와 클라이언트가 갈려 하이드레이션이 깨진다.
// <html>의 dark 클래스는 첫 페인트 전에 확정되므로, 체크마크를 둘 다 렌더하고 표시만
// CSS에 맡긴다.
const Theme = ({ changeThemeHandler }: ThemeProps) => {
  const THEME_LIST: {
    theme: ThemeName;
    bg: string;
    activity: string;
    body: string;
    check: string;
  }[] = [
    {
      theme: 'Dark',
      bg: 'bg-white',
      activity: 'bg-dark-activity',
      body: 'bg-dark-body',
      check: 'hidden dark:block',
    },
    {
      theme: 'White',
      bg: 'bg-dark-body',
      activity: 'bg-White-activity',
      body: 'bg-White-body',
      check: 'block dark:hidden',
    },
  ];

  return (
    <section className="h-full p-5 sm:h-80">
      <ul className="grid size-full grid-cols-2 gap-3 sm:grid-cols-3 sm:grid-rows-2">
        {THEME_LIST.map(({ theme, bg, activity, body, check }) => (
          <li
            key={theme}
            className="relative aspect-square rounded-md border-2 border-solid px-4 pb-2 pt-1 hover:border-black sm:aspect-auto dark:border-dark-disabled dark:hover:border-white"
          >
            <CheckSVG
              className={`absolute right-0 size-5 fill-black dark:fill-white ${check}`}
            />
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

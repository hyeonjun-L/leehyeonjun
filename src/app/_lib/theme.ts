// 테마는 localStorage에만 둔다. 서버에서 쿠키를 읽으면 루트 레이아웃이 동적 렌더가
// 되어 앱 전체가 정적 생성에서 빠진다.
//
// src/constants가 아니라 src/app 아래인 이유: tailwind content 글롭이 './src/app/**'
// 뿐이라, 아래 클래스 문자열이 글롭 밖으로 나가면 text-dark-text가 CSS에서 사라진다.
export type Theme = 'Dark' | 'White';

export const THEME_STORAGE_KEY = 'theme';

export const DEFAULT_THEME: Theme = 'Dark';

// theme-light는 라이트 '테마'가 아니라 밝은 색 크롬(carousel.css)이라 Dark와 짝이다.
export const THEME_CLASS: Record<Theme, string> = {
  Dark: 'theme-light dark text-dark-text',
  White: 'theme-dark',
};

// className 통째 할당은 <html>에 붙은 다른 클래스(dev 오버레이, 확장)를 날린다.
export const applyThemeClass = (theme: Theme) => {
  const isDark = theme === 'Dark';
  const root = document.documentElement;

  root.classList.toggle('theme-light', isDark);
  root.classList.toggle('dark', isDark);
  root.classList.toggle('text-dark-text', isDark);
  root.classList.toggle('theme-dark', !isDark);
};

export const storeTheme = (theme: Theme) => {
  try {
    // 시크릿 모드 등에서는 localStorage 접근 자체가 throw한다.
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
};

// 번들 로드 전에 실행돼야 하므로 applyThemeClass를 문자열로 중복 작성했다.
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var isDark = localStorage.getItem('${THEME_STORAGE_KEY}') !== 'White';
    var root = document.documentElement;
    root.classList.toggle('theme-light', isDark);
    root.classList.toggle('dark', isDark);
    root.classList.toggle('text-dark-text', isDark);
    root.classList.toggle('theme-dark', !isDark);
  } catch (e) {}
})();
`;

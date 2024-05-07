export const categories = ['dog', 'cat', 'rock'] as const;

export const HIDE_PATH = ['/', '/blog'];

export const MENU = ['File', 'Edit', 'View', 'Terminal', 'Help'] as const;

export const BASE_TEXT = '음...' as const;

export const TEXTS = [
  '이 코드를 더 간결하게 만들 수는 없을까?',
  '이 기능을 사용자에게 더 직관적으로 제공할 방법은?',
  '성능을 개선하기 위해서 어떻게 해야 할까?',
  '이 코드가 유지보수하기 어렵지 않을까?',
  '접근성을 고려하여 더 많은 사용자에게 친절한가?',
  '이것을 구현하는 데 있어 더 나은 라이브러리나 프레임워크가 있을까?',
  '동료 개발자가 이 코드를 이해하기 쉬울까?',
  '이 컴포넌트를 재사용 가능하게 만들 수 있는 방법은 무엇일까?',
  '지금 이게 맞는 건가? 더 좋은 방법은 없을까?',
  'UI/UX 개선을 위해 사용자 피드백을 어떻게 더 잘 수집할 수 있을까?',
  '이 기능이 사이트의 전체적인 사용자 경험을 어떻게 변화시키나?',
  '모바일 사용자를 위해 이 기능을 어떻게 최적화할 수 있을까?',
  '보안 측면에서 이 코드에 취약점은 없나?',
  '이 변경사항이 다른 기능에 부정적인 영향을 미치진 않을까?',
  '테스트 커버리지를 어떻게 더 향상시킬 수 있을까?',
  '사용자의 데이터 사용량을 줄이기 위해 이 이미지나 자원을 최적화할 수 있을까?',
  '사용자가 이 페이지를 더 빨리 로드할 수 있는 방법은 무엇일까?',
  '커뮤니케이션을 어떻게 더 원활하게 할 수 있을까?',
] as const;

export const HOME_TEXT_COLOR = [
  'text-dark-home-from',
  'text-dark-home-variable',
  'text-dark-home-from',
  'text-dark-home-route',
  '',
] as const;

export const HOME_MENU_LIST = [
  {
    title: '프로필',
    href: '/profile',
    textList: ['import ', '프로필 ', 'from ', "'이현준'", ';'],
  },
  {
    title: '포트폴리오',
    href: '/portfolio',
    textList: ['import ', '포트폴리오 ', 'from ', "'이현준'", ';'],
  },
  {
    title: '블로그',
    href: '/blog',
    textList: ['import ', '블로그 ', 'from ', "'이현준'", ';'],
  },
];

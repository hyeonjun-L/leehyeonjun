export const SITE_URL = 'https://www.leehyeonjun.com';

export const SITE_NAME = '이현준';

export const SITE_DESCRIPTION =
  '웹 개발자 이현준의 블로그. GIS·지도·웹 개발 기록을 남깁니다.';

export const SITE_AUTHOR = '이현준';

export const absoluteUrl = (path = '') =>
  `${SITE_URL}${path.startsWith('/') || path === '' ? path : `/${path}`}`;

export const ogImageUrl = (params: {
  title: string;
  category?: string;
  date?: string;
}) => {
  const search = new URLSearchParams({ title: params.title });

  if (params.category) search.set('category', params.category);
  if (params.date) search.set('date', params.date);

  return `${SITE_URL}/og?${search.toString()}`;
};

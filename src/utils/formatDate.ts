// toLocaleDateString()은 서버(UTC/en-US)와 한국 브라우저(KST/ko-KR)에서 결과가 달라
// 하이드레이션을 깨뜨린다. 18:00Z에 발행한 글은 날짜가 하루 밀리기까지 한다.
export const formatPostDate = (iso: string) =>
  iso.slice(0, 10).replace(/-/g, '.');

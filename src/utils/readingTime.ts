const KOREAN_CHARS_PER_MINUTE = 350;
const ENGLISH_WORDS_PER_MINUTE = 200;

/**
 * raw MDX 소스에서 대략적인 읽는 시간(분)을 계산한다.
 * metadata export 블록, 코드펜스, JSX/마크다운 기호를 제거한 뒤
 * 한글은 글자 수(350cpm), 영어는 단어 수(200wpm) 기준으로 합산한다.
 */
export function getReadingTime(raw: string): number {
  const content = raw
    .replace(/^\s*export\s+const\s+metadata\s*=\s*{[\s\S]*?};/, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/<\/?[^>]+>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*>\s?/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '');

  const koreanChars = (content.match(/[가-힣]/g) ?? []).length;
  const englishWords = (
    content.replace(/[가-힣]/g, ' ').match(/\b[\w'-]+\b/g) ?? []
  ).length;

  const minutes = Math.ceil(
    koreanChars / KOREAN_CHARS_PER_MINUTE +
      englishWords / ENGLISH_WORDS_PER_MINUTE,
  );

  return Math.max(1, minutes);
}

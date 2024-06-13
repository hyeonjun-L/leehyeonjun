import Link from 'next/link';
import { Fragment } from 'react';

const Experience = () => {
  const EXPERIENCE_LIST = [
    {
      title: 'Prompt-er Day Seoul 2023 해커톤',
      explanation: '삶의 질을 높이는 Generative AI 서비스 ',
      period: '(2023.08 ~ 2023.09)',
      historyInformation: ['200팀이 넘는 참가 팀 중 상위 40팀 예선 통과'],
    },
    {
      title: '프로그래머스 데브코스 4기',
      explanation: '프론트엔드 개발자 양성 교육 과정 ',
      period: '(2023.6 ~ 2023.8)',
      historyInformation: [
        'JavaScript, TypeScript, 알고리즘, SCSS 학습',
        'Webpack, Vite, Parcel 번들러 경험',
        '스터디, 멘토링, 코드리뷰, 팀 프로젝트를 통한 소프트스킬 증진',
      ],
    },
    {
      title: '모던애자일 5기',
      explanation: 'SW 개발 동아리 ',
      period: '(2023.3 ~ 2023.7)',
      historyInformation: [
        'JavaScript, TypeScript, React 학습',
        <>
          <Link
            href="/https://www.youtube.com/watch?v=w0XsvOrLkcg"
            className="underline underline-offset-4"
          >
            Tech-Talk
          </Link>{' '}
          발표를 통한 프레젠테이션 능력 향상 및 CS 지식 습득
        </>,
        '멘토링, 협업, 팀프로젝트를 통한 소프트스킬 증진',
      ],
    },
  ] as const;

  return (
    <section className="mt-14 flex flex-col gap-10 border-b border-solid border-dark-disabled pb-10">
      <h2 className="text-4xl font-semibold">경험</h2>
      <div className="grid gap-y-10 sm:grid-cols-[1.5fr_2fr]">
        {EXPERIENCE_LIST.map(
          ({ title, explanation, historyInformation, period }) => (
            <Fragment key={title}>
              <div className="[&>p]:text-sm">
                <h3 className="text-2xl">{title}</h3>
                <p>{explanation}</p>
                <p>{period}</p>
              </div>
              <ul className="flex list-disc flex-col gap-1 pl-5 text-lg sm:pl-0">
                {historyInformation.map((info, index) => (
                  <li key={`${title}${index}`}>{info}</li>
                ))}
              </ul>
            </Fragment>
          ),
        )}
      </div>
    </section>
  );
};

export default Experience;

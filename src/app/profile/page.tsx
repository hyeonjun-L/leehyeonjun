import { Metadata } from 'next';
import AboutMe from './_components/AboutMe';
import Career from './_components/Career';
import Certifications from './_components/Certifications';
import Education from './_components/Education';
import Experience from './_components/Experience';
import Project from './_components/Project';

export const metadata: Metadata = {
  title: '이현준 | 프로필',
  description: '이현준 자세히 보기 페이지',
  // 검색 노출 제외. follow는 열어둬야 크롤러가 하위 페이지까지 돌며
  // 각자의 noindex를 확인한다(robots.txt로 막으면 이 태그를 못 읽는다).
  robots: { index: false, follow: true },
};

const page = () => {
  return (
    <div className="m-auto max-w-6xl p-4 sm:p-4 xl:p-8 2xl:p-0">
      <AboutMe />
      <Career />
      <Project />
      {/* <Skill /> */}
      <Experience />
      <Education />
      <Certifications />
    </div>
  );
};

export default page;

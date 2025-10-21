import { Metadata } from 'next';
import AboutMe from './_components/AboutMe';
import Career from './_components/Career';
import Certifications from './_components/Certifications';
import Education from './_components/Education';
import Experience from './_components/Experience';
import Project from './_components/Project';
import Skill from './_components/Skill';

export const metadata: Metadata = {
  title: '이현준 | 프로필',
  description: '이현준 자세히 보기 페이지',
};

const page = () => {
  // const cookieStore = cookies();
  // const theme = cookieStore.get('theme')?.value ?? 'Dark';

  return (
    <div className="m-auto max-w-6xl p-4 sm:p-4 xl:p-8 2xl:p-0">
      <AboutMe />
      <Career />
      <Project />
      <Skill />
      <Experience />
      <Education />
      <Certifications />
    </div>
  );
};

export default page;

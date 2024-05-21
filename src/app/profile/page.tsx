import { cookies } from 'next/headers';
import AboutMe from './_components/AboutMe';
import Career from './_components/Career';
import Certifications from './_components/Certifications';
import Education from './_components/Education';
import Experience from './_components/Experience';
import Project from './_components/Project';
import Skill from './_components/Skill';

const page = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value ?? 'Dark';

  return (
    <section className="m-auto max-w-6xl p-4 sm:p-4 xl:p-8 2xl:p-0">
      <AboutMe theme={theme} />
      <Skill />
      <Career />
      <Project />
      <Experience />
      <Education />
      <Certifications />
    </section>
  );
};

export default page;

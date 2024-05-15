import { cookies } from 'next/headers';
import AboutMe from './_components/AboutMe';
import Career from './_components/Career';
import Certifications from './_components/Certifications';
import Education from './_components/Education';
import Experience from './_components/Experience';
import Project from './_components/Project';

const page = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value ?? 'Dark';

  return (
    <>
      <AboutMe theme={theme} />
      <Career />
      <Project />
      <Experience />
      <Education />
      <Certifications />
    </>
  );
};

export default page;

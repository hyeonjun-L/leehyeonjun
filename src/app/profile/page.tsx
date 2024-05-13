import { cookies } from 'next/headers';
import AboutMe from './_components/AboutMe';
import ExperienceForm from './_components/CareerHistory';
import Project from './_components/Project';

const page = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value ?? 'Dark';

  return (
    <>
      <AboutMe theme={theme} />
      <Project />
      <ExperienceForm />
    </>
  );
};

export default page;

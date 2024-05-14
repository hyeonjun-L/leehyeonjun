import Image from 'next/image';
import Link from 'next/link';
import {
  DockerSVG,
  EslintSVG,
  FirebaseSVG,
  FramerMotionSVG,
  GitHubActionsSVG,
  JestSVG,
  NaverMapSVG,
  NextSVG,
  PwaSVG,
  ReactHookFormSVG,
  ReactQuerySVG,
  ReactTableSVG,
  SentrySVG,
  SocketIoSVG,
  StorybookSVG,
  TaillwindSVG,
  TypeScriptSVG,
  VercelSVG,
  ZustandSVG,
} from '@/icons/index';
import connectionImage from '@/images/connection/connection_main.png';

const Project = () => {
  const PROJECT = [
    {
      title: 'Connection',
      explanation: '댄서와 수강생 매칭 서비스',
      period: '2023.09 ~',
      image: connectionImage,
      imageAlt: '커넥션',
      webSite: 'https://connection-frontend.vercel.app',
      github: 'https://github.com/connection-2023/frontend',
      developmentProcess: '/',
      role: <div>역할은 어쩌구~</div>,
      skills: [
        {
          svg: <NextSVG className="size-5" />,
          name: 'Next',
          bg: 'bg-[#000000]',
        },
        {
          svg: <TypeScriptSVG className="size-5" />,
          name: 'TypeScript',
          bg: 'bg-[#3178C6]',
        },
        {
          svg: <TaillwindSVG className="size-5" />,
          name: 'Taillwind CSS',
          bg: 'bg-[#06B6D4]',
        },
        {
          svg: <ZustandSVG className="size-5" />,
          name: 'Zustand',
          bg: 'bg-[#614a28]',
        },
        {
          svg: <ReactQuerySVG className="size-5" />,
          name: 'React Query',
          bg: 'bg-[#FF4154]',
        },
        {
          svg: <ReactTableSVG className="size-5" />,
          name: 'React Table',
          bg: 'bg-[#FF4154]',
        },
        {
          svg: <ReactHookFormSVG className="size-5" />,
          name: 'React Hook Form',
          bg: 'bg-[#EC5990]',
        },
        {
          svg: <FramerMotionSVG className="size-5" />,
          name: 'Framer Motion',
          bg: 'bg-[#0055FF]',
        },
        {
          svg: <NaverMapSVG className="size-5" />,
          name: 'Naver Map',
          bg: 'bg-[#03C75A]',
        },
        {
          svg: <FirebaseSVG className="size-5" />,
          name: 'Firebase',
          bg: 'bg-[#FFCA28]',
        },
        {
          svg: <PwaSVG className="size-5" />,
          name: 'PWA',
          bg: 'bg-[#5A0FC8]',
        },
        {
          svg: <SocketIoSVG className="size-5" />,
          name: 'Socket.io',
          bg: 'bg-[#010101]',
        },
        {
          svg: <JestSVG className="size-5" />,
          name: 'Jest',
          bg: 'bg-[#C21325]',
        },
        {
          svg: <VercelSVG className="size-5" />,
          name: 'Vercel',
          bg: 'bg-[#000000]',
        },
        {
          svg: <DockerSVG className="size-5" />,
          name: 'Docker',
          bg: 'bg-[#2496ED]',
        },
        {
          svg: <GitHubActionsSVG className="size-5" />,
          name: 'GitHub Actions',
          bg: 'bg-[#2088FF]',
        },
        {
          svg: <SentrySVG className="size-5" />,
          name: 'Sentry',
          bg: 'bg-[#362D59]',
        },
        {
          svg: <StorybookSVG className="size-5" />,
          name: 'StoryBook',
          bg: 'bg-[#ff4785]',
        },
        {
          svg: <EslintSVG className="size-5" />,
          name: 'Eslint',
          bg: 'bg-[#3949ab]',
        },
      ],
      experience: <div>경험은 어쩌구~</div>,
    },
  ] as const;

  return (
    <section className="mt-14 flex flex-col gap-10 border-b border-solid border-dark-disabled">
      <h2 className="text-4xl font-semibold">프로젝트</h2>
      {PROJECT.map(
        ({
          title,
          explanation,
          period,
          image,
          imageAlt,
          webSite,
          github,
          developmentProcess,
          role,
          skills,
          experience,
        }) => (
          <div key={title} className="grid grid-cols-[1.4fr_2fr] gap-y-2">
            <div className="sticky top-0 mx-auto flex max-h-[25rem] flex-col">
              <h3 className="mb-4 text-3xl">{title}</h3>
              <p>{explanation}</p>
              <p>{period}</p>
              <div className="mt-3 flex items-center gap-4 [&>a]:underline [&>a]:underline-offset-4">
                <Link className="hover:text-dark-text" href={webSite}>
                  WebSite
                </Link>
                <Link className="hover:text-dark-text" href={github}>
                  GitHub
                </Link>
                <Link
                  className="hover:text-dark-text"
                  href={developmentProcess}
                >
                  Detail
                </Link>
              </div>
              <Image src={image} alt={imageAlt} className="w-full max-w-96" />
            </div>
            <div className="flex flex-col gap-3 border-l border-solid border-White-line px-8 dark:border-dark-line [&>h4]:mt-4 [&>h4]:text-xl">
              <h4>1.설명</h4>
              <h4>2.역할</h4>
              {role}
              <h4>3.사용 기술</h4>
              <ul className="flex flex-wrap gap-2 text-white">
                {skills.map(({ svg, name, bg }) => (
                  <li
                    className={`flex items-center gap-2 p-1 ${bg}`}
                    key={name}
                  >
                    {svg}
                    {name}
                  </li>
                ))}
              </ul>
              <h4>4.프로젝트를 진행하며 경험하고 체득한 부분</h4>
              {experience}
            </div>
          </div>
        ),
      )}
    </section>
  );
};

export default Project;

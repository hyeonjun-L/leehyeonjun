import {
  AxiosSVG,
  EslintSVG,
  FramerMotionSVG,
  GitHubActionsSVG,
  JavaScriptSVG,
  NextSVG,
  ReactHookFormSVG,
  ReactQuerySVG,
  ReactSVG,
  RecoilSVG,
  SocketIoSVG,
  StorybookSVG,
  StyledComponentsSVG,
  TaillwindSVG,
  TypeScriptSVG,
  VercelSVG,
  ViteSVG,
  WebpackSVG,
  ZustandSVG,
} from '@/icons/index';

const Skill = () => {
  const SKILL_LIST = [
    {
      header: '프로그래밍 언어',
      skill: [
        {
          svg: <JavaScriptSVG className="size-6 [&>path]:fill-[#F7DF1E]" />,
          title: 'JavaScript',
          detail: 'sssss',
        },
        {
          svg: <TypeScriptSVG className="size-6 [&>path]:fill-[#3178C6]" />,
          title: 'TypeScript',
          detail: 'ddd',
        },
      ],
    },
    {
      header: 'CSS/스타일링',
      skill: [
        {
          svg: <TaillwindSVG className="size-6 [&>path]:fill-[#06B6D4]" />,
          title: 'Taillwind CSS',
          detail: 'sssss',
        },
        {
          svg: (
            <StyledComponentsSVG className="size-6 [&>path]:fill-[#DB7093]" />
          ),
          title: 'Styled-components',
          detail: 'sssss',
        },
      ],
    },
    {
      header: '프레임워크 및 라이브러리',
      skill: [
        {
          svg: (
            <NextSVG className="size-6 [&>path]:fill-[#000000] [&>path]:dark:fill-[#fff]" />
          ),
          title: 'Next',
          detail: 'sssss',
        },
        {
          svg: <ReactSVG className="size-6 [&>path]:fill-[#61DAFB] " />,
          title: 'React',
          detail: 'sssss',
        },
        {
          svg: <ReactQuerySVG className="size-6 [&>path]:fill-[#FF4154] " />,
          title: 'React Query',
          detail: 'sssss',
        },
        {
          svg: <ReactHookFormSVG className="size-6 [&>path]:fill-[#EC5990] " />,
          title: 'React Hook Form',
          detail: 'sssss',
        },
        {
          svg: <FramerMotionSVG className="size-6 [&>path]:fill-[#0055FF] " />,
          title: 'Framer Motion',
          detail: 'sssss',
        },
        {
          svg: <ZustandSVG className="size-6 [&>g]:fill-[#614a28] " />,
          title: 'Zustand',
          detail: 'sssss',
        },
        {
          svg: <RecoilSVG className="size-6 [&>path]:fill-[#3578E5] " />,
          title: 'Recoil',
          detail: 'sssss',
        },
        {
          svg: <AxiosSVG className="size-6 [&>path]:fill-[#5A29E4] " />,
          title: 'Axios',
          detail: 'sssss',
        },
        {
          svg: (
            <SocketIoSVG className="size-6 [&>path]:fill-[#010101] [&>path]:dark:fill-[#fff]" />
          ),
          title: 'Socket.io',
          detail: 'sssss',
        },
      ],
    },
    {
      header: '기타 도구',
      skill: [
        {
          svg: <EslintSVG className="size-6 [&>path]:fill-[#3949ab] " />,
          title: 'Eslint',
          detail: 'sssss',
        },
        {
          svg: <StorybookSVG className="size-6 [&>path]:fill-[#ff4785] " />,
          title: 'StoryBook',
          detail: 'sssss',
        },
        {
          svg: <ViteSVG className="size-6 [&>path]:fill-[#646CFF] " />,
          title: 'Vite',
          detail: 'sssss',
        },
        {
          svg: <WebpackSVG className="size-6 [&>path]:fill-[#8DD6F9] " />,
          title: 'Webpack',
          detail: 'sssss',
        },
      ],
    },
    {
      header: 'CI/CD 및 배포',
      skill: [
        {
          svg: (
            <VercelSVG className="size-6 [&>path]:fill-[#000000] [&>path]:dark:fill-[#fff]" />
          ),
          title: 'Vercel',
          detail: 'sssss',
        },
        {
          svg: <GitHubActionsSVG className="size-6 [&>path]:fill-[#2088FF] " />,
          title: 'GitHub Actions',
          detail: 'sssss',
        },
      ],
    },
  ];
  return (
    <section className="mt-14 flex flex-col gap-10 border-b border-solid border-dark-disabled pb-10">
      <h2 className="text-4xl font-semibold">스킬</h2>
      <div className="grid grid-cols-2 gap-10">
        {SKILL_LIST.map(({ header, skill }) => (
          <div
            key={header}
            className="border border-solid border-dark-disabled "
          >
            <div className="dark:bg-dark-menu-bg">
              <h3 className="inline-block p-3 text-xl dark:bg-dark-body">
                {header}
              </h3>
            </div>
            {skill.map(({ svg, title, detail }) => (
              <dl className="flex gap-2 p-3" key={title}>
                {svg}
                <dt className="mr-3 text-black dark:text-white">{title}</dt>
                <dd>{detail}</dd>
              </dl>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;

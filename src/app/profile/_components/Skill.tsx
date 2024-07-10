import {
  // AxiosSVG,
  EslintSVG,
  FramerMotionSVG,
  GitHubActionsSVG,
  JavaScriptSVG,
  JestSVG,
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
          detail:
            'ES6 문법을 활용한 배열 메소드와 비동기 처리를 상황에 적절히 적용할 수 있습니다. 순수 JavaScript를 이용하여 컴포넌트 기반의 개발을 진행한 경험이 있습니다.',
        },
        {
          svg: <TypeScriptSVG className="size-6 [&>path]:fill-[#3178C6]" />,
          title: 'TypeScript',
          detail:
            '정적 타입 체크와 제네릭을 활용하여 다양한 타입에 대응하는 유연한 코드를 작성할 수 있습니다.',
        },
      ],
    },
    {
      header: 'CSS/스타일링',
      skill: [
        {
          svg: <TaillwindSVG className="size-6 [&>path]:fill-[#06B6D4]" />,
          title: 'Taillwind CSS',
          detail:
            '유틸리티 우선 접근 방식을 통해 신속하고 반응성이 뛰어난 웹 디자인을 구현한 경험이 있습니다.',
        },
        {
          svg: (
            <StyledComponentsSVG className="size-6 [&>path]:fill-[#DB7093]" />
          ),
          title: 'Styled-components',
          detail:
            '재사용 가능하고 관리하기 쉬운 컴포넌트 단위 스타일링 경험이 있습니다.',
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
          detail:
            'SSR과 SSG에 대한 이해를 바탕으로, Next.js의 API 라우팅과 이미지 최적화 등 다양한 기능을 활용할 수 있습니다. App router를 사용한 프로젝트 경험이 있으며, 현재 이 사이트도 Next.js를 사용하여 구현했습니다. App router를 사용한 프로젝트 경험이 있으며, 현재 이 사이트도 Next.js를 사용하여 구현했습니다.',
        },
        {
          svg: <ReactSVG className="size-6 [&>path]:fill-[#61DAFB] " />,
          title: 'React',
          detail:
            'React Hooks과 컴포넌트 기반 아키텍처를 이용하여 재사용 가능한 컴포넌트 및 커스텀 훅을 설계할 수 있습니다.',
        },
        {
          svg: <ReactQuerySVG className="size-6 [&>path]:fill-[#FF4154] " />,
          title: 'React Query',
          detail:
            '데이터의 캐싱, 동기화, 업데이트를 효율적으로 처리할 수 있는 능력을 갖추고 있습니다.',
        },
        {
          svg: <ReactHookFormSVG className="size-6 [&>path]:fill-[#EC5990] " />,
          title: 'React Hook Form',
          detail:
            '복잡한 폼 입력과 유효성 검사를 쉽고 효율적으로 구현한 경험이 있습니다.',
        },
        {
          svg: <FramerMotionSVG className="size-6 [&>path]:fill-[#0055FF] " />,
          title: 'Framer Motion',
          detail:
            '애니메이션과 인터랙션을 웹 애플리케이션에 적용해본 경험이 있습니다.',
        },
        {
          svg: <ZustandSVG className="size-6 [&>g]:fill-[#614a28] " />,
          title: 'Zustand',
          detail:
            '빠른 프로토타이핑과 전역 상태 관리에 Zustand를 활용해 본 경험이 있으며, 애플리케이션 전반에서 상태를 공유하고 관리할 수 있는 능력을 갖추고 있습니다.',
        },
        {
          svg: <RecoilSVG className="size-6 [&>path]:fill-[#3578E5] " />,
          title: 'Recoil',
          detail:
            'React 애플리케이션에서 여러 컴포넌트 간에 공유되고 상태 간에 서로 의존적인 관계를 가지는 복잡한 상태 관리를 Recoil을 이용하여 효율적으로 처리 한 경험이 있습니다.',
        },
        // {
        //   svg: <AxiosSVG className="size-6 [&>path]:fill-[#5A29E4] " />,
        //   title: 'Axios',
        //   detail:
        //     '비동기 HTTP 요청을 효율적으로 관리하고, 요청과 응답 데이터의 변환, 요청 취소 등 복잡한 작업을 할 수 있습니다.',
        // },
        {
          svg: (
            <SocketIoSVG className="size-6 [&>path]:fill-[#010101] [&>path]:dark:fill-[#fff]" />
          ),
          title: 'Socket.io',
          detail:
            'Socket.io를 통해 실시간, 양방향, 이벤트 기반 통신을 구현하여 실시간 채팅 및 알림기능을 개발한 경험이 있습니다.',
        },
        {
          svg: <JestSVG className="size-6 [&>path]:fill-[#C21325]" />,
          title: 'Jest',
          detail:
            '단위 및 통합 테스트를 위해 Jest를 사용한 경험이 있으며, React 컴포넌트 및 JavaScript 함수의 테스트를 통해 코드의 안정성을 보장 했습니다.',
        },
      ],
    },
    {
      header: '기타 도구',
      skill: [
        {
          svg: <EslintSVG className="size-6 [&>path]:fill-[#3949ab] " />,
          title: 'Eslint',
          detail:
            '코드의 일관성을 유지하고, 오류를 사전에 찾아내기 위해 Eslint를 사용한 경험이 있습니다. 프로젝트의 코드 스타일 가이드를 설정하고, 팀 내 코드 품질을 향상시키는 데 기여했습니다.',
        },
        {
          svg: <StorybookSVG className="size-6 [&>path]:fill-[#ff4785] " />,
          title: 'StoryBook',
          detail:
            '컴포넌트 라이브러리를 문서화하고, 독립적인 환경에서 UI 컴포넌트를 개발 및 테스트하기 위해 StoryBook을 사용한 경험이 있습니다. 이는 컴포넌트의 재사용성을 높이고, 디자인 시스템을 구축하는 데 큰 도움이 되었습니다.',
        },
        {
          svg: <ViteSVG className="size-6 [&>path]:fill-[#646CFF] " />,
          title: 'Vite',
          detail:
            '보다 빠른 개발 환경을 위해 Vite를 사용한 경험이 있으며, HMR(핫 모듈 교체) 기능을 통해 변경사항이 즉시 반영되는 신속한 개발 경험을 제공했습니다.',
        },
        // {
        //   svg: <WebpackSVG className="size-6 [&>path]:fill-[#8DD6F9] " />,
        //   title: 'Webpack',
        //   detail:
        //     '모듈 번들링과 자산 관리를 위해 Webpack을 사용한 경험이 있습니다. 다양한 로더와 플러그인을 활용하여 프로젝트의 빌드 프로세스를 최적화하고, 코드 분할과 지연 로딩을 구현하여 애플리케이션의 로딩 시간을 단축했습니다.',
        // },
        {
          svg: (
            <VercelSVG className="size-6 [&>path]:fill-[#000000] [&>path]:dark:fill-[#fff]" />
          ),
          title: 'Vercel',
          detail:
            'Vercel을 사용하여 프로젝트를 배포한 경험이 있으며, 특히 Next.js 프로젝트에 대한 뛰어난 지원 덕분에 쉽고 빠르게 프로덕션 환경에 애플리케이션을 배포할 수 있었습니다. Vercel의 CI/CD 기능을 통해 개발 워크플로우를 자동화했습니다.',
        },
        {
          svg: <GitHubActionsSVG className="size-6 [&>path]:fill-[#2088FF] " />,
          title: 'GitHub Actions',
          detail:
            'GitHub Actions를 사용하여 소프트웨어 개발 워크플로우를 자동화한 경험이 있습니다. 코드 통합, 테스트 실행, 배포 과정을 자동화하여 개발 효율성을 향상시켰습니다.',
        },
      ],
    },
  ];
  return (
    <section className="mt-14 flex flex-col gap-10 border-b border-solid border-dark-disabled pb-10">
      <h2 className="text-4xl font-semibold">스킬</h2>
      <div className="grid gap-10 sm:grid-cols-2">
        {SKILL_LIST.map(({ header, skill }) => (
          <div
            key={header}
            className="border border-solid border-dark-disabled "
          >
            <div className="bg-White-selectFileMenu-bg dark:bg-dark-selectFileMenu-bg">
              <h3 className="inline-block bg-White-body p-3 text-xl dark:bg-dark-body">
                {header}
              </h3>
            </div>
            {skill.map(({ svg, title, detail }) => (
              <dl className="p-3" key={title}>
                <dt className="flex gap-2">
                  {svg}
                  <p className="mr-3 text-black dark:text-white">{title}</p>
                </dt>
                <dd className="mt-4">{detail}</dd>
              </dl>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;

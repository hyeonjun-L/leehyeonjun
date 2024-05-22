import { logo } from '@/images/connection';
import Explanation from '../_components/Explanation';
import Skill from '../_components/Skill';
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

const page = () => {
  const explanation = {
    title: 'Connection',
    personnel: 'FE: 2명, BE: 2명, Designer: 1명',
    period: '( 2023.09 ~ 진행중 )',
    webSite: 'https://connection-frontend.vercel.app',
    github: 'https://github.com/connection-2023/frontend',
    logo,
  };

  const skills = [
    {
      svg: <NextSVG className="size-5" />,
      name: 'Next',
      bg: 'bg-[#000000]',
      explanation:
        '(App Router) SEO 최적화를 위한 동적 메타 데이터 생성, 서버 사이드 렌더링을 포함한 서버 컴포넌트, 링크 사전 가져오기(Link prefetch), 이미지 로딩 우선 순위 설정(Image priority), 경로 처리(Route Handler), 경로 가로채기(Intercepting Routes), 병렬 경로 처리(Parallel Routes) 등의 고급 기능을 활용하기 위해 사용하였습니다.',
    },
    {
      svg: <TypeScriptSVG className="size-5" />,
      name: 'TypeScript',
      bg: 'bg-[#3178C6]',
      explanation:
        '컴파일 단계에서 타입 오류를 사전에 발견하여 프로젝트의 안정성을 높이기 위해 사용하였습니다.',
    },
    {
      svg: <TaillwindSVG className="size-5" />,
      name: 'Tailwind CSS',
      bg: 'bg-[#06B6D4]',
      explanation:
        '서버 컴포넌트에서 CSS를 사용하기 위해 zero-runtime 특성이 있는 Tailwind CSS를 선택했습니다.',
    },
    {
      svg: <ZustandSVG className="size-5" />,
      name: 'Zustand',
      bg: 'bg-[#614a28]',
      explanation:
        '사용이 간단하고 가볍고 간결한 코드로 전역 상태 관리가 가능하여 선택하였습니다.',
    },
    {
      svg: <ReactQuerySVG className="size-5" />,
      name: 'React Query',
      bg: 'bg-[#FF4154]',
      explanation:
        '서버 상태 관리를 간소화하고 불필요한 네트워크 요청을 줄이며, 데이터 페칭, 캐싱, 동기화 및 서버 상태 업데이트를 편리하게 처리할 수 있도록 도입하였습니다.',
    },
    {
      svg: <ReactTableSVG className="size-5" />,
      name: 'React Table',
      bg: 'bg-[#FF4154]',
      explanation:
        '성능 최적화와 유연한 커스터마이징이 가능해 데이터 테이블을 쉽게 구성하고 관리하기 위해 사용하였습니다.',
    },
    {
      svg: <ReactHookFormSVG className="size-5" />,
      name: 'React Hook Form',
      bg: 'bg-[#EC5990]',
      explanation:
        '회원가입, 강사 등록, 클래스 작성 시 등 복잡한 폼 데이터의 효율적 관리와 유효성 검사를 위해 사용하였습니다.',
    },
    {
      svg: <FramerMotionSVG className="size-5" />,
      name: 'Framer Motion',
      bg: 'bg-[#0055FF]',
      explanation:
        'React 애니메이션 라이브러리로, 부드럽고 자연스러운 애니메이션을 구현하기 위해 사용하였습니다.',
    },
    {
      svg: <NaverMapSVG className="size-5" />,
      name: 'Naver Api',
      bg: 'bg-[#03C75A]',
      explanation:
        '네이버 지도 및 네이버 소셜 로그인 기능을 위해 사용하였습니다.',
    },
    {
      svg: <FirebaseSVG className="size-5" />,
      name: 'Firebase',
      bg: 'bg-[#FFCA28]',
      explanation:
        'Service worker를 이용하여 웹 푸쉬 알림을 도입하기 위해 사용하였습니다.',
    },
    {
      svg: <PwaSVG className="size-5" />,
      name: 'PWA',
      bg: 'bg-[#5A0FC8]',
      explanation:
        '프로그레시브 웹 애플리케이션을 구현하여 네이티브 앱과 유사한 사용자 경험을 제공하기 위해 사용하였습니다.',
    },
    {
      svg: <SocketIoSVG className="size-5" />,
      name: 'Socket.io',
      bg: 'bg-[#010101]',
      explanation:
        '실시간 양방향 통신을 구현하여 실시간 채팅, 알림 등의 기능을 제공하기 위해 사용하였습니다.',
    },
    {
      svg: <JestSVG className="size-5" />,
      name: 'Jest',
      bg: 'bg-[#C21325]',
      explanation:
        '단위 테스트와 통합 테스트를 효율적으로 작성하고 안정성을 높이기 위해 사용하였습니다.',
    },
    {
      svg: <VercelSVG className="size-5" />,
      name: 'Vercel',
      bg: 'bg-[#000000]',
      explanation:
        '프론트엔드 애플리케이션을 배포하고, 자동화된 CI/CD 파이프라인을 구성하기 위해 사용하였습니다.',
    },
    {
      svg: <DockerSVG className="size-5" />,
      name: 'Docker',
      bg: 'bg-[#2496ED]',
      explanation:
        '컨테이너 기술을 사용하여 애플리케이션의 환경 일관성을 유지하고, 배포와 스케일링을 용이하게 하기 위해 사용하였습니다.',
    },
    {
      svg: <GitHubActionsSVG className="size-5" />,
      name: 'GitHub Actions',
      bg: 'bg-[#2088FF]',
      explanation:
        '자동화된 워크플로우를 설정하여 CI/CD 파이프라인을 구축하고, 코드 품질을 유지하기 위해 사용하였습니다.',
    },
    {
      svg: <SentrySVG className="size-5" />,
      name: 'Sentry',
      bg: 'bg-[#362D59]',
      explanation:
        '에러 모니터링과 로그 수집을 위해 도입하였습니다. 디스코드 웹훅과 연동하여 에러 상황을 모니터링하고 대응하였습니다.',
    },
    {
      svg: <StorybookSVG className="size-5" />,
      name: 'StoryBook',
      bg: 'bg-[#ff4785]',
      explanation:
        '컴포넌트의 문서화 및 디자이너와의 효율적인 협업을 위해 사용하였습니다.',
    },
    {
      svg: <EslintSVG className="size-5" />,
      name: 'Eslint',
      bg: 'bg-[#3949ab]',
      explanation:
        '팀원과의 코드 품질과 일관성을 유지하기 위해 코드 린팅 도구로 사용하였습니다.',
    },
  ];

  return (
    <div className="max-w-6xl p-4 sm:p-4 xl:p-8 [&>section]:mb-16 [&>section]:border-b [&>section]:border-solid [&>section]:border-dark-disabled [&>section]:pb-4">
      <Explanation {...explanation}>
        <div className="border-t border-solid border-dark-menu-hover pt-2">
          댄서와 수강생을 연결해주는 웹 플랫폼으로 유저의 요구를 이해하기 위해
          <strong> 설문조사 결과를 기반으로 기획</strong>
          됐습니다.
          <br />
          <br />
          강사들이 자신의 클래스를 종합적으로 관리하고 효과적으로 홍보할 수
          있도록 지원함으로써, 강사들의 업무 효율성을 높여줍니다.
          <br />
          수강생들은 다양한 클래스와 강사들 중에서 자신의 필요와 취향에 맞는
          수업을 자유롭게 선택할 수 있는 기회를 얻게 됩니다.
          <br />
          <br />
          현재 이 플랫폼은 실제 <strong>사업자 등록 </strong>
          절차 진행 중에 있습니다.
        </div>
      </Explanation>
      <Skill skillList={skills} />
      <section>
        <h2 className="mb-4 text-4xl font-semibold">디자인</h2>
        <iframe
          className="h-[28.125rem] w-full"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FR0JimB5gutov7mYBOZ0yVB%2F%25EC%25BB%25A4%25EB%2584%25A5%25EC%2585%2598-%25EB%25B0%2598%25EC%259D%2591%25ED%2598%2595%3Fnode-id%3D0%253A1%26t%3DZABXiEcbqGzOawN6-1"
        />
      </section>
      <section>
        <h2 className="text-4xl font-semibold">개발 과정</h2>
      </section>
      <section>
        <h2 className="text-4xl font-semibold">느낀점 & 아쉬운점</h2>
      </section>
    </div>
  );
};

export default page;

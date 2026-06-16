import { Metadata } from 'next';
import {
  AwsSVG,
  DockerSVG,
  GitHubActionsSVG,
  NestSVG,
  NextSVG,
  PostgreSQLSVG,
  ReactHookFormSVG,
  ReactQuerySVG,
  TaillwindSVG,
  TurboRepoSVG,
  TypeScriptSVG,
  ZustandSVG,
} from '@/icons/index';
import { logo } from '@/images/humming-vision';
import DevProcessTimeline from './_components/DevProcessTimeline';
import Design from '../_components/Design';
import Explanation from '../_components/Explanation';
import Skill from '../_components/Skill';

export const metadata: Metadata = {
  title: '이현준 | 허밍비전',
  description: '이현준 허밍비전 프로젝트 자세히 보기 페이지',
};

const page = () => {
  const EXPLANATION = {
    title: 'Humming Vision',
    personnel: 'Full-stack: 1명, Designer: 1명',
    period: '( 2024.12 ~ 2025.07 )',
    webSite: 'https://hummingvision.com/',
    github: 'https://github.com/hyeonjun-L/humming-vision',
    isOperating: true,
    logo,
  } as const;

  const SKILLS = [
    {
      svg: <NextSVG className="size-5" />,
      name: 'Next.js',
      bg: 'bg-[#000000]',
      explanation:
        '(App Router) B2B 웹사이트의 검색 엔진 노출을 위한 SEO 최적화에 중점을 두고, 동적 sitemap 생성, generateMetadata를 통한 제품별 메타데이터 자동 생성, 서버 사이드 렌더링 등의 기능을 활용하기 위해 사용하였습니다.',
    },
    {
      svg: <TypeScriptSVG className="size-5" />,
      name: 'TypeScript',
      bg: 'bg-[#3178C6]',
      explanation:
        '프론트엔드와 백엔드 전체에서 타입 안정성을 확보하고, OpenAPI 스펙 기반으로 자동 생성된 타입을 통해 API 응답 타입 불일치를 방지하여 안정적인 풀스택 개발을 위해 사용하였습니다.',
    },
    {
      svg: <TaillwindSVG className="size-5" />,
      name: 'Tailwind CSS',
      bg: 'bg-[#06B6D4]',
      explanation:
        '서버 컴포넌트에서도 사용 가능한 zero-runtime CSS 특성과 유틸리티 클래스 기반의 빠른 UI 개발을 위해 선택하였습니다.',
    },
    {
      svg: <ReactQuerySVG className="size-5" />,
      name: 'React Query',
      bg: 'bg-[#FF4154]',
      explanation:
        '백엔드 API와의 통신에서 발생하는 서버 상태를 효율적으로 관리하고, 제품 목록 및 상세 정보의 캐싱과 자동 리페치를 통해 불필요한 네트워크 요청을 줄이기 위해 사용하였습니다.',
    },
    {
      svg: <ZustandSVG className="size-5" />,
      name: 'Zustand',
      bg: 'bg-[#614a28]',
      explanation:
        '간단하고 가벼운 보일러플레이트로 모달, 사이드바 등 UI 관련 클라이언트 전역 상태를 관리하기 위해 사용하였습니다.',
    },
    {
      svg: <ReactHookFormSVG className="size-5" />,
      name: 'React Hook Form',
      bg: 'bg-[#EC5990]',
      explanation:
        '제품 등록/수정, 문의 작성 등 복잡한 폼 데이터를 효율적으로 관리하고, Zod 스키마를 통한 타입 안전한 유효성 검사를 구현하기 위해 사용하였습니다.',
    },
    {
      svg: <NestSVG className="size-5" />,
      name: 'NestJS',
      bg: 'bg-[#E0234E]',
      explanation:
        'TypeScript 기반의 구조화된 백엔드 아키텍처를 구축하고, 의존성 주입(DI)과 모듈 시스템을 활용하여 확장 가능하고 유지보수가 용이한 RESTful API 서버를 개발하기 위해 사용하였습니다.',
    },
    {
      svg: <PostgreSQLSVG className="size-5" />,
      name: 'PostgreSQL',
      bg: 'bg-[#4169E1]',
      explanation:
        '제품(카메라, 렌즈, 조명 등), 관리자, 문의 등 복잡한 관계를 가진 데이터를 안정적으로 저장하고 관리하기 위해 관계형 데이터베이스를 선택하였습니다.',
    },
    {
      svg: <AwsSVG className="size-5" />,
      name: 'AWS',
      bg: 'bg-[#FF9900]',
      explanation:
        'EC2에서 Docker 기반 애플리케이션을 배포하고, S3를 통해 제품 이미지 및 문서 파일(PDF, 매뉴얼 등)을 안전하게 저장하며 확장 가능한 인프라를 구축하기 위해 사용하였습니다.',
    },
    {
      svg: <DockerSVG className="size-5" />,
      name: 'Docker',
      bg: 'bg-[#2496ED]',
      explanation:
        '멀티 스테이지 빌드를 통한 이미지 최적화와 개발-운영 환경의 일관성을 보장하며, 프론트엔드와 백엔드를 각각 컨테이너화하여 배포를 간소화하기 위해 사용하였습니다.',
    },
    {
      svg: <GitHubActionsSVG className="size-5" />,
      name: 'GitHub Actions',
      bg: 'bg-[#2088FF]',
      explanation:
        'main 브랜치에 푸시 시 자동으로 Docker 이미지를 빌드하고 EC2 서버에 배포하는 CI/CD 파이프라인을 구축하여 수동 배포 작업을 제거하고 배포 안정성을 높이기 위해 사용하였습니다.',
    },
    {
      svg: <TurboRepoSVG className="size-5" />,
      name: 'Turborepo',
      bg: 'bg-[#EF4444]',
      explanation:
        'Next.js 프론트엔드, NestJS 백엔드, 공유 타입 패키지를 하나의 모노레포에서 효율적으로 관리하고, 백엔드 API 스펙을 자동으로 TypeScript 타입으로 변환하여 프론트엔드에서 사용할 수 있도록 구성하였습니다.',
    },
  ];

  const DESIGN_LINK =
    'https://embed.figma.com/design/aszBUPjoiS0VTmrEOB1OqP/%ED%97%88%EB%B0%8D%EB%B9%84%EC%A0%84?node-id=22-1147&embed-host=share';

  const STORY_BOARD_LINK =
    'https://embed.figma.com/design/waxsJ1lV1zmwgTKYQ58duk/%ED%97%88%EB%B0%8D%EB%B9%84%EC%A0%84-%EC%8A%A4%ED%86%A0%EB%A6%AC-%EB%B3%B4%EB%93%9C?node-id=0-1&embed-host=share';

  const REQUIREMENT_ANALYSIS_LINK =
    'https://brief-zydeco-9fd.notion.site/ebd/15c97668c4da80f9a915d19e825bc050';

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-4 [&>section]:mb-16 [&>section]:border-b [&>section]:border-solid [&>section]:border-dark-disabled [&>section]:pb-4">
      <Explanation {...EXPLANATION}>
        <div className="border-t border-solid border-dark-menu-hover pt-2">
          머신 비전 하드웨어(카메라, 렌즈, 조명, 프레임그래버, 소프트웨어 등)
          제품 카탈로그를 제공하는 <strong>B2B 기업 웹사이트</strong>입니다.
          <br />
          <br />
          고객과 직접 미팅하며 <strong>요구사항을 정의</strong>하고,
          스토리보드를 작성하여 디자이너와 협업했습니다. 디자인을 제외한{' '}
          <strong>전체 개발 과정을 혼자 진행</strong>했으며, 데이터베이스
          설계부터 프론트엔드/백엔드 개발, AWS 인프라 구축 및 CI/CD
          파이프라인까지 end-to-end로 구현했습니다.
          <br />
          <br />
          <strong>Turborepo 기반 모노레포 아키텍처</strong>를 적용하여
          프론트엔드와 백엔드 간 타입 안정성을 확보하고, 공통 로직을 효율적으로
          관리했습니다. 관리자는 제품을 등록/수정/삭제하고, 고객 문의를 관리할
          수 있으며, 방문자는 다양한 제품을 탐색하고 문의를 남길 수 있습니다.
        </div>
      </Explanation>
      <Design link={REQUIREMENT_ANALYSIS_LINK} title="요구사항 분석" />
      <Design link={STORY_BOARD_LINK} title="스토리보드" />
      <Design link={DESIGN_LINK} />
      <Skill skillList={SKILLS} />
      <DevProcessTimeline />
    </div>
  );
};

export default page;

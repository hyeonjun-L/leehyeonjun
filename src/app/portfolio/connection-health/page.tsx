import { Metadata } from 'next';
import Link from 'next/link';
import {
  AxiosSVG,
  ChatGPTSVG,
  EslintSVG,
  NaverMapSVG,
  ReactRouterSVG,
  ReactSVG,
  StyledComponentsSVG,
  TypeScriptSVG,
  VercelSVG,
  ViteSVG,
} from '@/icons/index';
import { logo } from '@/images/connection-health';
import DevProcessTimeline from './_components/DevProcessTimeline';
import Design from '../_components/Design';
import Explanation from '../_components/Explanation';
import Skill from '../_components/Skill';

export const metadata: Metadata = {
  title: '이현준 | 커넥션 건강',
  description: '이현준 커넥션 건강 프로젝트 자세히 보기 페이지',
};

const page = () => {
  const EXPLANATION = {
    title: 'Connection-health',
    personnel: 'FE: 2명, BE: 1명, Designer: 1명',
    period: '( 2023.09 ~ 2023.09.04 )',
    webSite: 'https://prompterday-frontend.vercel.app',
    github: 'https://github.com/connection-prompterday/prompterday-frontend',
    logo,
  } as const;

  const SKILLS = [
    {
      svg: <ReactSVG className="size-5" />,
      name: 'React',
      bg: 'bg-[#61DAFB]',
      explanation:
        '컴포넌트 기반의 선언적 UI 구성과 효율적인 상태 관리를 위해 사용했습니다.',
    },
    {
      svg: <TypeScriptSVG className="size-5" />,
      name: 'TypeScript',
      bg: 'bg-[#3178C6]',
      explanation:
        ' 컴파일 단계에서 발생할 수 있는 오류를 사전에 감지하여 코드의 안정성을 향상시키고 버그 발생 가능성을 줄이기 위해 사용하였습니다.',
    },
    {
      svg: <ReactRouterSVG className="size-5" />,
      name: 'React Router',
      bg: 'bg-[#CA4245]',
      explanation:
        'SPA(Single Page Application)의 라우팅 관리 및 사용자에게 끊김 없는 페이지 전환 경험을 제공을 위해 사용되었습니다. ',
    },
    {
      svg: <StyledComponentsSVG className="size-5" />,
      name: 'Styled-components',
      bg: 'bg-[#DB7093]',
      explanation:
        '컴포넌트 단위의 스타일 캡슐화와 동적 스타일링으로 유연한 디자인 구현을 위해 선택하였습니다.',
    },
    {
      svg: <AxiosSVG className="size-5" />,
      name: 'Axios',
      bg: 'bg-[#5A29E4]',
      explanation:
        'HTTP 요청을 간결하게 처리하고, 자동 JSON 데이터 파싱, 에러 처리 및 재시도 로직을 구성하기 위해 선택했습니다.',
    },
    {
      svg: <ViteSVG className="size-5" />,
      name: 'Vite',
      bg: 'bg-[#646CFF]',
      explanation:
        'ES 모듈을 기반으로 하는 개발 서버와 Rollup을 활용한 최적화된 프로덕션 빌드로 빠른 개발과 효율적인 배포 과정을 위해 선택했습니다.',
    },
    {
      svg: <NaverMapSVG className="size-5" />,
      name: 'Naver Api',
      bg: 'bg-[#03C75A]',
      explanation: '네이버 OCR 기능을 사용하기 위해 사용했습니다.',
    },
    {
      svg: <ChatGPTSVG className="size-5" />,
      name: 'Chat GPT',
      bg: 'bg-[#1fc390]',
      explanation:
        '텍스트에서 원재료명 및 사용자의 건강상태를 바탕으로 섭취 가능 여부 및 성분 특징을 추출하기 위해 사용했습니다.',
    },
    {
      svg: <EslintSVG className="size-5" />,
      name: 'Eslint',
      bg: 'bg-[#3949ab]',
      explanation:
        '팀원과의 코드 품질과 일관성을 유지하기 위해 코드 린팅 도구로 사용하였습니다.',
    },
    {
      svg: <VercelSVG className="size-5" />,
      name: 'Vercel',
      bg: 'bg-[#000000]',
      explanation: '프론트엔드 애플리케이션을 배포하기 위해 사용하였습니다.',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-4 [&>section]:mb-16 [&>section]:border-b [&>section]:border-solid [&>section]:border-dark-disabled [&>section]:pb-4">
      <Explanation {...EXPLANATION}>
        <div className="border-t border-solid border-dark-menu-hover pt-6">
          본 프로젝트는{' '}
          <Link
            href="https://news.sktelecom.com/197509"
            target="_blank"
            className="underline underline-offset-2"
          >
            Prompt-er Day Seoul 2023
          </Link>{' '}
          출전작으로 React를 사용해서 개발한{' '}
          <strong>개인 맞춤형 AI 건강 관리 어시스턴트 서비스</strong>입니다.
          사용자의 질병 정보와 음식 및 의약품의 성분을 입력받아{' '}
          <strong>GPT-3.5 Turbo</strong>를 기반으로 식품과 의약품의 성분을
          분석하여 사용자 개개인의 건강 상태에 따른 섭취 여부 판단을 돕는
          서비스입니다. 사용자가 보유한 질병 및 알레르기와 입력된 원재료명을
          바탕으로 GPT 모델을 활용하여 성분 특징, 1일 섭취량 등이 포함된 결과를
          보여줍니다.
          <br />
          <br />
          <Link
            href="https://storage.googleapis.com/leehyeonjun.com/connection-health/connection-health.pdf"
            download="connection-health.pdf"
            target="_blank"
            className="underline underline-offset-4"
          >
            (프로젝트 발표 pdf 보기)
          </Link>
        </div>
      </Explanation>
      <Skill skillList={SKILLS} />
      <Design link="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F57fx1eyB2NXD2iVwSFn2rp%2F%25EC%25BB%25A4%25EB%2584%25A5%25EC%2585%2598_%25ED%2595%25B4%25EC%25BB%25A4%25ED%2586%25A4%3Fnode-id%3D0-1%26t%3DQWlHl3MC0bYQPyiM-1" />
      <DevProcessTimeline />
    </div>
  );
};

export default page;

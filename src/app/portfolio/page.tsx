import { Metadata } from 'next';
import connectionImage from '@/images/connection/connection_main.png';
import connectionHealthImage from '@/images/connection-health/connection-health.png';
import editorImage from '@/images/editor/editor.jpg';
import Project from './_components/Project';
// import haruImage from '@/images/haru/haru.jpg';

export const metadata: Metadata = {
  title: '이현준 | 포트폴리오',
  description: '이현준 포트폴리오 보기 페이지',
};

const page = () => {
  const PROJECT_LIST = [
    {
      src: connectionImage,
      alt: '커넥션 프로젝트 이미지',
      explanation:
        '설문조사를 통해 기획된 웹 댄스 플랫폼으로, 강사는 클래스 관리와 홍보를, 수강생은 필요에 맞는 수업 선택을 할 수 있습니다. 현재 사업자 등록 진행 중입니다.',
      webLink: 'https://connection-frontend.vercel.app',
      detailLink: '/portfolio/connection',
    },
    {
      src: connectionHealthImage,
      alt: '커넥션 건강 이미지',
      explanation:
        'GPT-3.5 Turbo를 활용해 사용자의 질병 정보와 음식 및 의약품 성분을 분석하여 개인별 적합한 섭취 여부를 판단하는 서비스입니다. 해당 서비스로 Prompt-er Day Seoul 2023 해커톤에서 상위 40팀에 들어 예선을 통과했습니다.',
      webLink: 'https://prompterday-frontend.vercel.app',
      detailLink: '/portfolio/connection-health',
    },
    {
      src: editorImage,
      alt: '에디터 이미지',
      explanation:
        '글 작성, 수정, 삭제를 할 수 있는 온라인 에디터를 순수 JavaScript를 이용해 컴포넌트 방식으로 구현한 개인 프로젝트',
      webLink: 'https://project-online-editor.vercel.app',
      gitLink: 'https://github.com/hyeonjun-L/online-editor',
    },
    // {
    //   src: haruImage,
    //   alt: '하루 이미지',
    //   explanation:
    //     '친구들과 일정 및 일기를 공유할 수 있는 캘린더 서비스 입니다. 각 날짜별로 일정과 일기를 기록하고, 친구들의 일정과 일기를 확인할 수 있는 기능을 제공합니다. 또한, 댓글과 좋아요 기능을 통해 친구들과 소통할 수 있습니다.',
    //   webLink: 'https://5term-mini-front.vercel.app/',
    //   detailLink: '/portfolio/haru',
    // },
  ];

  return (
    <section className="mx-auto mb-5 grid h-dvh w-full max-w-6xl gap-12 p-4 sm:p-16 lg:grid-cols-2">
      {PROJECT_LIST.map((info) => (
        <Project key={info.alt} {...info} />
      ))}
    </section>
  );
};

export default page;

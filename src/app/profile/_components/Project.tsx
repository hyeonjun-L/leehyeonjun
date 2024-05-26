import Image from 'next/image';
import Link from 'next/link';
import {
  AxiosSVG,
  ChatGPTSVG,
  DockerSVG,
  EslintSVG,
  FirebaseSVG,
  FramerMotionSVG,
  GitHubActionsSVG,
  JavaScriptSVG,
  JestSVG,
  NaverMapSVG,
  NextSVG,
  PwaSVG,
  ReactHookFormSVG,
  ReactQuerySVG,
  ReactRouterSVG,
  ReactSVG,
  ReactTableSVG,
  SentrySVG,
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
import connectionImage from '@/images/connection/connection_main.png';
import connectionHealthImage from '@/images/connection-health/connection-health.png';
import editorImage from '@/images/editor/editor.jpg';
import haruImage from '@/images/haru/haru.jpg';

const Project = () => {
  const PROJECT = [
    {
      title: 'Connection',
      explanation: '댄서와 수강생 매칭 서비스',
      personnel: '(FE: 2명, BE: 2명, Designer: 1명)',
      period: '2023.09 ~',
      image: connectionImage,
      mainColor: 'border-[#ff3e9a]',
      imageAlt: '커넥션',
      webSite: 'https://connection-frontend.vercel.app',
      github: 'https://github.com/connection-2023/frontend',
      developmentProcess: '/portfolio/connection',
      figma:
        'https://www.figma.com/design/R0JimB5gutov7mYBOZ0yVB/%EC%BB%A4%EB%84%A5%EC%85%98-%EB%B0%98%EC%9D%91%ED%98%95',
      detailExplanation: (
        <div>
          댄서와 수강생을 연결해주는 웹 플랫폼으로 유저의 요구를 이해하기 위해
          설문조사 결과를 기반으로 기획됐습니다.
          <br />
          <br />
          강사들이 자신의 클래스를 종합적으로 관리하고 효과적으로 홍보할 수
          있도록 지원함으로써, 강사들의 업무 효율성을 높여줍니다.
          <br />
          수강생들은 다양한 클래스와 강사들 중에서 자신의 필요와 취향에 맞는
          수업을 자유롭게 선택할 수 있는 기회를 얻게 됩니다.
          <br />
          <br />
          현재 이 플랫폼은 실제 사업자 등록 절차 진행 중에 있습니다.
        </div>
      ),
      role: (
        <ul className="flex flex-col gap-2">
          <li>강사 (등록, 상세, 수정) 페이지 구현</li>
          <li>클래스 작성 페이지 및 임시저장 기능 구현</li>
          <li>쿠폰 (생성, 결제, 관리) 페이지 및 기능 구현</li>
          <li>패스권 (판매, 결제, 검색, 관리) 페이지 및 기능 구현</li>
          <li>(전체, 강사, 클래스, 패스권) 검색 페이지 구현</li>
          <li>리뷰 관련 기능 및 관리 페이지 구현</li>
          <li>관심 or 차단 강사, 클래스 좋아요 기능 및 페이지 구현</li>
          <li>회원 관리 페이지 구현</li>
          <li>내 정보 수정 페이지 구현</li>
          <li>네이버 지도 공통 컴포넌트 구현</li>
          <li>네이버 소셜 로그인 구현</li>
          <li>실시간 채팅 및 알림 기능 구현</li>
          <li>PWA 구축 및 설치 방법 알림 페이지 구현</li>
          <li>FCM 연결 및 웹 푸쉬 알림 구현</li>
          <li>캐러셀 공통 컴포넌트 구현</li>
          <li>access Token 관리 및 refresh Token 재발급 로직 구현</li>
          <li>미들웨어로 token 검사 및 protect route 구현</li>
          <li>usePagiNation 공통 커스텀 훅 구현</li>
          <li>progressbar 구현</li>
          <li>Storybook을 활용한 컴포넌트 문서화 및 UI 리뷰 간편화</li>
          {/* <li>헤더 컴포넌트 구현</li>  */}
        </ul>
      ),
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
          name: 'Tailwind CSS',
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
    },
    {
      title: 'Connection-Health',
      explanation: '개인 맞춤형 AI 건강 관리 어시스턴트',
      personnel: '(FE: 2명, BE: 1명, Designer: 1명)',
      period: '2023.08 ~ 2023.09',
      image: connectionHealthImage,
      mainColor: 'border-[#12DDCE]',
      imageAlt: 'connection health',
      webSite: 'https://prompterday-frontend.vercel.app/',
      github: 'https://github.com/Eunseo-jo/prompterday-frontend',
      figma:
        'https://www.figma.com/design/57fx1eyB2NXD2iVwSFn2rp/%EC%BB%A4%EB%84%A5%EC%85%98_%ED%95%B4%EC%BB%A4%ED%86%A4',
      developmentProcess: '/portfolio/connection-health',
      detailExplanation: (
        <div>
          사용자의 질병 정보와 음식 및 의약품의 성분을 입력 받아, GPT-3.5
          Turbo를 기반으로 하여 식품과 의약품의 성분을 분석합니다. 이를 통해
          사용자 개개인의 건강 상태에 적합한 섭취 여부를 판단하는 데 도움을 주는
          서비스입니다.
          <br />
          <br />
          사용자가 보유한 질병 및 알레르기 정보와 입력된 원재료명을 바탕으로,
          GPT 모델을 활용하여 성분 특징과 권장 1일 섭취량 등을 포함한 결과를
          제공합니다.
          <br />
          <br />
          Prompt-er Day Seoul 2023 해커톤에서 200팀이 넘는 참가 팀 중 상위 40팀
          안에 들어 예선을 통과하는 성과를 이루었습니다.
        </div>
      ),
      role: (
        <ul className="flex flex-col gap-2">
          <li>이미지에서 원재료명 추출 OCR 기능 구현</li>
          <li>이미지 cropper 기능 구현</li>
          <li>원재료명 GPT로 가공처리 로딩 애니메이션 구현</li>
        </ul>
      ),
      skills: [
        {
          svg: <ReactSVG className="size-5" />,
          name: 'React',
          bg: 'bg-[#61DAFB]',
        },
        {
          svg: <TypeScriptSVG className="size-5" />,
          name: 'TypeScript',
          bg: 'bg-[#3178C6]',
        },
        {
          svg: <ReactRouterSVG className="size-5" />,
          name: 'React Router',
          bg: 'bg-[#CA4245]',
        },
        {
          svg: <StyledComponentsSVG className="size-5" />,
          name: 'Styled-components',
          bg: 'bg-[#DB7093]',
        },
        {
          svg: <AxiosSVG className="size-5" />,
          name: 'Axios',
          bg: 'bg-[#5A29E4]',
        },
        {
          svg: <ViteSVG className="size-5" />,
          name: 'Vite',
          bg: 'bg-[#646CFF]',
        },
        {
          svg: <NaverMapSVG className="size-5" />,
          name: 'Naver Api',
          bg: 'bg-[#03C75A]',
        },
        {
          svg: <ChatGPTSVG className="size-5" />,
          name: 'Chat GPT',
          bg: 'bg-[#1fc390]',
        },
        {
          svg: <EslintSVG className="size-5" />,
          name: 'Eslint',
          bg: 'bg-[#3949ab]',
        },
        {
          svg: <VercelSVG className="size-5" />,
          name: 'Vercel',
          bg: 'bg-[#000000]',
        },
      ],
    },
    {
      title: 'Online Editor',
      explanation: '온라인 에디터',
      personnel: '(개인 프로젝트)',
      period: '2023.06.27 ~ 2023.07.17',
      image: editorImage,
      mainColor: 'border-[#2ca9bc]',
      imageAlt: 'online editor',
      webSite: 'https://project-online-editor.vercel.app/',
      github: 'https://github.com/hyeonjun-L/Project_Notion_VanillaJS-',
      figma: '',
      developmentProcess: '/portfolio/online-editor',
      detailExplanation: (
        <div>
          글 작성, 수정, 삭제를 할 수 있는 온라인 에디터를 순수 JavaScript를
          이용해 컴포넌트 방식으로 구현한 개인 프로젝트
        </div>
      ),
      role: (
        <ul className="flex flex-col gap-2">
          <li>
            용이한 상태 관리를 위해 싱글톤 패턴을 이용한 전역 Store를 만들어
            사용
          </li>
          <li>
            글 자동 저장 기능 구현 시 api 호출 회수 감소를 줄이기 위해 keyup
            이벤트 핸들러에 debounce를 사용
          </li>
        </ul>
      ),
      skills: [
        {
          svg: <JavaScriptSVG className="size-5" />,
          name: 'JavaScript',
          bg: 'bg-[#F7DF1E]',
        },
        {
          svg: <WebpackSVG className="size-5" />,
          name: 'Webpack',
          bg: 'bg-[#8DD6F9]',
        },
        {
          svg: <VercelSVG className="size-5" />,
          name: 'Vercel',
          bg: 'bg-[#000000]',
        },
      ],
    },
    {
      title: 'HARU',
      explanation: '친구들과 공유가 가능한 캘린더',
      personnel: '(FE: 1명, BE: 3명, Designer: 1명)',
      period: '2023.01 ~ 2023.02',
      image: haruImage,
      mainColor: 'border-gray',
      imageAlt: 'HARU',
      webSite: 'https://5term-mini-front.vercel.app/',
      github: 'https://github.com/hyeonjun-L/5term-mini-front',
      figma:
        'https://xd.adobe.com/view/304fe50c-487e-4afc-8d53-fe7699e134f4-651c/screen/266e2c5f-4b59-4568-a6ba-8668cc55aa76',
      developmentProcess: '/portfolio/haru',
      detailExplanation: (
        <div>
          친구들과 일정 및 일기를 공유할 수 있는 캘린더 서비스 입니다.
          <br />
          <br />각 날짜별로 일정과 일기를 기록하고, 친구들의 일정과 일기를
          확인할 수 있는 기능을 제공합니다. 또한, 댓글과 좋아요 기능을 통해
          친구들과 소통할 수 있습니다.
        </div>
      ),
      role: (
        <ul className="flex flex-col gap-2">
          <li>캘린더 및 공휴일 표시 기능 구현</li>
          <li>친구 (검색, 신청, 조회, 삭제) 기능 구현</li>
          <li>댓글 및 좋아요 기능 구현</li>
          <li>일정 및 일기 CRUD 기능 구현</li>
        </ul>
      ),
      skills: [
        {
          svg: <ReactSVG className="size-5" />,
          name: 'React',
          bg: 'bg-[#61DAFB]',
        },
        {
          svg: <JavaScriptSVG className="size-5" />,
          name: 'JavaScript',
          bg: 'bg-[#F7DF1E]',
        },
        {
          svg: <ReactRouterSVG className="size-5" />,
          name: 'React Router',
          bg: 'bg-[#CA4245]',
        },
        {
          svg: <StyledComponentsSVG className="size-5" />,
          name: 'Styled-components',
          bg: 'bg-[#DB7093]',
        },
        {
          svg: <AxiosSVG className="size-5" />,
          name: 'Axios',
          bg: 'bg-[#5A29E4]',
        },
        {
          svg: <VercelSVG className="size-5" />,
          name: 'Vercel',
          bg: 'bg-[#000000]',
        },
      ],
    },
  ] as const;

  return (
    <section className="mt-14 flex flex-col gap-10 border-solid border-dark-disabled sm:border-b ">
      <h2 className="text-4xl font-semibold">프로젝트</h2>
      {PROJECT.map(
        ({
          title,
          explanation,
          personnel,
          detailExplanation,
          period,
          image,
          imageAlt,
          webSite,
          github,
          developmentProcess,
          role,
          skills,
          mainColor,
          figma,
        }) => (
          <div key={title} className="grid gap-y-2 sm:grid-cols-[1.4fr_2fr]">
            <div className="top-16 mx-auto flex max-h-[25rem] flex-col sm:sticky">
              <h3 className="mb-4 text-3xl">{title}</h3>
              <p>{explanation}</p>
              <p>{personnel}</p>
              <p>{period}</p>
              <div className="mt-3 flex items-center gap-4 [&>a]:underline [&>a]:underline-offset-4">
                <Link
                  className="hover:text-dark-text"
                  href={webSite}
                  target="_blank"
                >
                  WebSite
                </Link>

                <Link
                  className="hover:text-dark-text"
                  href={github}
                  target="_blank"
                >
                  GitHub
                </Link>
                {figma && (
                  <Link
                    className="hover:text-dark-text"
                    href={figma}
                    target="_blank"
                  >
                    Design
                  </Link>
                )}
                <Link
                  className="hover:text-dark-text"
                  href={developmentProcess}
                >
                  Detail
                </Link>
              </div>
              <Image
                src={image}
                alt={imageAlt}
                className={`mt-2 w-full max-w-80 border border-solid p-1 ${mainColor}`}
              />
            </div>
            <div className="flex flex-col gap-3 border-l border-solid border-dark-disabled px-8  [&>div]:pl-5 [&>h4]:mt-4 [&>h4]:text-xl [&>ul]:pl-5">
              <h4>1.설명</h4>
              {detailExplanation}
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
              <Link
                href={developmentProcess}
                className="my-8 underline underline-offset-4 hover:text-dark-text"
              >
                {title} 프로젝트 내용 자세히 보러 가기
              </Link>
              {/* <h4>4.프로젝트를 진행하며 경험하고 체득한 부분</h4>
              {learned} */}
            </div>
          </div>
        ),
      )}
    </section>
  );
};

export default Project;

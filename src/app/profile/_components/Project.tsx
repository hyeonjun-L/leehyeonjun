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
  ZustandSVG,
  JavaScriptSVG,
  WebpackSVG,
  NestSVG,
  PostgreSQLSVG,
  AwsSVG,
  TurboRepoSVG,
} from '@/icons/index';
import connectionImage from '@/images/connection/connection_main.png';
import connectionHealthImage from '@/images/connection-health/connection-health.png';
import editorImage from '@/images/editor/editor.jpg';
// import haruImage from '@/images/haru/haru.jpg';

const Project = () => {
  const PROJECT = [
    {
      title: 'Humming Vision',
      explanation: '머신 비전 하드웨어 전문 기업 웹사이트',
      personnel: '(개인 프로젝트 - 기획/개발/인프라)',
      period: '2024.12 ~ 2025.07',
      image: connectionImage,
      mainColor: 'border-[#your-brand-color]', // 브랜드 컬러로 수정
      imageAlt: 'Humming Vision',
      webSite: 'https://your-website.com', // 실제 URL로 수정
      github: 'https://github.com/hyeonjun-L/humming-vision',
      figma: 'https://www.figma.com/design/waxsJ1lV1zmwgTKYQ58duk/...',
      developmentProcess: '/portfolio/humming-vision',
      detailExplanation: (
        <div>
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
      ),
      role: (
        <div>
          이 프로젝트는 처음으로{' '}
          <strong>요구사항 정의부터 배포까지 전 과정을 혼자 담당</strong>한
          프로젝트로, 실제 고객과의 미팅을 통해 비즈니스 요구사항을 기술로
          구현하는 과정을 경험할 수 있었습니다. 디자이너와의 협업을 위해 직접
          스토리보드를 작성하며 <strong>기획자의 관점</strong>에서 프로젝트를
          바라보는 시야를 넓힐 수 있었습니다.
          <br />
          <br />
          <strong>NestJS를 사용한 백엔드 개발</strong>은 이 프로젝트에서 처음
          시도한 부분으로, 의존성 주입(DI), 데코레이터 기반 라우팅, 미들웨어 등{' '}
          <strong>백엔드 아키텍처 패턴</strong>을 실제로 적용하며 배울 수
          있었습니다. 특히 TypeORM을 통해 엔티티 간 관계 설정, 마이그레이션
          관리, 트랜잭션 처리 등{' '}
          <strong>데이터베이스 설계의 실무적인 측면</strong>을 경험했습니다.
          <br />
          <br />
          <strong>Turborepo 기반 모노레포 구조</strong>를 처음 도입하면서,
          NestJS 백엔드에서 Swagger 데코레이터로 생성한 OpenAPI 스펙을{' '}
          <strong>자동으로 TypeScript 타입 정의로 변환</strong>하여 shared
          패키지에 배포하는 시스템을 구축했습니다. 이를 통해 프론트엔드에서 API
          응답 타입을 수동으로 작성할 필요 없이{' '}
          <strong>백엔드와 프론트엔드 간 타입 안정성을 자동으로 보장</strong>
          하는 방법을 배웠고, 모노레포 환경에서의 코드 재사용과 타입 공유의
          장점을 체감할 수 있었습니다.
          <br />
          <br />
          <strong>Next.js의 SEO 최적화 기능</strong>을 활용하여{' '}
          <strong>동적 Sitemap 생성 시스템</strong>을 구축했습니다. 백엔드
          API에서 실제 제품 데이터를 가져와 모든 제품 페이지의 URL을 자동으로
          생성하고, 각 페이지마다{' '}
          <strong>
            generateMetadata를 통해 Open Graph 메타데이터와 Canonical URL을
            동적으로 설정
          </strong>
          하여 검색 엔진 최적화를 구현했습니다. 이를 통해{' '}
          <strong>B2B 웹사이트에서의 SEO 중요성</strong>과
          <strong>Next.js의 메타데이터 API를 활용한 실무적인 SEO 전략</strong>을
          배울 수 있었습니다
          <br />
          <br />
          <strong>AWS EC2에 직접 인프라를 구축</strong>하고{' '}
          <strong>Docker로 컨테이너화</strong>하는 과정에서 멀티 스테이지 빌드를
          통한 이미지 최적화, 보안을 위한 non-root 사용자 설정 등{' '}
          <strong>프로덕션 환경 구축의 실무적인 고려사항</strong>을 배웠습니다.
          특히 <strong>GitHub Actions로 CI/CD 파이프라인을 직접 구성</strong>{' '}
          <strong>DevOps의 중요성과 자동화의 가치</strong>를 깊이 이해하게 하며
          코드 푸시부터 배포까지 자동화하는 과정을 경험했고, 이를 통해{' '}
          되었습니다.
          <br />
          <br />이 프로젝트를 통해 단순히 기능을 구현하는 것을 넘어서,
          <strong>
            비즈니스 요구사항을 기술로 해결하는 전체 프로세스
          </strong>와{' '}
          <strong>
            실제 운영 환경에서 안정적으로 서비스를 제공하기 위한 아키텍처 설계
          </strong>
          의 중요성을 배울 수 있었습니다. 특히 프론트엔드 개발자로서 백엔드와
          인프라까지 경험하며 <strong>개발자로서의 시야</strong>를 넓힐 수
          있었던 의미 있는 프로젝트였습니다.
        </div>
      ),
      skills: [
        {
          svg: <NextSVG className="size-5" />,
          name: 'Next.js',
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
          svg: <ReactQuerySVG className="size-5" />,
          name: 'React Query',
          bg: 'bg-[#FF4154]',
        },
        {
          svg: <ZustandSVG className="size-5" />,
          name: 'Zustand',
          bg: 'bg-[#614a28]',
        },
        {
          svg: <ReactHookFormSVG className="size-5" />,
          name: 'React Hook Form',
          bg: 'bg-[#EC5990]',
        },
        {
          svg: <NestSVG className="size-5" />,
          name: 'Nest.js',
          bg: 'bg-[#E0234E]',
        },
        {
          svg: <PostgreSQLSVG className="size-5" />,
          name: 'PostgreSQL',
          bg: 'bg-[#4169E1]',
        },
        {
          svg: <AwsSVG className="size-5" />,
          name: 'AWS',
          bg: 'bg-[#FF9900]',
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
          svg: <TurboRepoSVG className="size-5" />,
          name: 'Turborepo',
          bg: 'bg-[#EF4444]',
        },
      ],
    },
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
          <strong>댄서와 수강생을 연결해주는 웹 플랫폼</strong>으로 유저의
          요구를 이해하기 위해 설문조사 결과를 기반으로 기획됐습니다.
          <br />
          <br />
          강사들이 자신의 클래스를 종합적으로 관리하고 효과적으로 홍보할 수
          있도록 지원함으로써, 강사들의 업무 효율성을 높여줍니다.
          <br />
          수강생들은 다양한 클래스와 강사들 중에서 자신의 필요와 취향에 맞는
          수업을 자유롭게 선택할 수 있는 기회를 얻게 됩니다.
          <br />
        </div>
      ),
      role: (
        <div>
          대부분 처음 사용해 본 기술 스택과 구현해 본 기능들로 구성된
          프로젝트였습니다. 이 프로젝트를 통해{' '}
          <strong>SSR(Server-Side Rendering)</strong> 환경에 대해 배울 수
          있었으며, <strong>Next.js (App router)</strong>를 적극적으로 공부하고
          활용해 볼 기회가 되었습니다. 또한 <strong>React-Query</strong>와{' '}
          <strong>React-Hook-Form</strong> 등 개발의 편의를 돕는 여러
          라이브러리도 활용해 볼 수 있었습니다.
          <br />
          <br />
          그러나 프로젝트를 진행하면서 기획 변경과 기술 스택의 개발 과정에서
          여러 차례 변경이 있었습니다. 예를 들어,{' '}
          <strong>
            Emotion에서 Tailwind로, Recoil에서 Zustand로 전환하거나
            React-query를 중간에 도입하는 등의 변경 사항
          </strong>
          이 있었습니다. 이러한 변경으로 인해 마이그레이션이 반복되어 프로젝트
          개발에 상당한 시간이 소요되었고, 이는{' '}
          <strong>
            프로젝트 시작 전 철저한 기획과 기술 스택 선정의 중요성
          </strong>
          을 깨닫게 해주었습니다.
        </div>
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
      github: 'https://github.com/connection-prompterday/prompterday-frontend',
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
          Prompt-er Day Seoul 2023 해커톤에서{' '}
          <strong>
            200팀이 넘는 참가 팀 중 상위 40팀 안에 들어 예선을 통과
          </strong>
          하는 성과를 이루었습니다.
        </div>
      ),
      role: (
        <div>
          <strong>React의 라우팅</strong>과{' '}
          <strong>CSR(Client-Side Rendering)</strong>에 대한 이해를 깊게 할 수
          있었고,{' '}
          <strong>JavaScript의 비동기 처리와 고차 함수에 대한 지식</strong>을
          숙지할 수 있었습니다. <strong>UI/UX의 중요성</strong>에 대해 깊이
          이해하게 되었고,{' '}
          <strong>사용자 중심의 서비스 개발에 대한 인식</strong>을 높일 수
          있었습니다.
        </div>

        // <ul className="flex flex-col gap-2">
        //   <li>이미지에서 원재료명 추출 OCR 기능 구현</li>
        //   <li>이미지 cropper 기능 구현</li>
        //   <li>원재료명 GPT로 가공처리 로딩 애니메이션 구현</li>
        // </ul>

        // 이미지에서 원재료명을 추출하는 OCR 기능과 이미지 크롭(crop) 기능을
        //   구현했습니다. 또한, 이미지에서 OCR 기능을 통해 추출한 텍스트 중에서
        //   원재료명만을 추출하는 과정에서 API 응답 시간이 오래 걸린다는 단점을
        //   발견했습니다. 이를 보완하기 위해 사용자의 대기 시간을 줄이고자
        //   애니메이션을 도입했습니다.
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
      developmentProcess: '',
      detailExplanation: (
        <div>
          글 작성, 수정, 삭제를 할 수 있는 온라인 에디터를{' '}
          <strong>순수 JavaScript를 이용해 컴포넌트 방식으로 구현</strong>한
          개인 프로젝트
        </div>
      ),
      role: (
        <div>
          <strong>
            싱글톤 패턴을 적용해 만든 전역 Store를 통한 상태 관리 기법
          </strong>
          을 배우며, 애플리케이션 상태를 효율적으로 관리하는 방법에 대해 이해할
          수 있었습니다.
          <br />
          <br />글 자동 저장 기능의 구현 과정에서{' '}
          <strong>debounce 함수를 활용</strong>해 비동기 처리의 성능을
          최적화하는 방법을 익혔습니다. 이를 통해 사용자 입력 처리와 API 호출의
          최적화 방법에 대한 지식을 획득하였습니다.
          <br />
          <br />
          <strong>Webpack을 사용하여 번들링 과정을 설정</strong>하는 경험은 모던
          웹 애플리케이션의 개발 및 배포 과정에서 필수적인 자원들을 효율적으로
          관리하고 최적화하는 방법에 대해 배우게 됐습니다.
        </div>
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
    // {
    //   title: 'HARU',
    //   explanation: '친구들과 공유가 가능한 캘린더',
    //   personnel: '(FE: 1명, BE: 3명, Designer: 1명)',
    //   period: '2023.01 ~ 2023.02',
    //   image: haruImage,
    //   mainColor: 'border-gray',
    //   imageAlt: 'HARU',
    //   webSite: 'https://5term-mini-front.vercel.app/',
    //   github: 'https://github.com/hyeonjun-L/5term-mini-front',
    //   figma:
    //     'https://xd.adobe.com/view/304fe50c-487e-4afc-8d53-fe7699e134f4-651c/screen/266e2c5f-4b59-4568-a6ba-8668cc55aa76',
    //   developmentProcess: '/portfolio/haru',
    //   detailExplanation: (
    //     <div>
    //       친구들과 일정 및 일기를 공유할 수 있는 캘린더 서비스 입니다.
    //       <br />
    //       <br />각 날짜별로 일정과 일기를 기록하고, 친구들의 일정과 일기를
    //       확인할 수 있는 기능을 제공합니다. 또한, 댓글과 좋아요 기능을 통해
    //       친구들과 소통할 수 있습니다.
    //     </div>
    //   ),
    //   role: (
    //     <ul className="flex flex-col gap-2">
    //       <li>캘린더 및 공휴일 표시 기능 구현</li>
    //       <li>친구 (검색, 신청, 조회, 삭제) 기능 구현</li>
    //       <li>댓글 및 좋아요 기능 구현</li>
    //       <li>일정 및 일기 CRUD 기능 구현</li>
    //     </ul>
    //   ),
    //   skills: [
    //     {
    //       svg: <ReactSVG className="size-5" />,
    //       name: 'React',
    //       bg: 'bg-[#61DAFB]',
    //     },
    //     {
    //       svg: <JavaScriptSVG className="size-5" />,
    //       name: 'JavaScript',
    //       bg: 'bg-[#F7DF1E]',
    //     },
    //     {
    //       svg: <ReactRouterSVG className="size-5" />,
    //       name: 'React Router',
    //       bg: 'bg-[#CA4245]',
    //     },
    //     {
    //       svg: <StyledComponentsSVG className="size-5" />,
    //       name: 'Styled-components',
    //       bg: 'bg-[#DB7093]',
    //     },
    //     {
    //       svg: <AxiosSVG className="size-5" />,
    //       name: 'Axios',
    //       bg: 'bg-[#5A29E4]',
    //     },
    //     {
    //       svg: <VercelSVG className="size-5" />,
    //       name: 'Vercel',
    //       bg: 'bg-[#000000]',
    //     },
    //   ],
    // },
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
                {developmentProcess && (
                  <Link
                    className="hover:text-dark-text"
                    href={developmentProcess}
                  >
                    Detail
                  </Link>
                )}
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
              <h4>2.배운 점</h4>
              {role}
              <h4>3.사용 기술</h4>
              <ul className="mb-8 flex flex-wrap gap-2 text-white">
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
              {developmentProcess && (
                <Link
                  href={developmentProcess}
                  className="mb-8 underline underline-offset-4 hover:text-dark-text"
                >
                  {title} 프로젝트 내용 자세히 보러 가기
                </Link>
              )}
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

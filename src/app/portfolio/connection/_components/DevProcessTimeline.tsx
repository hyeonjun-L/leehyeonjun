import getPlaceholderImage from '@/utils/dynamicBlurDataUrl';
import GifContainer from './GifContainer';
import { Fragment } from 'react';

const DevProcessTimeline = async () => {
  const PROCESS_TIME_LINE = [
    {
      mainTitle: '검색',
      details: [
        {
          title: '검색 필터 및 검색 페이지',
          image: {
            pc: await getPlaceholderImage('/images/connection/search/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/search/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
          troubleshooting: '뒤로가기 진행 시 보던 곳으로 이동 & 캐싱 문제',
        },
      ],
    },
    {
      mainTitle: '리뷰',
      details: [
        {
          title: '수강생 및 강사 리뷰 관리 페이지',
          image: {
            pc: await getPlaceholderImage('/images/connection/review/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/review/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '좋아요 및 차단',
      details: [
        {
          title: '강사 & 클래스',
          image: {
            pc: await getPlaceholderImage('/images/connection/like/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/like/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
          troubleshooting: '좋아요 봤던 거 다시 들어가면 좋아요 안된거 처리',
        },
      ],
    },
    {
      mainTitle: '회원 관리',
      details: [
        {
          title: '클래스 수강 회원 관리',
          image: {
            pc: await getPlaceholderImage('/images/connection/member/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/member/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '내 정보',
      details: [
        {
          title: '내 정보 수정 페이지',
          image: {
            pc: await getPlaceholderImage('/images/connection/myInfo/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/myInfo/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '네이버 api',
      details: [
        {
          title: '네이버 지도 공통 컴포넌트 구현',
          image: {
            pc: await getPlaceholderImage('/images/connection/map/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/map/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
        {
          title: '네이버 소셜 로그인 구현',
          image: {
            pc: await getPlaceholderImage('/images/connection/login/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/login/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '실시간 채팅 및 알림',
      details: [
        {
          title: '채팅',
          image: {
            pc: await getPlaceholderImage('/images/connection/chat/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/chat/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
        {
          title: '알림',
          image: {
            pc: await getPlaceholderImage(
              '/images/connection/notifications/pc.gif',
            ),
            mobile: await getPlaceholderImage(
              '/images/connection/notifications/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '클래스',
      details: [
        {
          title: '등록 페이지',
          image: {
            pc: await getPlaceholderImage(
              '/images/connection/class_register/pc.gif',
            ),
            mobile: await getPlaceholderImage(
              '/images/connection/class_register/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
          troubleshooting: '각 섹션의 크기를 줄이기 위한 dynamic 처리?',
        },
      ],
    },
    {
      mainTitle: 'PWA 및 FCM 연결',
      details: [
        {
          title: 'PWA 연결 및 설치 방법 페이지',
          image: {
            pc: await getPlaceholderImage('/images/connection/PWA/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/PWA/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
        {
          title: 'FCM 연결 및 웹 푸쉬 알림 구현',
          image: {
            pc: await getPlaceholderImage('/images/connection/FCM/pc.gif'),
            mobile: await getPlaceholderImage(
              '/images/connection/FCM/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
    {
      mainTitle: '강사',
      details: [
        {
          title: '등록 페이지',
          image: {
            pc: await getPlaceholderImage(
              '/images/connection/instructor_register/pc.gif',
            ),
            mobile: await getPlaceholderImage(
              '/images/connection/instructor_register/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
        {
          title: '상세 페이지',
          image: {
            pc: await getPlaceholderImage(
              '/images/connection/instructor_detail/pc.gif',
            ),
            mobile: await getPlaceholderImage(
              '/images/connection/instructor_detail/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
          troubleshooting: '동적 메타 데이터 생성 2번 api 요청',
        },
        {
          title: '수정 페이지',
          image: {
            pc: await getPlaceholderImage(
              '/images/connection/instructor_edit/pc.gif',
            ),
            mobile: await getPlaceholderImage(
              '/images/connection/instructor_edit/mobile.gif',
            ),
          },
          explanation: (
            <ul>
              <li>ssss</li>
            </ul>
          ),
        },
      ],
    },
  ];

  return (
    <section>
      <h2 className="mb-4 text-4xl font-semibold">개발 과정</h2>
      {PROCESS_TIME_LINE.map(({ mainTitle, details }) => (
        <div
          key={mainTitle}
          className="mb-4 border-l border-solid border-dark-disabled pl-2"
        >
          <h3 className="mb-2 pb-2 text-3xl ">{mainTitle}</h3>
          {details.map(({ title, image, explanation }) => (
            <Fragment key={title}>
              <div className="relative mb-4 border-t border-solid pt-4 dark:border-dark-menu-hover">
                <h4 className="mb-2 text-2xl">{title}</h4>
                <GifContainer pc={image.pc} mobile={image.mobile} title={title}>
                  {explanation}
                </GifContainer>
              </div>
              <h5>트러블 슈팅</h5>
            </Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default DevProcessTimeline;

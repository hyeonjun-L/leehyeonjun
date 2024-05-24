import getPlaceholderImage from '@/utils/dynamicBlurDataUrl';
import GifContainer from './GifContainer';

const DevProcessTimeline = async () => {
  const PROCESS_TIME_LINE = [
    {
      mainTitle: '강사',
      details: [
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
          className="border-l border-solid border-dark-disabled pl-2"
        >
          <h3 className="mb-2 border-b border-solid pb-2 text-3xl dark:border-dark-menu-hover">
            {mainTitle}
          </h3>
          {details.map(({ title, image }) => (
            <div key={title} className="relative">
              <h4 className="mb-2 text-2xl">상세 페이지</h4>
              <GifContainer
                pc={image.pc}
                mobile={image.mobile}
                title="상세 페이지"
              >
                상세 페이지 내용 작성
              </GifContainer>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default DevProcessTimeline;

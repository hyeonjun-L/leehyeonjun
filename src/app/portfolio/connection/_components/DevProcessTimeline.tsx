import GifContainer from './GifContainer';

const DevProcessTimeline = () => {
  return (
    <section>
      <h2 className="mb-4 text-4xl font-semibold">개발 과정</h2>
      <div className="border-l border-solid border-dark-disabled pl-2">
        <h3 className="mb-2 border-b border-solid pb-2 text-3xl dark:border-dark-menu-hover">
          강사
        </h3>
        <div className="relative">
          <h4 className="mb-2 text-2xl">상세 페이지</h4>
          <GifContainer title="상세 페이지">상세 페이지 내용 작성</GifContainer>
        </div>
      </div>
    </section>
  );
};

export default DevProcessTimeline;

import GifContainer from './GifContainer';

const DevProcessTimeline = () => {
  return (
    <section>
      <h2 className="mb-4 text-4xl font-semibold">개발 과정</h2>
      <div className="border-l border-solid border-dark-disabled pl-2">
        <h3 className="mb-2 border-b border-solid border-dark-menu-hover pb-2 text-3xl">
          강사
        </h3>
        <div className="relative">
          <h4 className="mb-2 text-2xl">상세 페이지</h4>
          <GifContainer>
            허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허허
          </GifContainer>
        </div>
      </div>
    </section>
  );
};

export default DevProcessTimeline;
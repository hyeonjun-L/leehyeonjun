import { logo } from '@/images/connection';
import Explanation from '../_components/Explanation';

const page = () => {
  const explanation = {
    title: 'Connection',
    personnel: 'FE: 2명, BE: 2명, Designer: 1명',
    period: '( 2023.09 ~ 진행중 )',
    webSite: 'https://connection-frontend.vercel.app',
    github: 'https://github.com/connection-2023/frontend',
    logo,
  };

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
      <section>
        <h2 className="text-4xl font-semibold">사용 기술</h2>
      </section>
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
    </div>
  );
};

export default page;

// prose 표는 min-content가 본문 폭을 넘으면 페이지 전체를 가로로 밀어낸다.
// 표만 제 안에서 스크롤하도록 감싸고, 세로 여백은 래퍼로 옮긴다
// (overflow-x가 BFC를 만들어 표의 margin이 바깥과 상쇄되지 않기 때문).
const ProseTable = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'table'>) => (
  <div className="my-8 overflow-x-auto">
    <table className="my-0" {...props}>
      {children}
    </table>
  </div>
);

export default ProseTable;

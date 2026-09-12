const ProseTable = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'table'>) => (
  <div className="my-8 overflow-x-auto">
    <table className="my-0 min-w-[30rem]" {...props}>
      {children}
    </table>
  </div>
);

export default ProseTable;

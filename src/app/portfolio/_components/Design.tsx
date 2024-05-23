interface DesignProps {
  link: string;
}

const Design = ({ link }: DesignProps) => {
  return (
    <section>
      <h2 className="mb-4 text-4xl font-semibold">디자인</h2>
      <iframe className="h-[28.125rem] w-full" src={link} />
    </section>
  );
};

export default Design;

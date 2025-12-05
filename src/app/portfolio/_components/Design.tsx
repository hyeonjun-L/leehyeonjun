interface DesignProps {
  title?: string;
  link: string;
}

const Design = ({ link, title = '디자인' }: DesignProps) => {
  return (
    <section>
      <h2 className="mb-4 text-4xl font-semibold">{title}</h2>
      <iframe className="h-[28.125rem] w-full" src={link} />
    </section>
  );
};

export default Design;

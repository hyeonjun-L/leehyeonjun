interface SkillProps {
  skillList: {
    svg: JSX.Element;
    name: string;
    bg: string;
    explanation: string;
  }[];
}

const Skill = ({ skillList }: SkillProps) => {
  return (
    <section>
      <h2 className="mb-4 text-4xl font-semibold">사용 기술</h2>
      <dl>
        {skillList.map(({ svg, name, bg, explanation }) => (
          <div key={name} className="mb-4 flex items-center gap-4">
            <dt
              className={`flex items-center gap-2 ${bg} whitespace-nowrap p-1`}
            >
              {svg} {name}
            </dt>
            <dd className="border-l border-solid border-dark-disabled pl-4">
              {explanation}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Skill;

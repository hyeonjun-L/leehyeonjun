import Link from 'next/link';

const ReferenceList = ({ references }: { references: string[] }) => {
  return (
    <>
      <h2>참고</h2>
      <ul>
        {references.map((reference) => (
          <li key={reference}>
            <Link href={reference} target="_blank" className="break-words">
              {reference}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReferenceList;

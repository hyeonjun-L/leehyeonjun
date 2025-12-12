import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ExplanationProps {
  title: string;
  logo?: StaticImageData;
  personnel: string;
  period: string;
  webSite: string;
  github: string;
  children: ReactNode;
  isOperating: boolean;
}

const Explanation = ({
  title,
  personnel,
  period,
  webSite,
  github,
  children,
  logo,
  isOperating,
}: ExplanationProps) => {
  return (
    <section className="flex flex-col gap-3">
      {logo && (
        <Image
          src={logo}
          priority
          alt="logo Image"
          className="max-w-32 bg-white p-2"
        />
      )}
      <h1 className="text-5xl font-bold">{title}</h1>
      <div className="flex flex-wrap justify-between text-white">
        <div className="flex flex-wrap gap-2">
          <p>{personnel}</p>
          <p>{period}</p>
          {!isOperating && <p>*운영종료</p>}
        </div>
        <div className="mt-2 flex gap-4 sm:mt-0 [&>a]:underline [&>a]:underline-offset-4">
          <Link href={webSite} target="_blank" className="hover:text-dark-text">
            WebSite
          </Link>
          <Link href={github} target="_blank" className="hover:text-dark-text">
            GitHub
          </Link>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Explanation;

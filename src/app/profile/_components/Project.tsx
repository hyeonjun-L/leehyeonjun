import Image from 'next/image';
import Link from 'next/link';
import connectionImage from '@/images/connection/connection_main.png';

const Project = () => {
  const PROJECT = [
    {
      title: 'Connection',
      explanation: '댄서와 수강생 매칭 서비스',
      period: '2023.09 ~',
      image: connectionImage,
      imageAlt: '커넥션',
      webSite: 'https://connection-frontend.vercel.app',
      github: 'https://github.com/connection-2023/frontend',
      developmentProcess: '/',
      role: <div>역할은 어쩌구~</div>,
      skill: <div>스킬은 어쩌구~</div>,
      experience: <div>경험은 어쩌구~</div>,
    },
  ] as const;

  return (
    <section className="mt-14 flex flex-col gap-10 border-b border-solid border-dark-disabled">
      <h2 className="text-4xl font-semibold">프로젝트</h2>
      {PROJECT.map(
        ({
          title,
          explanation,
          period,
          image,
          imageAlt,
          webSite,
          github,
          developmentProcess,
          role,
          skill,
          experience,
        }) => (
          <div key={title} className="grid grid-cols-[1.4fr_2fr] gap-y-2">
            <div className="sticky top-0 mx-auto flex max-h-[25rem] flex-col">
              <h3 className="mb-4 text-3xl">{title}</h3>
              <p>{explanation}</p>
              <p>{period}</p>
              <div className="mt-3 flex items-center gap-4 [&>a]:underline [&>a]:underline-offset-4">
                <Link className="hover:text-dark-text" href={webSite}>
                  WebSite
                </Link>
                <Link className="hover:text-dark-text" href={github}>
                  GitHub
                </Link>
                <Link
                  className="hover:text-dark-text"
                  href={developmentProcess}
                >
                  개발과정
                </Link>
              </div>
              <Image src={image} alt={imageAlt} className="w-full max-w-96" />
            </div>
            <div className="h-screen border-l border-solid border-White-line px-8 dark:border-dark-line">
              <h4 className="text-xl">1.역할</h4>
              {role}
              <h4 className="text-xl">2.사용 기술</h4>
              {skill}
              <h4 className="text-xl">
                3.프로젝트를 진행하며 경험하고 체득한 부분
              </h4>
              {experience}
            </div>
          </div>
        ),
      )}
    </section>
  );
};

export default Project;

import Image from 'next/image';
import Link from 'next/link';
import { EmailSVG } from '@/icons/index';
import myImage from '@/images/이현준.jpg';

const AboutMe = () => {
  return (
    <section className="relative mt-14 flex flex-col-reverse gap-5 border-b border-solid border-dark-disabled sm:grid sm:grid-cols-[auto_1fr]">
      <Image
        src={myImage}
        alt="이현준"
        className="mb-5 size-56 animate-fadeInUp self-center rounded-md"
        priority={true}
      />
      <div className="mb-5 flex flex-col justify-center gap-2">
        <h1 className="mb-6 text-5xl font-semibold">이현준</h1>
        {/* <strong className="mb-6 text-lg">프론트엔드 개발자</strong> */}
        <p>
          현재 대한민국의 소방청, 서울, 제주도, 울산 소방본부에서 사용하는 GIS
          기반 재난신고 시스템을 개발했으며, 머신 비전 B2B 기업 웹사이트를
          기획부터 AWS 인프라 구축까지 end-to-end로 개발했다. Prompt-er Day
          Seoul 2023 해커톤에서 상위 8%로 진출했으며, 입사 1년 만에 업무 능력을
          인정받아 우수 사원으로 선정되었다.
        </p>
      </div>

      <dl className="absolute -bottom-6 right-0 mt-auto flex gap-2">
        <dt className="flex items-center gap-1">
          <EmailSVG className="size-4 fill-black dark:fill-white" />
          Email:
        </dt>
        <dd>
          <Link href="mailto:beeminor60@gmail.com">beeminor60@gmail.com</Link>
        </dd>
      </dl>
    </section>
  );
};

export default AboutMe;

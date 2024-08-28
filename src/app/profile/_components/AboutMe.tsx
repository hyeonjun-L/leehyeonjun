import Image from 'next/image';
import Link from 'next/link';
import { EmailSVG } from '@/icons/index';
import myImage from '@/images/profile.png';
import myDarkImage from '@/images/profile_dark.png';

const AboutMe = ({ theme }: { theme: string }) => {
  return (
    <section className="relative grid border-b border-solid border-dark-disabled sm:grid-cols-2">
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-5xl font-semibold">이현준</h1>
        <strong className="mb-6 text-lg">프론트엔드 개발자</strong>
        <p>
          안녕하세요, 머신비전 업계에서 근무하며 현장에서의 광학 조건 계산의
          불편함과 시간 소요 문제를 해결하기 위해 광학용 계산기 어플리케이션을
          자체적으로 개발 했습니다.
          <br /> <br />
          이를 통해 업무 효율성을 크게 향상 시키고, 동료들에게도 유용하게
          사용되는 모습을 보며 개발의 즐거움을 느꼈습니다. 이 경험을 통해 일상의
          불편함을 개선하는 개발자의 역할과 가치를 더욱 높게 평가하게
          되었습니다.
          {/* 고,
          이에 프론트엔드 개발자로서의 길을 걷게 되었 */}
        </p>
      </div>
      <Image
        src={theme === 'Dark' ? myDarkImage : myImage}
        alt="이현준"
        className="size-full animate-fadeInUp rounded-md"
        priority={true}
      />
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

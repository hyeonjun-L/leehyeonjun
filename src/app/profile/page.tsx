import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { EmailSVG } from '@/icons/index';
import connectionImage from '@/images/connection/connection_main.png';
import myImage from '@/images/profile.png';
import myDarkImage from '@/images/profile_dark.png';

const page = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value ?? 'Dark';

  return (
    <>
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
            사용되는 모습을 보며 개발의 즐거움을 느꼈습니다. 이 경험을 통해
            일상의 불편함을 개선하는 개발자의 역할과 가치를 더욱 높게 평가하게
            되었고, 이에 프론트엔드 개발자로서의 길을 걷게 되었습니다.
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
      <section className="mt-14 flex flex-col gap-10 border-b border-solid border-dark-disabled">
        <h2 className="text-4xl font-semibold">프로젝트</h2>
        <div className="grid grid-cols-[1.4fr_2fr]">
          <div className="sticky top-0 mx-auto flex max-h-[25rem] flex-col">
            <h3 className="mb-4 text-3xl">Connection</h3>
            <p>댄서와 수강생 매칭 서비스</p>
            <p>2023.09 ~</p>
            <div className="mt-3 flex items-center gap-4 [&>a]:underline [&>a]:underline-offset-4">
              <Link
                className="hover:text-dark-text"
                href="https://connection-frontend.vercel.app"
              >
                WebSite
              </Link>
              <Link
                className="hover:text-dark-text"
                href="https://github.com/connection-2023/frontend"
              >
                GitHub
              </Link>
              <Link className="hover:text-dark-text" href="/">
                개발과정
              </Link>
            </div>
            <Image
              src={connectionImage}
              alt="커넥션"
              className="w-full max-w-96"
            />
          </div>
          <div className="h-screen border-l border-solid border-White-line px-8 dark:border-dark-line">
            <h4 className="text-xl">1.역할</h4>
            <h4 className="text-xl">2.사용 기술</h4>
            <h4 className="text-xl">
              3.프로젝트를 진행하며 경험하고 체득한 부분
            </h4>
          </div>
        </div>
      </section>
      <section className="mt-14 flex flex-col gap-10">
        <h2 className="text-4xl font-semibold">경력</h2>
        <div className="grid grid-cols-[1fr_2fr] gap-y-10">
          <div className="[&>p]:text-sm">
            <h3 className="mb-4 text-2xl">이엑스테크놀로지</h3>
            <p>2021.06 ~ 2022.03</p>
            <p>부서명: 기술부</p>
            <p>직책: 연구원</p>
          </div>
          <ul className="flex list-disc flex-col gap-4">
            <li>
              시스템 설계 및 구현: 고객의 요구 사항에 맞춰 적절한 머신비전
              시스템을 설계하고, 이를 구현하는 업무진행
            </li>
            <li>
              교육 및 기술지원: 고객이나 사용자가 머신비전 시스템을 효과적으로
              사용할 수 있도록 교육 및 기술적 문제가 발생했을 때 지원
            </li>
            <li>
              유지보수 및 업그레이드: 설치된 머신비전 시스템의 정기적인
              유지보수를 수행하고, 검증되는 제품이 변경 될 경우 시스템
              업그레이드
            </li>
          </ul>
          <div className="[&>p]:text-sm">
            <h3 className="mb-4 text-2xl">화인스텍</h3>
            <p>2022.03 ~ 2022.09</p>
            <p>부서명: 기술연구소_시스템사업부</p>
            <p>직책: 사원</p>
          </div>
          <ul className="flex list-disc flex-col gap-4">
            <li>
              시스템 설계 및 구현: 시스템을 설계하고, 고객의 요구 사항에 맞춘
              맞춤형 솔루션을 제공하는 업무 진행
            </li>
            <li>
              기술지원: 기술적 문제가 발생했을 때 지원, 고객의 운영 환경에
              최적화된 솔루션을 제공하여 문제 해결
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;

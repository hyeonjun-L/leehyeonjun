import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-dark-menu-text py-6 text-sm dark:bg-dark-anchor-bg">
      <nav className="mb-3 flex flex-wrap gap-3">
        <p>사이트 맵</p>
        <span className="h-full border border-solid border-dark-line" />
        <Link href="/">홈</Link>
        <Link href="/profile">프로필</Link>
        <Link href="/portfolio">포트폴리오</Link>
        {/* <Link href="/blog">블로그</Link> */}
      </nav>
      <p>
        ⓒ 2024{' '}
        <Link href="https://github.com/hyeonjun-L" target="_blank">
          이현준
        </Link>{' '}
        All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-x-3">
        <p>
          Created by <Link href="https://leehyeonjun.com/">@이현준</Link>.
        </p>
        <p>
          Powered By{' '}
          <Link
            href="https://github.com/hyeonjun-L/leehyeonjun"
            target="_blank"
          >
            @이현준
          </Link>
          .
        </p>
        <p>
          Icons by{' '}
          <Link href="https://icons8.kr/license" target="_blank">
            Icons8
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-dark-anchor-bg py-6 text-sm">
      <nav className="mb-3 flex gap-3">
        <p>사이트 맵</p>
        <span className="h-full border border-solid border-dark-line" />
        <Link href="/">홈</Link>
        <Link href="/profile">프로필</Link>
        <Link href="/portfolio">포트폴리오</Link>
        <Link href="/blog">블로그</Link>
      </nav>
      <p>
        ⓒ 2024 <Link href="https://github.com/hyeonjun-L">이현준</Link> All
        rights reserved.
      </p>
      <p>
        Created by <Link href="https://leehyeonjun.com/">@이현준</Link>. Powered
        By <Link href="https://github.com/hyeonjun-L/leehyeonjun">@이현준</Link>
        . Icons by <Link href="https://icons8.kr/license">Icons8</Link>
      </p>
    </footer>
  );
};

export default Footer;

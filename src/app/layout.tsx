import './styles/globals.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';

const consola = localFont({
  src: './fonts/CONSOLA.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'duckoo',
  description: 'duckoo의 블로그',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;

  return (
    <html
      lang="kr"
      className={!theme || theme === 'dark' ? 'dark text-white' : ''}
    >
      <body className={`${consola.className} h-dvh w-screen`}>{children}</body>
    </html>
  );
}

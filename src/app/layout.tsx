import './styles/globals.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import ExplorerNav from './_components/ExplorerNav';
import type { Metadata } from 'next';
import ActivityNav from '@/app/_components/ActivityNav';

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
      <body className={`${consola.className} flex h-dvh w-screen`}>
        <ActivityNav />
        <ExplorerNav />
        <main className="dark:bg-dark-100 h-full w-full bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}

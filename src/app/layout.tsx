import './styles/globals.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import AnchorNav from './_components/AnchorNav';
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
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
      </head>
      <body
        className={`${consola.className} flex h-dvh flex-col bg-white sm:flex-row dark:bg-dark-body`}
      >
        <ActivityNav />
        <AnchorNav />
        <main className="flex size-full flex-grow flex-col overflow-auto p-4 sm:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}

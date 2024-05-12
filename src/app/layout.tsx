import './styles/globals.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import ActivityNav from '@/app/_components/ActivityNav';
import AnchorNav from './_components/AnchorNav';
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
  settingModal,
}: {
  children: React.ReactNode;
  settingModal: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value ?? 'Dark';

  return (
    <html lang="kr" className={theme === 'Dark' ? 'dark text-dark-text' : ''}>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
      </head>
      <body
        className={`${consola.className} flex h-dvh flex-col bg-white sm:flex-row dark:bg-dark-body `}
      >
        <ActivityNav />
        <AnchorNav />
        <main className="flex size-full flex-grow flex-col overflow-auto p-4 sm:p-8">
          <div className="m-auto max-w-6xl">
            {children}
            {settingModal}
          </div>
        </main>
      </body>
    </html>
  );
}

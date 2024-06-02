import './styles/globals.css';
import './styles/carousel.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import ActivityNav from '@/app/_components/ActivityNav';
import AnchorNav from './_components/AnchorNav';
import AnchorNavButton from './_components/AnchorNavButton';
import RouterNav from './_components/RouterNav';
import WebVitals from './_components/WebVitals';
import { AnchorViewProvider } from './Provider';
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
    <html
      lang="kr"
      className={
        theme === 'Dark' ? 'theme-light dark text-dark-text' : 'theme-dark'
      }
    >
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
      </head>
      <AnchorViewProvider>
        <body
          className={`${consola.className} relative flex h-dvh flex-col bg-white sm:flex-row dark:bg-dark-body `}
        >
          <ActivityNav />
          <AnchorNav />
          <main className="flex size-full flex-grow flex-col overflow-auto">
            <RouterNav />
            {children}
            {settingModal}
          </main>
          <AnchorNavButton />
          {process.env.NODE_ENV === 'development' && <WebVitals />}
        </body>
      </AnchorViewProvider>
    </html>
  );
}

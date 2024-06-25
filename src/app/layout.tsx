import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import './styles/globals.css';
import './styles/carousel.css';
import localFont from 'next/font/local';
import { cookies } from 'next/headers';
import ActivityNav from '@/app/_components/ActivityNav';
import AnchorNav from './_components/AnchorNav';
import AnchorNavButton from './_components/AnchorNavButton';
import Audio from './_components/Audio';
import ConsoleLog from './_components/ConsoleLog';
import Footer from './_components/Footer';
import NprogressBarProvider from './_components/ProgressbarProvider';
import RouterNav from './_components/RouterNav';
import WebVitals from './_components/WebVitals';
import { ContextProvider } from './Provider';
import type { Metadata } from 'next';

const consola = localFont({
  src: './fonts/CONSOLA.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '이현준',
  description: '이현준 홈페이지',
  keywords: [
    '이현준',
    '프로필',
    '포트폴리오',
    '블로그',
    '프론트엔드',
    '개발자',
  ],
  authors: [{ name: '이현준' }],
  publisher: '이현준',
  referrer: 'origin-when-cross-origin',
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
        <meta
          name="naver-site-verification"
          content="b9297bed53014d32edd615ee741712e2f9846cd3"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        />
      </head>
      {process.env.NODE_ENV !== 'development' && <ConsoleLog />}
      <ContextProvider>
        <body
          className={`${consola.className} relative flex h-dvh flex-col bg-white sm:flex-row dark:bg-dark-body `}
        >
          <NprogressBarProvider>
            <ActivityNav />
            <AnchorNav />
            <main className="flex size-full flex-grow flex-col overflow-auto">
              <RouterNav />
              {children}
              {settingModal}
              <Footer />
              <Audio />
            </main>
            <AnchorNavButton />
            {process.env.NODE_ENV === 'development' && <WebVitals />}
          </NprogressBarProvider>
        </body>
      </ContextProvider>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}

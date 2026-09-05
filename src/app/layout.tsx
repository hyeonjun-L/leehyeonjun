import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import './styles/globals.css';
import './styles/carousel.css';
import localFont from 'next/font/local';
import ActivityNav from '@/app/_components/ActivityNav';
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  ogImageUrl,
} from '@/constants/site';
import AnchorNav from './_components/AnchorNav';
import AnchorNavButton from './_components/AnchorNavButton';
import Audio from './_components/Audio';
import ConsoleLog from './_components/ConsoleLog';
import Footer from './_components/Footer';
import JsonLd from './_components/JsonLd';
import NprogressBarProvider from './_components/ProgressbarProvider';
import RouterNav from './_components/RouterNav';
import WebVitals from './_components/WebVitals';
import { DEFAULT_THEME, THEME_CLASS, THEME_INIT_SCRIPT } from './_lib/theme';
import { ContextProvider } from './Provider';
import type { Metadata } from 'next';

const consola = localFont({
  src: './fonts/CONSOLA.ttf',
  display: 'swap',
  variable: '--font-consola',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: '%s',
  },
  description: SITE_DESCRIPTION,
  keywords: ['이현준', '개발자', '블로그', 'GIS', '지도', '웹개발'],
  authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
  creator: SITE_AUTHOR,
  publisher: SITE_AUTHOR,
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [
        { url: '/feed.xml', title: `${SITE_NAME} 블로그 RSS` },
      ],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: ogImageUrl({ title: SITE_NAME, category: '블로그' }),
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [ogImageUrl({ title: SITE_NAME, category: '블로그' })],
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_AUTHOR,
      url: SITE_URL,
      jobTitle: '웹 개발자',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: 'ko-KR',
      publisher: { '@id': `${SITE_URL}/#person` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
  settingModal,
}: {
  children: React.ReactNode;
  settingModal: React.ReactNode;
}) {
  return (
    // 아래 스크립트가 className을 고쳐 서버와 달라지므로 경고를 덮는다.
    <html
      lang="ko"
      className={THEME_CLASS[DEFAULT_THEME]}
      suppressHydrationWarning
    >
      <head>
        {/* 인라인 스크립트는 파서를 멈추고 그 자리에서 실행된다 → <body> 파싱 전에
            클래스가 확정돼 깜빡임이 없다. next/script beforeInteractive는 첫 페인트
            뒤에 실행되고 type="module"은 defer가 되니, 둘 다 쓰면 안 된다. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <meta
          name="naver-site-verification"
          content="b9297bed53014d32edd615ee741712e2f9846cd3"
        />
        <JsonLd data={websiteJsonLd} />
      </head>
      {process.env.NODE_ENV !== 'development' && <ConsoleLog />}
      <ContextProvider>
        <body
          className={`${consola.className} ${consola.variable} relative flex h-dvh flex-col bg-white sm:flex-row dark:bg-dark-body `}
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

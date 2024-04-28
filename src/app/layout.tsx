import './styles/globals.css';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

const consola = localFont({
  src: './fonts/CONSOLA.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={consola.className}>{children}</body>
    </html>
  );
}

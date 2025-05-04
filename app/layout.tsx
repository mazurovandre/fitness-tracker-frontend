import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Provider from './components/Provider';
import { Header } from './components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fitness Tracker',
  description: 'Track your workouts and progress',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body
        className={`font-[family-name:var(--font-geist-sans)] ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Provider>
          <Header />
          <main className='flex-1 container mx-auto px-4 py-6 sm:px-6 lg:px-8'>{children}</main>
        </Provider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
  title: '모두다블럭',
  description: '쉽고 간편하게 함께 즐기는 단체 게임으로 신나는 시간을 만들어보자!',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    url: 'https://www.zeround.com',
    title: '모두다블럭',
    description: '쉽고 간편하게 함께 즐기는 단체 게임으로 신나는 시간을 만들어보자!',
    images: [
      {
        url: '/images/카카오톡공유썸네일.png',
        width: 400,
        height: 210,
        alt: '모두다블럭',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#FFF8EC] custom-cursor">
      <Head>
        {/* Google AdSense 스크립트 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2998824044846392"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}

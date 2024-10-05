import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '모두다블럭',
  description: '술자리게임,단체게임,게임,예능게임,게임사이트,예능게임사이트',
};

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#FFF8EC] custom-cursor">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2998824044846392"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

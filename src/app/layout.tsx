import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '간단 심리테스트',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="max-w-96 mx-auto">
      <body className="bg-orange-50 px-4 py-2">{children}</body>
    </html>
  );
}

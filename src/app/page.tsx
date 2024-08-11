import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <Link href="/test">테스트 하러 가기</Link>
    </main>
  );
}

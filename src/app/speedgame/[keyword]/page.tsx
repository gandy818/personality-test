// 무조건 서버 사이드
import SpeedgameComponent from '@/components/speedgame/SpeedgameComponent';
import Link from 'next/link';

// 빌드를 위한 경로 미리 설정
export async function generateStaticParams() {
  const keywords = [
    'fruit',
    'singer',
    'brand',
    'snack',
    'animal',
    'movie',
    'country',
    'color',
    'job',
    'sport',
    'food',
    'carBrand',
  ];

  return keywords.map((keyword) => ({
    keyword, // 각 keyword 값을 반환
  }));
}

export default function speedgameKeywordPage() {
  return (
    <div>
      {/* 헤더 */}
      <header className="h-[6.25rem] relative py-[1.625rem] border-b border-[#9879451a]">
        <Link href={'/'} className="absolute ">
          <img src="/images/뒤로가기.svg" alt="logo" className="pl-5 sm:pl-[7.5rem]" />
        </Link>
        <div className="flex-center gap-[477px] h-12">
          <Link href="/" className="w-fit flex-center">
            <img src="/images/로고.svg" alt="logo" />
          </Link>
        </div>
      </header>

      <SpeedgameComponent />
    </div>
  );
}

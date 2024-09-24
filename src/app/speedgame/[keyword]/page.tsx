import Link from 'next/link';

export async function generateStaticParams() {
  const keywords = ['snack', 'example2', 'example3']; // 실제 데이터베이스나 API 호출을 통해 keyword 목록을 가져올 수 있습니다.

  return keywords.map((keyword) => ({
    keyword, // 각 keyword 값을 반환
  }));
}

export default function speedgameKeywordPage() {
  return (
    <div>
      {/* 헤더 */}
      <header className="h-[6.25rem]">
        <Link href="/">
          <img src="/images/로고.svg" alt="logo" className="py-[1.875rem] pl-[7.5rem]" />
        </Link>
      </header>

      {/* 타이머 */}
      <div className="mx-auto bg-red-100 flex-center rounded-full w-10 h-10">
        <div className="font-semibold">60</div>
      </div>

      <div className="text-center font-bold my-32 text-[8rem]">사과</div>
      <div className="flex mx-auto w-fit gap-4">
        <div className="btn">패스</div>
        <div className="btn">정답</div>
      </div>
    </div>
  );
}

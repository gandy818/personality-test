import Link from 'next/link';

export default function speedgamePage() {
  return (
    <div>
      {/* 헤더 */}
      <header className="h-[6.25rem] relative py-[1.625rem] border-b border-[#9879451a]">
        <Link href={'/'} className="absolute">
          <img src="/images/뒤로가기.svg" alt="logo" className="pl-[7.5rem]" />
        </Link>
        <div className="flex-center gap-[477px] h-12">
          <Link href="/" className="w-fit flex-center">
            <img src="/images/로고.svg" alt="logo" />
          </Link>
        </div>
      </header>

      {/* 타이틀 */}
      <h1 className="text-center mt-10 text-[4rem] font-black">스피드 게임</h1>
      <p className="mt-6 text-[#8F8F8F] text-[1.5rem] text-center">
        제한시간 1분 안에 최대한 많은 문제를 맞춰보세요!
      </p>

      {/* 목록 */}
      <div className="flex gap-14 flex-col mt-16">
        {/* 과자 */}
        <Link
          href="fruit"
          className="flex shadow-block justify-around self-center bg-[#9191FF] w-[45rem] h-[6.25rem] px-2 py-6 rounded-2xl text-white text-[2.5rem] font-bold text-center"
        >
          <img src="/images/블럭동그라미.svg" alt="blockImg" />
          과일
          <img src="/images/블럭동그라미.svg" alt="blockImg" />
        </Link>

        {/* 가수 */}
        <Link
          href="/"
          className="flex shadow-block justify-around self-center bg-[#9191FF] w-[45rem] h-[6.25rem] px-2 py-6 rounded-2xl text-white text-[2.5rem] font-bold text-center"
        >
          <img src="/images/블럭동그라미.svg" alt="blockImg" />
          가수
          <img src="/images/블럭동그라미.svg" alt="blockImg" />
        </Link>

        {/* 브랜드 */}
        <Link
          href="/"
          className="flex shadow-block justify-around self-center bg-[#9191FF] w-[45rem] h-[6.25rem] px-2 py-6 rounded-2xl text-white text-[2.5rem] font-bold text-center"
        >
          <img src="/images/블럭동그라미.svg" alt="blockImg" />
          브랜드
          <img src="/images/블럭동그라미.svg" alt="blockImg" />
        </Link>
      </div>
    </div>
  );
}

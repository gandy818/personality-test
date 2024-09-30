import Link from 'next/link';

export default function speedgamePage() {
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

      {/* 타이틀 */}
      <h1 className="text-center mt-10 text-[32px] xs:text-[64px] font-black">스피드 게임</h1>
      <p className="mt-6 text-[#8F8F8F] text-base font-normal xs:text-2xl text-center">
        제한시간 1분 안에 최대한 많은 문제를 맞춰보세요!
      </p>

      {/* 목록 */}
      <div className="flex gap-6 xs:gap-14 flex-col my-16 px-5">
        {/* 과자 */}
        <Link
          href="fruit"
          className="btn flex shadow-block justify-around self-center bg-[#9191FF] border-none hover:bg-[#9191FF] w-full md:w-[45rem] h-16 xs:h-[6.25rem] px-2 rounded-2xl text-white text-[32px] xs:text-[40px] font-bold text-center"
        >
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8 h-8" />
          과일
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8" />
        </Link>

        {/* 가수 */}
        <Link
          href="singer"
          className="btn flex shadow-block justify-around self-center bg-[#9191FF] hover:bg-[#9191FF] border-none w-full md:w-[45rem] h-16 xs:h-[6.25rem] px-2 rounded-2xl text-white text-[32px] xs:text-[40px] font-bold text-center"
        >
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8" />
          가수
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8" />
        </Link>

        {/* 브랜드 */}
        <Link
          href="brand"
          className="btn hover:bg-[#9191FF] border-none flex shadow-block justify-around self-center bg-[#9191FF] w-full md:w-[45rem] h-16 xs:h-[6.25rem] px-2 rounded-2xl text-white text-[32px] xs:text-[40px] font-bold text-center"
        >
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8" />
          브랜드
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8" />
        </Link>

        {/* 과자 */}
        <Link
          href="snack"
          className="btn hover:bg-[#9191FF] border-none flex shadow-block justify-around self-center bg-[#9191FF] w-full md:w-[45rem] h-16 xs:h-[6.25rem] px-2 rounded-2xl text-white text-[32px] xs:text-[40px] font-bold text-center"
        >
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8" />
          과자
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8" />
        </Link>

        {/* 동물 */}
        <Link
          href="animal"
          className="btn hover:bg-[#9191FF] border-none flex shadow-block justify-around self-center bg-[#9191FF] w-full md:w-[45rem] h-16 xs:h-[6.25rem] px-2 rounded-2xl text-white text-[32px] xs:text-[40px] font-bold text-center"
        >
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8" />
          동물
          <img src="/images/블럭동그라미.svg" alt="blockImg" className="w-6 xs:w-8" />
        </Link>
      </div>
    </div>
  );
}

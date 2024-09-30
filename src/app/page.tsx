'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen relative">
      {/* 블럭 */}
      <>
        <img
          src="/images/블럭1.svg"
          alt="block1"
          className="absolute hidden xs:block right-24 top-72 -z-10"
        />
        <img
          src="/images/블럭2.svg"
          alt="block2"
          className="absolute hidden xs:block left-60 top-52 -z-10"
        />
        <img
          src="/images/블럭3.svg"
          alt="block3"
          className="absolute hidden xs:block left-28 bottom-52 -z-10"
        />
      </>

      {/* 헤더 */}
      <header className="h-[60px] xs:h-[100px] relative py-[1.625rem] border-b border-[#9879451a]">
        <div className="flex-center gap-[477px] xs:h-12">
          <Link href="/" className="w-fit flex-center">
            <img src="/images/로고.svg" alt="logo" className="w-24 xs:w-full" />
          </Link>
        </div>
      </header>

      {/* 타이틀 */}
      <h1 className="text-center text-base xs:text-[32px] font-medium mt-10">
        다 함께 친해져야 하는 지금
        <span className="xs:text-[54px] text-[32px] block font-black mt-2 xs:mt-7">
          모두 다 <span className="text-[#FF841F]">블럭!</span>
        </span>
      </h1>

      <div className="flex-center py-[5.25rem]">
        <div className="grid sm:grid-cols-2 grid-cols-1 w-fit gap-x-16 gap-y-12">
          {/* 스피드게임 */}
          <div className="relative">
            <div className="absolute bg-[#6867CE] -top-5 rounded left-10 w-10 h-10 -z-10" />
            <div className="absolute bg-[#6867CE] -top-5 rounded right-10 w-10 h-10 -z-10" />

            <div className="w-[14.25rem] h-[14.25rem] bg-[#7675FF] hover:bg-[#7675FF] px-[2.625rem] pt-16 text-center rounded-2xl">
              <h1 className="text-[1.5rem] text-white font-semibold h-16">스피드 게임</h1>
              <Link
                href="/speedgame"
                className="btn text-white bg-[#ffffff4d] hover:bg-[#ffffff4d] px-6 py-3 border-none rounded-lg text-base font-semibold mt-6"
              >
                둘러보기
              </Link>
            </div>
          </div>

          {/* 이어말하기 */}
          <div className="relative">
            <div className="absolute bg-[#E3622D] -top-5 rounded left-10 w-10 h-10 -z-10" />
            <div className="absolute bg-[#E3622D] -top-5 rounded right-10 w-10 h-10 -z-10" />

            <div className="w-[14.25rem] h-[14.25rem] bg-[#FF611F] hover:bg-[#FF611F] px-[2.625rem]  pt-16 text-center rounded-2xl">
              <h1 className="text-[1.5rem] text-white font-semibold h-16">이어말하기</h1>
              <Link
                href="/relayspeaking"
                className="btn text-white bg-[#ffffff4d] hover:bg-[#ffffff4d] px-6 py-3 border-none rounded-lg text-base font-semibold mt-6"
              >
                둘러보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

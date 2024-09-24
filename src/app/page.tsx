'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="h-screen relative">
      {/* 블럭 */}
      <>
        <img src="/images/블럭1.svg" alt="block1" className="absolute right-24 top-72 -z-10" />
        <img src="/images/블럭2.svg" alt="block2" className="absolute left-60 top-52 -z-10" />
        <img src="/images/블럭3.svg" alt="block3" className="absolute left-28 bottom-52 -z-10" />
      </>

      {/* 헤더 */}
      <header className="h-[6.25rem] relative py-[1.625rem] border-b border-[#9879451a]">
        <button onClick={() => router.back()} className="absolute">
          <img src="/images/뒤로가기.svg" alt="logo" className="pl-[7.5rem]" />
        </button>
        <div className="flex-center gap-[477px] h-12">
          <Link href="/" className="w-fit flex-center">
            <img src="/images/로고.svg" alt="logo" />
          </Link>
        </div>
      </header>

      {/* 타이틀 */}
      <h1 className="text-center text-[3rem] font-medium mt-10">
        다 함께 친해져야 하는 지금
        <span className="text-[4rem] block font-black">
          모두 다 <span className="text-[#FF841F]">블럭!</span>
        </span>
      </h1>

      <div className="flex-center mt-[5.25rem]">
        <div className="grid sm:grid-cols-2 grid-cols-1 w-fit gap-x-24 gap-y-14">
          {/* 스피드게임 */}
          <div className="relative">
            <div className="absolute bg-[#6867CE] -top-5 rounded left-10 w-10 h-10 -z-10" />
            <div className="absolute bg-[#6867CE] -top-5 rounded right-10 w-10 h-10 -z-10" />

            <div className="w-[15.25rem] h-[15.25rem] bg-[#7675FF] hover:bg-[#7675FF] px-[2.625rem] pt-16 text-center rounded-2xl">
              <h1 className="text-[1.75rem] text-white font-semibold h-16">스피드 게임</h1>
              <Link
                href="/speedgame"
                className="btn text-white bg-[#ffffff4d] hover:bg-[#ffffff4d] px-6 py-3 border-none rounded-lg text-lg font-semibold mt-6"
              >
                둘러보기
              </Link>
            </div>
          </div>

          {/* 이어말하기 */}
          <div className="relative">
            <div className="absolute bg-[#E3622D] -top-5 rounded left-10 w-10 h-10 -z-10" />
            <div className="absolute bg-[#E3622D] -top-5 rounded right-10 w-10 h-10 -z-10" />

            <div className="w-[15.25rem] h-[15.25rem] bg-[#FF611F] hover:bg-[#FF611F] px-[2.625rem]  pt-16 text-center rounded-2xl">
              <h1 className="text-[1.75rem] text-white font-semibold h-16">이어말하기</h1>
              <Link
                href="/speedgame"
                className="btn text-white bg-[#ffffff4d] hover:bg-[#ffffff4d] px-6 py-3 border-none rounded-lg text-lg font-semibold mt-6"
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

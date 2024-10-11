import Link from 'next/link';

// 빌드를 위한 경로 미리 설정
export async function generateStaticParams() {
  const keywords = ['proverb', 'idiom', 'dailyWord'];

  return keywords.map((keyword) => ({
    keyword, // 각 keyword 값을 반환
  }));
}

interface ParamsType {
  params: {
    keyword: string;
  };
}

export default function RelayspeakingDescription2Page({ params }: ParamsType) {
  const { keyword } = params;

  return (
    <div>
      {/* 헤더 */}
      <header className="h-[6.25rem] relative py-[1.625rem] border-b border-[#9879451a]">
        <Link href={'/relayspeaking'} className="absolute ">
          <img src="/images/뒤로가기.svg" alt="logo" className="pl-5 sm:pl-[7.5rem]" />
        </Link>
        <div className="flex-center gap-[477px] h-12">
          <Link href="/" className="w-fit flex-center">
            <img src="/images/로고.svg" alt="logo" />
          </Link>
        </div>
      </header>

      <div className="mt-10">
        <div className="relative sm:max-w-[720px] mx-auto hidden sm:block">
          {/* 왼쪽 말풍선 */}
          <div className="mt-28 flex-center flex-col left-1 absolute -top-32">
            <p className="bg-[#FF841F] py-6 px-[60px] text-white text-[40px] font-semibold w-fit rounded-full">
              고진
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
            >
              <path
                d="M20.4537 0H2.11092C0.875042 0 -0.068708 1.11378 0.210914 2.31761C4.00877 18.6682 17.5749 25.4425 28.8583 27.6464C31.0222 28.069 31.8 24.9569 30.0883 23.5674C22.3101 17.2531 21.4781 8.50408 22.5528 2.70227C22.8025 1.35394 21.825 0 20.4537 0Z"
                fill="#FF841F"
              />
            </svg>
          </div>

          {/* 사회자 이미지 */}
          <img src="/images/사회자.png" className="mx-auto" />

          {/* 오른쪽 말풍선 */}
          <div className="mt-28 flex-center flex-col absolute right-1 bottom-16">
            <p className="bg-[#FF841F] py-6 px-[60px] text-white text-[40px] font-semibold w-fit rounded-full">
              구사
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
            >
              <path
                d="M11.5463 0H29.8891C31.125 0 32.0687 1.11378 31.7891 2.31761C27.9912 18.6682 14.4251 25.4425 3.14168 27.6464C0.97785 28.069 0.199966 24.9569 1.91167 23.5674C9.6899 17.2531 10.5219 8.50408 9.44722 2.70227C9.19748 1.35394 10.175 0 11.5463 0Z"
                fill="#FF841F"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-28">
        {/* 설명 박스 */}
        <div className="px-5">
          <div className="flex flex-col gap-8 md:gap-4 text-center bg-white w-full lg:w-[820px] py-10 px-12 md:px-[69px] mx-auto border-[3px] rounded-2xl border-[#ff611f66]">
            <p className="w-16 h-16 mx-auto rounded-full bg-[#452F08] text-white flex-center text-[40px]">
              2
            </p>
            <h1 className="text-4xl xxs:text-[52px] font-semibold">진행자</h1>
            <p className="text-lg xxs:text-2xl text-[#1a1a1a] font-normal py-6 bg-[#F7F6F3] px-4 xxs:px-10">
              준비된 문장이나 단어를 참고하여 참가자에게 앞부분을 제시해요
            </p>
          </div>
        </div>

        <div className="mt-11">
          {/* 버튼들 */}
          <div className="flex mx-auto w-full sm:w-fit gap-6 px-5 mb-10">
            <Link
              href={`/relayspeaking/${keyword}/description`}
              className="btn bg-[#616161] hover:bg-[#616161] text-white rounded-2xl flex-1 sm:w-[290px] h-[64px] xs:h-[84px] shadow-block text-[32px]"
            >
              이전
            </Link>
            <Link
              href={`/relayspeaking/${keyword}/description3`}
              className="btn bg-[#AFE047] hover:bg-[#AFE047] text-[#3F4D23] rounded-2xl flex-1 sm:w-[290px] h-[64px] xs:h-[84px] shadow-block text-[32px]"
            >
              다음
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

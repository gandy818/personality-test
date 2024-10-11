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

export default function RelayspeakingDescriptionPage({ params }: ParamsType) {
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

      <div className="my-28">
        <div className="text-center bg-white w-[820px] p-16 mx-auto border-[5px] rounded-2xl border-[#FF841F]">
          <p className="w-16 h-16 mx-auto rounded-full bg-[#452F08] text-white flex-center text-[40px]">
            1
          </p>
          <h1 className="pt-12 text-[52px] font-semibold">게임설명</h1>
          <p className="pt-12 text-2xl text-[#1a1a1a] font-normal">
            제시하는 문장에 맞춰 뒷문장을 이어 말하는 게임
          </p>
        </div>

        <div className="w-fit mx-auto mt-11">
          <Link
            href={`/relayspeaking/${keyword}/description2`}
            className="btn bg-[#AFE047] hover:bg-[#AFE047] text-[#3F4D23] rounded-2xl flex-1 sm:w-[320px] h-[64px] xs:h-[84px] shadow-block text-[32px]"
          >
            다음
          </Link>
        </div>
      </div>
    </div>
  );
}

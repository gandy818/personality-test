'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { proverbList, idiomList, dailyWordList } from '@/dataList/relayspeaking';

interface SubjectMapType {
  question: string;
  answer: string;
}

// 주제에 따른 리스트 매핑
const subjectMap: { [key: string]: SubjectMapType[] } = {
  proverb: proverbList,
  idiom: idiomList,
  dailyWord: dailyWordList,
};

// 리스트 셔플 함수
const shuffleList = (list: SubjectMapType[]) => {
  return list.sort(() => Math.random() - 0.5);
};

export default function RelayspeakingComponent() {
  const pathParams = useParams();
  const subject = pathParams.keyword as string;
  const [shuffledList, setShuffledList] = useState<SubjectMapType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const subjectList = subjectMap[subject];

  useEffect(() => {
    // 컴포넌트가 마운트될 때 리스트를 섞음
    setShuffledList(shuffleList([...subjectList]));
  }, []);

  if (shuffledList.length === 0) return null;

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row mt-1 px-5 mx-auto w-full md:w-fit gap-6 ">
        {/* 진행자 */}
        <div>
          {/* 사회자 이미지 */}
          <div className="relative hidden md:block">
            <img src="/images/사회자.png" className="mx-auto" />
          </div>
          {/* 설명 박스 */}
          <div>
            <div className="text-center bg-white py-10 px-10 lg:px-[69px] mx-auto border-[3px] rounded-2xl border-[#ff611f66]">
              <h1 className="lg:pt-4 xxs:text-3xl md:text-[40px] font-semibold text-[#452F08]">
                진행자
              </h1>
              <p className="mt-4 xxs:text-[30px] md:text-[35px] lg:text-[40px] text-[#1a1a1a] font-semibold py-6 bg-[#F7F6F3] xxs:px-10 leading-[1.2]">
                {shuffledList[currentIndex].question}
              </p>
            </div>
          </div>
        </div>

        {/* 참여자 */}
        <div>
          {/* 참여자 이미지 */}
          <div className="relative hidden md:block">
            <img src="/images/참여자.png" className="mx-auto mt-3" />
          </div>
          {/* 설명 박스 */}
          <div>
            <div className="text-center bg-white py-10 px-10 lg:px-[69px] mx-auto border-[3px] rounded-2xl border-[#ff611f66]">
              <h1 className="lg:pt-4 xxs:text-3xl md:text-[40px] font-semibold text-[#452F08]">
                참여자
              </h1>
              <p className="mt-4 xxs:text-[30px] md:text-[35px] lg:text-[40px] text-[#1a1a1a] font-semibold py-6 bg-[#F7F6F3] xxs:px-10 leading-[1.2]">
                {shuffledList[currentIndex].answer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 버튼들 */}
      <div className="flex xs:mx-auto md:w-fit w-full gap-2 xs:gap-6 mt-10 px-5">
        <Link
          href={`/`}
          className="btn bg-[#616161] hover:bg-[#616161] rounded-2xl flex-1 w-full sm:w-[320px] h-[64px] xs:h-[84px] shadow-block"
        >
          <img src="/images/홈으로.svg" alt="홈으로" className="w-5 xs:w-8" />
          <p className="text-white xs:text-[30px] text-[20px]">홈으로</p>
        </Link>
        <button
          className="btn flex gap-2 bg-[#AFE047] hover:bg-[#AFE047]  rounded-2xl w-full flex-1 sm:w-[320px] h-[64px] xs:h-[84px] shadow-block"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledList.length)}
        >
          <p className="text-[#3F4D23] xs:text-[30px] xxs:text-[20px] text-[16px]">다음</p>
        </button>
      </div>
    </div>
  );
}

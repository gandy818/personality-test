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
      <div className="flex mt-[118px] mx-auto w-fit gap-6 ">
        {/* 진행자 */}
        <div>
          <div className="relative">
            {/* 사회자 이미지 */}
            <img src="/images/사회자.png" className="mx-auto " />
          </div>
          {/* 설명 박스 */}
          <div className="mb-28">
            <div className="text-center bg-white py-10 px-[69px] mx-auto border-[3px] rounded-2xl border-[#ff611f66]">
              <h1 className="pt-4 text-[40px] font-semibold text-[#452F08]">진행자</h1>
              <p className="mt-4 text-[40px] text-[#1a1a1a] font-semibold py-6 bg-[#F7F6F3] px-10">
                {shuffledList[currentIndex].question}
              </p>
            </div>
          </div>
        </div>
        {/* 참여자 */}
        <div>
          <div className="relative">
            {/* 참여자 이미지 */}
            <img src="/images/참여자.png" className="mx-auto mt-3" />
          </div>
          {/* 설명 박스 */}
          <div className="mb-28">
            <div className="text-center bg-white  py-10 px-[69px] mx-auto border-[3px] rounded-2xl border-[#ff611f66]">
              <h1 className="pt-4 text-[40px] font-semibold text-[#452F08]">참여자</h1>
              <p className="mt-4 text-[40px] text-[#1a1a1a] font-semibold py-6 bg-[#F7F6F3] px-10">
                {shuffledList[currentIndex].answer}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto mt-11 flex gap-6">
        <Link
          href={`/`}
          className="btn bg-[#616161] hover:bg-[#616161] text-white rounded-2xl flex-1 sm:w-[320px] h-[64px] xs:h-[84px] shadow-block text-[32px]"
        >
          홈으로
        </Link>
        <button
          className="btn bg-[#AFE047] hover:bg-[#AFE047] text-[#3F4D23] rounded-2xl flex-1 sm:w-[320px] h-[64px] xs:h-[84px] shadow-block text-[32px]"
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledList.length)}
        >
          다음
        </button>
      </div>
    </div>
  );
}

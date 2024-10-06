'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { proverbList, idiomList, dailyWordList } from '@/dataList/relayspeaking';

// 주제에 따른 리스트 매핑
const subjectMap: { [key: string]: string[] } = {
  proverb: proverbList,
  idiom: idiomList,
  dailyWord: dailyWordList,
};

export default function RelayspeakingComponent() {
  const [showRule, setShowRule] = useState(true);
  const pathParams = useParams();
  const subject = pathParams.keyword as string;

  const subjectList = subjectMap[subject];
  useEffect(() => {}, []);

  return (
    <>
      {showRule ? (
        <div>
          <h1 className="text-center mt-10 text-[32px] xs:text-[64px] font-black">이어 말하기</h1>

          <div className="text-center text-2xl mt-14">
            <p>진행자: 준비된 문장이나 단어를 참고하여 참가자에게 앞부분을 제시해요.</p>
            <p>참가자: 진행자가 제시한 문장이나 단어를 듣고, 이어질 뒷부분을 말해요</p>
          </div>

          <div className="w-3/4 mx-auto mt-10">
            <button onClick={() => setShowRule(false)} className="btn  w-full">
              문제 예시
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-3/4 mx-auto mt-10 h-[466px] overflow-y-scroll">
            {subjectList.map((sentence, index) => {
              return (
                <div
                  className=" my-2 p-2 bg-white rounded-xl border-2 border-[#98794533]"
                  key={index}
                >
                  <p>
                    {index + 1}. {sentence}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-3/4 mx-auto mt-10">
            <button onClick={() => setShowRule(true)} className="btn w-full">
              게임 설명
            </button>
          </div>
        </div>
      )}
    </>
  );
}

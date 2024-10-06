'use client';

import useTimer from '@/hooks/useTimer';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  fruitList,
  singerList,
  brandList,
  snackList,
  animalList,
  movieList,
  countryList,
  colorList,
  jobList,
  sportList,
  foodList,
  carBrandList,
} from '@/dataList/speedgame';

// 키워드에 따른 리스트 매핑
const keywordMap: { [key: string]: string[] } = {
  fruit: fruitList,
  singer: singerList,
  brand: brandList,
  snack: snackList,
  animal: animalList,
  movie: movieList,
  country: countryList,
  color: colorList,
  job: jobList,
  sport: sportList,
  food: foodList,
  carBrand: carBrandList,
};

// 리스트 셔플 함수
const shuffleList = (list: string[]) => {
  return list.sort(() => Math.random() - 0.5);
};

export default function SpeedgameComponent() {
  const [time, setTime, finish, setFinish] = useTimer(100);
  const [shuffledList, setShuffledList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resultList, setResultList] = useState<string[]>([]);
  const pathParams = useParams();
  const keyword = pathParams.keyword as string;
  const keywordList = keywordMap[keyword];

  useEffect(() => {
    // 컴포넌트가 마운트될 때 리스트를 섞음
    setShuffledList(shuffleList([...keywordList]));
  }, []);

  // 정답or패스 버튼 핸들링
  const handleButton = (result: string) => {
    if (currentIndex >= keywordList.length - 1) {
      setFinish(true);
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);

    setResultList((prev) => [...prev, result]);
  };

  return (
    <div>
      {finish ? (
        <div
          className="bg-white w-[90%] mx-5 lg:max-w-[1136px] xs:mx-auto my-12 p-4 xs:p-10 rounded-2xl border-2 border-[#98794533]"
          style={{ boxShadow: '0px 0px 10px 2px rgba(152, 121, 69, 0.20)' }}
        >
          <div className="bg-[#452F08] rounded-[90px] px-10 xs:px-[88px] py-3 xs:py-6 text-white text-[24px] xs:text-[40px] font-extrabold w-[130px] xs:w-[251px] mx-auto mb-6">
            결과
          </div>

          {/* 결과 목록 */}
          <div className="h-[466px] overflow-y-scroll overflow-x-hidden bg-[#F7F6F3] flex flex-col gap-6 py-8 px-4 md:px-20">
            {resultList.map((item, index) => {
              return (
                <div key={index} className="flex gap-4 justify-between">
                  <p className="text-2xl flex-1 xs:text-[32px] font-semibold self-center">
                    {shuffledList[index]}
                  </p>
                  {item === 'PASS' ? (
                    <p className="text-[#FF5E66] flex-1 flex-center gap-2 text-[32px] md:text-[40px] font-semibold text-nowrap">
                      {item}
                      <img src="/images/틀림.svg" className="w-8 md:w-full" />
                    </p>
                  ) : (
                    <p className="text-[#2EBA41] flex-1 flex-center gap-2 text-[32px] md:text-[40px] font-semibold text-nowrap">
                      {item}
                      <img src="/images/정답.svg" className="w-8 md:w-full" />
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          {/* 버튼들 */}
          <div className="flex xs:mx-auto lg:w-fit w-full gap-2 xs:gap-6 mt-10">
            <button
              className="btn flex gap-2 bg-[#616161] hover:bg-[#616161] rounded-2xl w-full flex-1 sm:w-[320px] h-[64px] xs:h-[84px] shadow-block"
              onClick={() => {
                setFinish(false);
                setResultList([]);
                setTime(100);
              }}
            >
              <img src="/images/다시하기.svg" alt="다시하기" className="w-5 xs:w-8" />
              <p className="text-white xs:text-[30px] xxs:text-[20px] text-[16px]">다시하기</p>
            </button>
            <Link
              href={`/`}
              className="btn bg-[#FF841F] hover:bg-[#FF841F] rounded-2xl flex-1 w-full sm:w-[320px] h-[64px] xs:h-[84px] shadow-block"
            >
              <img src="/images/홈으로.svg" alt="홈으로" className="w-5 xs:w-8" />
              <p className="text-white xs:text-[30px] text-[20px]">홈으로</p>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {/* 타이머 */}
          <div
            className="mx-auto h-[168px] w-[168px]"
            style={{ backgroundImage: 'url(/images/시계.svg)', backgroundRepeat: 'no-repeat' }}
          >
            <div
              className={`${
                time <= 10 ? 'text-[#FF3204]' : ''
              } text-[44px] flex-center h-[168px] pt-3`}
            >
              {time}
            </div>
          </div>

          {/* 단어 */}
          <div className="text-center font-bold mt-10 text-wrap mb-32 text-[80px] md:text-[150px]">
            {shuffledList[currentIndex]}
          </div>

          {/* 버튼들 */}
          <div className="flex mx-auto w-full sm:w-fit gap-6 px-5 mb-10">
            <button
              className="btn bg-[#FF5E66] hover:bg-[#FF5E66] text-white rounded-2xl flex-1 sm:w-[320px] h-[64px] xs:h-[84px] shadow-block text-[32px]"
              onClick={() => handleButton('PASS')}
            >
              PASS {currentIndex}, {keywordList.length}
            </button>
            <button
              className="btn bg-[#AFE047] hover:bg-[#AFE047] text-[#3F4D23] rounded-2xl flex-1 sm:w-[320px] h-[64px] xs:h-[84px] shadow-block text-[32px]"
              onClick={() => handleButton('정답')}
            >
              정답!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import useTimer from '@/hooks/useTimer';
import { useEffect, useState } from 'react';

const List = [
  '사과',
  '바나나',
  '포도',
  '오렌지',
  '딸기',
  '파인애플',
  '망고',
  '키위',
  '체리',
  '복숭아',
  '자두',
  '레몬',
  '라임',
  '블루베리',
  '라즈베리',
  '크랜베리',
  '구아바',
  '코코넛',
  '멜론',
  '수박',
  '한라봉',
  '참외',
  '홍시',
  '감',
  '무화과',
  '귤',
  '두리안',
  '잭프룻',
  '대추',
  '파파야',
  '롱간',
  '람부탄',
  '스타프룻',
  '카람볼라',
  '용과',
  '애플망고',
  '아보카도',
  '카키',
  '구스베리',
  '산딸기',
  '잣',
  '올리브',
  '패션프루트',
  '블랙베리',
  '피타야',
  '아사이베리',
  '크렘슨',
  '드래곤후르츠',
  '페르시몬',
  '모과',
  '서양배',
  '카스터드애플',
  '탐부르노',
  '유자',
  '매실',
  '잉카베리',
  '사포테',
  '아케비',
  '소노라',
  '살구',
  '멜론',
  '석류',
  '람부탄',
  '두리안',
  '스타후르츠',
  '자바애플',
  '노니',
  '호박',
  '파우파우',
  '마룰라',
  '아테모야',
  '치코',
  '사워솝',
  '페피노',
  '캄캄',
  '커스터드애플',
  '플람',
  '마르마라',
  '산초',
  '타마릴로',
  '빨간용과',
  '골든베리',
  '카람볼라',
  '체리모야',
  '토마토',
  '오디',
  '로건베리',
  '쿠미콰트',
  '로쿠몬',
  '페피타',
  '피스타치오',
  '귤',
  '한라봉',
  '오디',
  '리치',
  '탱자',
  '가시복숭아',
  '잣',
  '고구마',
  '유자',
  '토종배',
  '참다래',
  '포포',
  '호두',
  '페르시몬',
  '타로',
  '거봉',
  '칠레구아바',
  '양배추',
];

// 리스트 셔플 함수
const shuffleList = (list: string[]) => {
  return list.sort(() => Math.random() - 0.5);
};

export default function SpeedgameComponent() {
  const [time, _, finish] = useTimer(60);
  const [shuffledList, setShuffledList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resultList, setResultList] = useState<string[]>([]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 리스트를 섞음
    setShuffledList(shuffleList([...List]));
  }, []);

  // 정답or패스 버튼 핸들링
  const handleButton = (result: string) => {
    setCurrentIndex((prevIndex) => prevIndex + 1);

    setResultList((prev) => [...prev, result]);
  };

  return (
    <div>
      {finish ? (
        <div>
          <div>결과</div>
          <div>
            {resultList.map((item, index) => {
              return (
                <div key={index}>
                  {index + 1}.{shuffledList[index]} {item}
                </div>
              );
            })}
          </div>
          {/* 버튼들 */}
          <div className="flex mx-auto w-fit gap-6">
            <button className="btn bg-[#FF5E66] hover:bg-[#FF5E66] text-white rounded-2xl w-[25rem] h-[6.25rem] shadow-block text-[2.5rem]">
              다시하기
            </button>
            <button className="btn bg-[#AFE047] hover:bg-[#AFE047] text-[#3F4D23] rounded-2xl w-[25rem] h-[6.25rem] shadow-block text-[2.5rem]">
              홈으로
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* 타이머 */}
          <div
            className="mx-auto h-[200px] w-[200px]"
            style={{ backgroundImage: 'url(/images/시계.svg)', backgroundRepeat: 'no-repeat' }}
          >
            <div
              className={`${
                time <= 10 ? 'text-[#FF3204]' : ''
              } text-[44px] flex-center h-[200px] pt-3`}
            >
              {time}
            </div>
          </div>

          <div
            className="text-center font-bold mt-10 mb-32"
            style={{
              fontSize: 'clamp(64px, 12vw, 230px)',
            }}
          >
            {shuffledList[currentIndex]}
          </div>
          {/* 버튼들 */}
          <div className="flex mx-auto w-fit gap-6">
            <button
              className="btn bg-[#FF5E66] hover:bg-[#FF5E66] text-white rounded-2xl w-[25rem] h-[6.25rem] shadow-block text-[2.5rem]"
              onClick={() => handleButton('pass')}
            >
              PASS
            </button>
            <button
              className="btn bg-[#AFE047] hover:bg-[#AFE047] text-[#3F4D23] rounded-2xl w-[25rem] h-[6.25rem] shadow-block text-[2.5rem]"
              onClick={() => handleButton('correct')}
            >
              정답!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

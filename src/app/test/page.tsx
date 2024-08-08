'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Test1() {
  const router = useRouter();
  const [onStart, setOnStart] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const data = [
    {
      question: '나는 E다?',
      answers: {
        A: '맞다',
        B: '아니다',
      },
    },
    {
      question: '나는 N이다?',
      answers: {
        A: '맞아용',
        B: '아니에용',
      },
    },
    {
      question: '',
      answers: {
        A: '',
        B: '',
      },
    },
  ];

  return (
    <div>
      <h1>두콩 테스트</h1>
      {/* 질문 */}
      {onStart && clickCount < 2 && (
        <>
          <div>프로그래스 바 영역</div>
          <div>
            <h3>{data[clickCount].question}</h3>
          </div>
          {/* 답변 */}
          <div className="flex flex-col gap-2">
            <button className="btn btn-outline" onClick={() => setClickCount(clickCount + 1)}>
              {data[clickCount].answers.A}
            </button>
            <button className="btn btn-outline" onClick={() => setClickCount(clickCount + 1)}>
              {data[clickCount].answers.B}
            </button>
          </div>
        </>
      )}
      {/* 결과화면 */}
      {onStart && clickCount === 2 && (
        <>
          <div>당신은 ENFP입니다!</div>
          {/* 버튼 */}
          <button className="btn w-full mt-4" onClick={() => window.location.reload()}>
            다시하기
          </button>
        </>
      )}

      {/* 버튼 */}
      {!onStart && (
        <button className="btn w-full mt-4" onClick={() => setOnStart(true)}>
          시작하기
        </button>
      )}
    </div>
  );
}

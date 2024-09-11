'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [questionCount, setQuestionCount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">몇 문제를 풀겠습니까?</h1>
      <div className="flex gap-4 mt-4">
        <button className="btn" onClick={() => setQuestionCount(10)}>
          10문제
        </button>
        <button className="btn" onClick={() => setQuestionCount(15)}>
          15문제
        </button>
        <button className="btn" onClick={() => setQuestionCount(20)}>
          20문제
        </button>
      </div>

      {questionCount && (
        <div className="mt-8">
          <p>선택한 문제 수: {questionCount}</p>
          {/* 시작 버튼을 추가해서 문제 풀이로 넘어갈 수 있게 만듭니다. */}
          <Link href={`/proverb/quiz`} className="btn mt-4">
            시작
          </Link>
        </div>
      )}
    </div>
  );
}

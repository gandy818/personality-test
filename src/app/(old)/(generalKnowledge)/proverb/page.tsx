'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [questionCount, setQuestionCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold my-20">몇 문제를 풀겠습니까?</h1>
        <div className="flex gap-4 mt-4">
          <button
            className={`btn border-2 ${questionCount === 10 ? 'border-blue-300 border-2' : ''}`}
            onClick={() => setQuestionCount(10)}
          >
            10문제
          </button>
          <button
            className={`btn border-2 ${questionCount === 15 ? 'border-blue-300 border-2' : ''}`}
            onClick={() => setQuestionCount(15)}
          >
            15문제
          </button>
          <button
            className={`btn border-2 ${questionCount === 20 ? 'border-blue-300 border-2' : ''}`}
            onClick={() => setQuestionCount(20)}
          >
            20문제
          </button>
        </div>

        <div className="mt-8">
          {/* 문제 수를 쿼리로 전달 */}
          <Link
            href={`/proverb/quiz?count=${questionCount}`}
            className="btn border-2 btn-wide mt-4"
          >
            시작
          </Link>
        </div>
      </div>
    </>
  );
}

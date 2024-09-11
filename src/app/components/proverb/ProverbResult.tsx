'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

// 속담 타입 정의
interface Proverb {
  front: string;
  back: string;
}

// Results 컴포넌트의 props 타입 정의
interface ResultsProps {
  results: { index: number; answer: string }[]; // 문제 인덱스와 답을 가진 배열
  proverbs: Proverb[]; // Proverb 타입의 배열
}

const ProverbResults = ({ results, proverbs }: ResultsProps) => {
  const searchParams = useSearchParams();
  const totalQuestions = parseInt(searchParams.get('count') || '0', 10); // 쿼리 파라미터에서 총 문제 수를 가져옴
  const correctCount = results.filter((result) => result.answer === 'correct').length;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">결과</h2>
      <p className="mt-4">
        맞춘 문제 수: {correctCount} / {totalQuestions}
      </p>
      <div className="mt-4">
        {results.map((result, index) => (
          <div key={index} className="mb-2">
            <p>
              {result.index + 1}. {proverbs[result.index].front} {proverbs[result.index].back} -{' '}
              {result.answer === 'correct' ? '정답' : '오답'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProverbResults;

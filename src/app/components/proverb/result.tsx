// components/Results.tsx
import React from 'react';

// 속담 타입 정의
interface Proverb {
  front: string;
  back: string;
}

// Results 컴포넌트의 props 타입 정의
interface ResultsProps {
  results: string[]; // 'correct' 또는 'incorrect' 값을 가질 수 있는 배열
  proverbs: Proverb[]; // Proverb 타입의 배열
}

const Results = ({ results, proverbs }: ResultsProps) => {
  const correctCount = results.filter((result) => result === 'correct').length;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">결과</h2>
      <p className="mt-4">
        맞춘 문제 수: {correctCount} / {results.length}
      </p>
      <div className="mt-4">
        {proverbs.map((proverb, index) => (
          <div key={index} className="mb-2">
            <p>
              {index + 1}. {proverb.front} {proverb.back} -{' '}
              {results[index] === 'correct' ? '정답' : '오답'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;

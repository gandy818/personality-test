'use client';

import { useState } from 'react';
import Quiz from '@/app/components/proverb/quiz';
import Results from '@/app/components/proverb/result';

// 속담 타입 정의
interface Proverb {
  front: string;
  back: string;
}

export default function QuizPage() {
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [results, setResults] = useState<string[]>([]);

  const proverbs: Proverb[] = [
    { front: '가는 말이 고와야', back: '오는 말이 곱다' },
    { front: '등잔 밑이', back: '어둡다' },
    { front: '천 리 길도', back: '한 걸음부터' },
    // 속담 데이터를 추가로 넣을 수 있습니다.
  ];

  // 퀴즈가 끝났을 때 호출되는 함수
  const handleFinish = (userResults: string[]) => {
    setResults(userResults);
    setIsQuizFinished(true);
  };

  return (
    <div className="container mx-auto">
      {!isQuizFinished ? (
        <Quiz
          totalQuestions={proverbs.length} // 총 문제 수를 proverbs 배열의 길이로 설정
          proverbs={proverbs} // 속담 데이터를 Quiz로 전달
          onFinish={handleFinish} // 퀴즈 완료 후 호출되는 함수
        />
      ) : (
        <Results results={results} proverbs={proverbs} />
      )}
    </div>
  );
}

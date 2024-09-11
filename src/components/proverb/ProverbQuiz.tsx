'use client';

import { useState, useEffect } from 'react';

// 속담 타입 정의
interface Proverb {
  front: string;
  back: string;
}

// result의 타입 정의
interface Result {
  index: number;
  answer: string;
}

// Quiz 컴포넌트의 props 타입 정의
interface QuizProps {
  totalQuestions: number;
  proverbs: Proverb[];
  onFinish: (results: Result[]) => void;
}

export default function ProverbQuiz({ totalQuestions, proverbs, onFinish }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [results, setResults] = useState<Result[]>([]);
  const [timer, setTimer] = useState<number>(3); // 3초 타이머 설정
  const [unaskedQuestions, setUnaskedQuestions] = useState(
    Array.from({ length: totalQuestions }, (_, index) => index)
  );

  // 타이머 업데이트 및 3초 후 답 표시
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(countdown); // 컴포넌트가 언마운트될 때 타이머 정리
    } else {
      setShowAnswer(true); // 타이머가 끝나면 답을 표시
    }
  }, [timer]);

  // 문제 번호가 바뀔 때마다 타이머와 답을 리셋
  useEffect(() => {
    setTimer(3); // 타이머를 3초로 리셋
    setShowAnswer(false);
  }, [currentQuestionIndex]);

  // 현재 풀고 있는 문제의 순서 계산 (현재까지 푼 문제 수 = 총 문제 - 남은 문제 수)
  const currentQuestionNumber = totalQuestions - unaskedQuestions.length + 1;

  const handleNext = () => {
    if (selectedAnswer) {
      // 결과 배열에 현재 문제의 인덱스와 선택한 답을 저장
      setResults([...results, { index: currentQuestionIndex, answer: selectedAnswer }]);

      if (unaskedQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * unaskedQuestions.length); // 남은 질문 중 랜덤 인덱스
        const nextQuestionIndex = unaskedQuestions[randomIndex];

        // 랜덤으로 선택된 질문 인덱스를 제외하고 새로운 배열 생성
        const newUnaskedQuestions = unaskedQuestions.filter((_, index) => index !== randomIndex);

        setCurrentQuestionIndex(nextQuestionIndex); // 랜덤하게 선택된 질문으로 이동
        setUnaskedQuestions(newUnaskedQuestions); // 남은 질문 업데이트
        setSelectedAnswer(null); // 답 초기화
      } else {
        onFinish(results); // 모든 문제를 풀었을 때 결과 전달
      }
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-1000`}
    >
      <h2 className="text-xl font-bold">
        문제 {currentQuestionNumber} / {totalQuestions}
      </h2>

      {/* 타이머 표시 (크게 보이도록) */}
      <div className="text-8xl font-extrabold text-red-600 animate-pulse">
        {timer > 0 ? timer : '시간 종료'}
      </div>

      <div className="mt-4 text-2xl">
        {!showAnswer ? (
          <p>{proverbs[currentQuestionIndex].front}</p>
        ) : (
          <p>{`${proverbs[currentQuestionIndex].front} ${proverbs[currentQuestionIndex].back}`}</p>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <button
          className={`btn ${selectedAnswer === 'pass' ? 'btn-primary' : ''}`}
          onClick={() => setSelectedAnswer('pass')}
        >
          땡
        </button>
        <button
          className={`btn ${selectedAnswer === 'correct' ? 'btn-primary' : ''}`}
          onClick={() => setSelectedAnswer('correct')}
        >
          정답!
        </button>
      </div>

      <button className="btn mt-4" onClick={handleNext} disabled={!selectedAnswer}>
        다음 문제
      </button>
    </div>
  );
}

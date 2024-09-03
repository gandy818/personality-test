'use client';

import Link from 'next/link';
import { useState } from 'react';

interface QuizDataType {
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  answer: 'a' | 'b' | 'c' | 'd';
}

const quizData: QuizDataType[] = [
  {
    question: '피라미드를 건설한 고대 문명은 무엇인가요?',
    options: {
      a: '마야 문명',
      b: '이집트 문명',
      c: '그리스 문명',
      d: '로마 문명',
    },
    answer: 'b',
  },
  {
    question: '물은 몇 도에서 끓나요? (섭씨 기준)',
    options: {
      a: '0도',
      b: '50도',
      c: '100도',
      d: '150도',
    },
    answer: 'c',
  },
  {
    question: '세계에서 가장 큰 사막은 어디인가요?',
    options: {
      a: '고비 사막',
      b: '사하라 사막',
      c: '칼라하리 사막',
      d: '아라비아 사막',
    },
    answer: 'b',
  },
  {
    question:
      "셰익스피어의 비극 중 '죽느냐 사느냐 그것이 문제로다'라는 유명한 대사가 등장하는 작품은 무엇인가요?",
    options: {
      a: '로미오와 줄리엣',
      b: '맥베스',
      c: '햄릿',
      d: '오셀로',
    },
    answer: 'c',
  },
  {
    question: '미국의 첫 번째 대통령은 누구였나요?',
    options: {
      a: '토머스 제퍼슨',
      b: '존 애덤스',
      c: '벤자민 프랭클린',
      d: '조지 워싱턴',
    },
    answer: 'd',
  },
  {
    question:
      '레오나르도 다 빈치의 가장 유명한 그림 중 하나로, 파리 루브르 박물관에 소장된 이 그림은 무엇인가요?',
    options: {
      a: '최후의 만찬',
      b: '모나리자',
      c: '비트루비우스 인간',
      d: '성 요한 세례자',
    },
    answer: 'b',
  },
  {
    question: '원의 둘레를 계산하는 공식은 무엇인가요?',
    options: {
      a: 'πr^2',
      b: '2πr',
      c: 'r^2π',
      d: 'πd',
    },
    answer: 'b',
  },
  {
    question: "베토벤의 교향곡 중 '운명'이라는 별칭으로 잘 알려진 작품은 몇 번 교향곡인가요?",
    options: {
      a: '제3번',
      b: '제5번',
      c: '제7번',
      d: '제9번',
    },
    answer: 'b',
  },
  {
    question: '세계에서 가장 많이 사용되는 언어는 무엇인가요?',
    options: {
      a: '영어',
      b: '중국어',
      c: '스페인어',
      d: '힌디어',
    },
    answer: 'b',
  },
  {
    question: '올림픽에서 가장 많이 개최된 도시는 어디인가요?',
    options: {
      a: '파리',
      b: '아테네',
      c: '런던',
      d: '로스앤젤레스',
    },
    answer: 'c',
  },
];

export default function Page() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 10); // 정답일 경우 점수 추가
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsFinished(true); // 모든 문제를 풀었을 때
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center w-full">
      <div className="bg-white py-20 px-14 rounded-lg shadow-lg min-h-96 w-[calc(100%-32px)]">
        {isFinished ? (
          <div className="text-center flex flex-col justify-between h-full gap-24">
            <h2 className="text-2xl font-bold">당신의 점수는!</h2>
            <p className="text-4xl mt-4 font-semibold">{score}점</p>
            <div>
              <button
                className="btn btn-secondary py-2 px-4 rounded mt-4 mr-4"
                onClick={restartQuiz}
              >
                다시하기
              </button>
              <Link href="/">
                <button className="btn py-2 px-4 rounded mt-4">목록으로 돌아가기</button>
              </Link>
            </div>
          </div>
        ) : (
          <div key={currentQuestionIndex}>
            <h2 className="text-xl font-bold mb-4">{quizData[currentQuestionIndex].question}</h2>
            {Object.entries(quizData[currentQuestionIndex].options).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleAnswer(key)}
                className="flex-col flex py-2 px-4 rounded mb-2"
              >
                {key}. {value}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

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
    question: '지구에서 가장 큰 대륙은 무엇일까요?',
    options: {
      a: '아시아',
      b: '아프리카',
      c: '남아메리카',
      d: '유럽',
    },
    answer: 'a',
  },
  {
    question: '미국의 첫 번째 대통령은 누구인가요?',
    options: {
      a: '토머스 제퍼슨',
      b: '에이브러햄 링컨',
      c: '조지 워싱턴',
      d: '존 애덤스',
    },
    answer: 'c',
  },
  {
    question: '피타고라스의 정리는 어떤 도형에 관련된 정리인가요?',
    options: {
      a: '원',
      b: '삼각형',
      c: '사각형',
      d: '다각형',
    },
    answer: 'b',
  },
  {
    question: '대한민국 헌법 제1조에 따르면 대한민국은 어떤 국가인가요?',
    options: {
      a: '입헌 군주국',
      b: '민주 공화국',
      c: '사회주의 국가',
      d: '연방 공화국',
    },
    answer: 'b',
  },
  {
    question: "영화 '타이타닉'에서 주인공 잭이 사랑에 빠진 인물의 이름은?",
    options: {
      a: '에밀리',
      b: '로즈',
      c: '엘리자베스',
      d: '줄리엣',
    },
    answer: 'b',
  },
  {
    question: '태양계에서 가장 큰 행성은 무엇인가요?',
    options: {
      a: '지구',
      b: '화성',
      c: '목성',
      d: '토성',
    },
    answer: 'c',
  },
  {
    question: '바흐, 베토벤, 모차르트와 같은 음악가들이 주로 활동했던 음악 장르는 무엇일까요?',
    options: {
      a: '재즈',
      b: '클래식',
      c: '록',
      d: '힙합',
    },
    answer: 'b',
  },
  {
    question: "다윈이 '진화론'을 발표한 유명한 저서의 제목은 무엇인가요?",
    options: {
      a: '종의 기원',
      b: '만물의 진화',
      c: '인류의 기원',
      d: '자연의 역사',
    },
    answer: 'a',
  },
  {
    question: "전 세계적으로 사용되는 인터넷 최상위 도메인 중 'com'은 무엇을 의미하나요?",
    options: {
      a: '컴퓨터',
      b: '커뮤니케이션',
      c: '커머스(Commerce)',
      d: '커뮤니티',
    },
    answer: 'c',
  },
  {
    question: '미국의 국기에는 별이 몇 개 있나요?',
    options: {
      a: '48개',
      b: '49개',
      c: '50개',
      d: '51개',
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

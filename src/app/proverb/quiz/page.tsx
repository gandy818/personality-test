'use client';

import { useState } from 'react';
import ProverbQuiz from '@/app/components/proverb/ProverbQuiz';
import ProverbResult from '@/app/components/proverb/ProverbResult';
import { useSearchParams } from 'next/navigation';

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

export default function QuizPage() {
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [results, setResults] = useState<Result[]>([]);
  const searchParams = useSearchParams();
  const count = searchParams.get('count'); // 쿼리에서 문제 수를 가져옴

  const proverbs: Proverb[] = [
    { front: '가는 말이 고와야', back: '오는 말이 곱다' },
    { front: '등잔 밑이', back: '어둡다' },
    { front: '천 리 길도', back: '한 걸음부터' },
    { front: '고래 싸움에', back: '새우 등 터진다' },
    { front: '가는 날이', back: '장날이다' },
    { front: '달면 삼키고', back: '쓰면 뱉는다' },
    { front: '두 손뼉이', back: '마주쳐야 소리가 난다' },
    { front: '뛰는 놈 위에', back: '나는 놈이 있다' },
    { front: '말 한 마디에', back: '천 냥 빚 갚는다' },
    { front: '낮말은 새가 듣고', back: '밤말은 쥐가 듣는다' },
    { front: '백지장도', back: '맞들면 낫다' },
    { front: '원숭이도', back: '나무에서 떨어진다' },
    { front: '가는 정이 있어야', back: '오는 정이 있다' },
    { front: '배보다', back: '배꼽이 크다' },
    { front: '벼는 익을수록', back: '고개를 숙인다' },
    { front: '소 잃고', back: '외양간 고친다' },
    { front: '쇠귀에', back: '경 읽기' },
    { front: '우물 안', back: '개구리' },
    { front: '웃는 얼굴에', back: '침 못 뱉는다' },
    { front: '세 살 버릇', back: '여든까지 간다' },
    { front: '하늘의 별 따기', back: '같다' },
    { front: '꿩 대신', back: '닭' },
    { front: '호랑이도 제 말 하면', back: '온다' },
    { front: '아닌 밤중에', back: '홍두깨' },
    { front: '배부른 돼지보다', back: '배고픈 소크라테스가 낫다' },
    { front: '바늘 도둑이', back: '소도둑 된다' },
    { front: '돌다리도', back: '두드려 보고 건너라' },
    { front: '낫 놓고', back: '기역자도 모른다' },
    { front: '발 없는 말이', back: '천리 간다' },
    { front: '빈 수레가', back: '요란하다' },
    { front: '늦게 배운 도둑이', back: '날 새는 줄 모른다' },
    { front: '믿는 도끼에', back: '발등 찍힌다' },
    { front: '옷이 날개다', back: '같다' },
    { front: '작은 고추가', back: '맵다' },
    { front: '티끌 모아', back: '태산' },
    { front: '한 술 밥에', back: '배부르랴' },
    { front: '열 번 찍어', back: '안 넘어가는 나무 없다' },
    { front: '모로 가도', back: '서울만 가면 된다' },
    { front: '금강산도', back: '식후경' },
    { front: '공든 탑이', back: '무너지랴' },
    { front: '낫보다', back: '기역자도 모른다' },
    { front: '말은 해야', back: '맛이다' },
    { front: '빈 수레가', back: '요란하다' },
    { front: '서당 개 삼 년에', back: '풍월을 읊는다' },
    { front: '내리사랑은 있어도', back: '치사랑은 없다' },
    { front: '보기 좋은 떡이', back: '먹기도 좋다' },
    { front: '가는 날이', back: '장날이다' },
    { front: '닭 잡아먹고', back: '오리발 내민다' },
    { front: '등 따시고', back: '배부르다' },
    { front: '물에 빠지면', back: '지푸라기라도 잡는다' },
  ];

  // 퀴즈가 끝났을 때 호출되는 함수
  const handleFinish = (userResults: Result[]) => {
    setResults(userResults); // 결과 저장
    setIsQuizFinished(true); // 퀴즈 완료 상태로 설정
  };

  return (
    <div className="container mx-auto">
      {!isQuizFinished ? (
        <ProverbQuiz
          totalQuestions={Number(count)} // 총 문제 수를 proverbs 배열의 길이로 설정
          proverbs={proverbs} // 속담 데이터를 Quiz로 전달
          onFinish={handleFinish} // 퀴즈 완료 후 호출되는 함수
        />
      ) : (
        <ProverbResult results={results} proverbs={proverbs} />
      )}
    </div>
  );
}

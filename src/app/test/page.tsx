'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Test1() {
  const router = useRouter();
  const [onStart, setOnStart] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [result, setResult] = useState({
    ei: 0,
    ns: 0,
    tf: 0,
    jp: 0,
  });
  const [mbti, setMbti] = useState('');

  // 문제
  const data = [
    {
      question: '금요일이다! 술 마시자 술 술 술!',
      type: 'ei',
      answers: {
        A: '좋다 야, 사람 더 불러 누구 더 없나?',
        B: '무슨 술이야 집에서 게임이나 ㄱㄱ',
      },
    },
    {
      question:
        '단톡방에 웃기려고 던진 나의 회심의 드립! 그런데 내 카톡에 아무도 답장해주지 않는다.',
      type: 'ns',
      answers: {
        A: '헙... 혹시 내가 선을 넘었나? 누군가 불편했을까?',
        B: '재미가 없었나 에잉 까비',
      },
    },
    {
      question: '',
      type: 'tf',
      answers: {
        A: '',
        B: '',
      },
    },
  ];

  // 결과 MBTI 만드는 함수
  const getResult = (type: string, answer: string) => {
    if (type === 'ei') {
      answer === 'A' ? setResult({ ...result, ei: 1 }) : setResult({ ...result, ei: -1 });

      // 카운트를 증가시켜 다음 문제로 넘어간다.
      setClickCount(clickCount + 1);
      return;
    }

    if (type === 'ns') {
      answer === 'A' ? setResult({ ...result, ns: 1 }) : setResult({ ...result, ns: -1 });

      // 카운트를 증가시켜 다음 문제로 넘어간다.
      setClickCount(clickCount + 1);
      return;
    }
  };

  useEffect(() => {
    console.log(result);
    let mbtiArray = [];

    result.ei === 1 ? mbtiArray.push('E') : mbtiArray.push('I');
    result.ns === 1 ? mbtiArray.push('N') : mbtiArray.push('S');

    setMbti(mbtiArray.join(''));
  }, [result]);

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
            <button
              className="btn btn-outline"
              onClick={() => getResult(data[clickCount].type, 'A')}
            >
              {data[clickCount].answers.A}
            </button>

            <button
              className="btn btn-outline"
              onClick={() => getResult(data[clickCount].type, 'B')}
            >
              {data[clickCount].answers.B}
            </button>
          </div>
        </>
      )}

      {/* 결과화면 */}
      {onStart && clickCount === 2 && (
        <>
          <div>당신의 MBTI는 {mbti}입니다!</div>
          {/* 다시하기 버튼 */}
          <button className="btn w-full mt-4" onClick={() => window.location.reload()}>
            다시하기
          </button>
        </>
      )}

      {/* 시작하기 버튼 */}
      {!onStart && (
        <button className="btn w-full mt-4" onClick={() => setOnStart(true)}>
          시작하기
        </button>
      )}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Result from './components/Result';

export default function Home() {
  const [onStart, setOnStart] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [progressValue, setProgressValue] = useState(10);
  const [result, setResult] = useState({
    ei: 0,
    ns: 0,
    tf: 0,
    jp: 0,
  });
  const [mbti, setMbti] = useState('');

  // 질문
  const data = [
    {
      question: '드디어 금요일이다! 술 마시자 술 술 술!',
      type: 'ei',
      answers: {
        A: '좋다 야, 사람 더 불러 누구 더 없나?',
        B: '아.. 무슨 술이야 집에서 게임이나 하지',
      },
    },
    {
      question:
        '단톡방에 웃기려고 던진 나의 회심의 드립! 그런데 내 카톡에 아무도 답장해주지 않는다.',
      type: 'ns',
      answers: {
        A: '헙... 혹시 내가 선을 넘었나? 누군가 불편했을까?',
        B: '재미가 없었나 떼잉 까비',
      },
    },
    {
      question: '헐 나 좀 늦을 듯ㅠㅠ 눈 앞에서 버스 놓쳐서 택시 탔는데 차가 막히네 ..',
      type: 'tf',
      answers: {
        A: '음.. 알겠어! (이유가 타당하군)',
        B: '음.. 알겠어! (근데 사과는?)',
      },
    },
    {
      question: '뭐하냐~ 심심한데 나와',
      type: 'jp',
      answers: {
        A: '... 갑자기?',
        B: 'ㅇㅋ',
      },
    },
    {
      question: "재밌게 우리끼리 술 마시고 있던 중, '야 내 친구도 오고싶대'",
      type: 'ei',
      answers: {
        A: 'ㅇㅇ 불러 상관 없음',
        B: '어어..? (불편한디)',
      },
    },
    {
      question: '나는 영화를 볼 때',
      type: 'ns',
      answers: {
        A: '영화 자체 메시지, 교훈, 의미 등을 중요하게 본다.',
        B: '영화의 디테일, 배우의 연기, 리얼리티 등을 중요하게 본다.',
      },
    },
    {
      question: '애인 : 오늘 회사에서 실수했는데 부장이 나한테 완전 뭐라고 했어ㅠㅠ',
      type: 'tf',
      answers: {
        A: '헉 어떤 실수 했는데?',
        B: '아이고 속상하겠네ㅠㅠ 무슨일이래ㅜ',
      },
    },
    {
      question:
        '나 : 오늘은 꼭 퇴근하고 운동도 하고 공부도 하고 자기계발 하다가 자야지!\n\n 단톡 : 오늘 번개로 만날 사람?',
      type: 'jp',
      answers: {
        A: '오 완전 좋지 ㄱㄱㄱ',
        B: 'ㄴㄴ 나 오늘은 안됨',
      },
    },
    {
      question: '친구들과 우리 집에 누워 각자 할 걸 하고 있는 지금은?',
      type: 'ei',
      answers: {
        A: '편안한 휴식시간이다.',
        B: '친구들이 가야 휴식이다.',
      },
    },
    {
      question: '내가 더 선호하는 일은?',
      type: 'ns',
      answers: {
        A: '상상력을 자극하는 일',
        B: '시키는 대로 하는 일',
      },
    },
    {
      question: '출생신고서는 30년이 지나면 폐기돼서 30살 이후에는 절대 발급 받을 수 없대',
      type: 'tf',
      answers: {
        A: '진짜? 내가 태어났을 때의 정확한 정보를 알 수 있어 흥미롭겠군.',
        B: '진짜? 그때 부모님의 필적.. 심정.. 생각만 해도 벌써 울컥행 ㅜ',
      },
    },
    {
      question: '계획이 틀어지면 나는',
      type: 'jp',
      answers: {
        A: '아 초큼 스트레스네',
        B: '그럴 수도 있지',
      },
    },
  ];

  // 결과 MBTI 만드는 함수
  const getResult = (type: string, answer: string) => {
    if (type === 'ei') {
      answer === 'A'
        ? setResult({ ...result, ei: result.ei + 1 })
        : setResult({ ...result, ei: result.ei - 1 });

      // 카운트를 증가시켜 다음 문제로 넘어간다.
      setClickCount(clickCount + 1);
      // 프로그레스바 + 10
      setProgressValue(progressValue + 10);
      return;
    }

    if (type === 'ns') {
      answer === 'A'
        ? setResult({ ...result, ns: result.ns + 1 })
        : setResult({ ...result, ns: result.ns - 1 });

      // 카운트를 증가시켜 다음 문제로 넘어간다.
      setClickCount(clickCount + 1);
      // 프로그레스바 + 10
      setProgressValue(progressValue + 10);
      return;
    }

    if (type === 'tf') {
      answer === 'A'
        ? setResult({ ...result, tf: result.tf + 1 })
        : setResult({ ...result, tf: result.tf - 1 });

      // 카운트를 증가시켜 다음 문제로 넘어간다.
      setClickCount(clickCount + 1);
      // 프로그레스바 + 10
      setProgressValue(progressValue + 10);
      return;
    }

    if (type === 'jp') {
      answer === 'A'
        ? setResult({ ...result, jp: result.jp + 1 })
        : setResult({ ...result, jp: result.jp - 1 });

      // 카운트를 증가시켜 다음 문제로 넘어간다.
      setClickCount(clickCount + 1);
      // 프로그레스바 + 10
      setProgressValue(progressValue + 10);
      return;
    }
  };

  useEffect(() => {
    let mbtiArray = [];

    result.ei > 0 ? mbtiArray.push('E') : mbtiArray.push('I');
    result.ns > 0 ? mbtiArray.push('N') : mbtiArray.push('S');
    result.tf > 0 ? mbtiArray.push('T') : mbtiArray.push('F');
    result.jp > 0 ? mbtiArray.push('J') : mbtiArray.push('P');

    setMbti(mbtiArray.join(''));
  }, [result]);

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="h-screen flex flex-col justify-around py-10 text-center w-full">
        <h1 className="font-semibold text-2xl">간단 테스트</h1>

        {/* 질문 */}
        {onStart && clickCount < 12 && (
          <>
            <progress
              className="progress color-[#f7ad97] self-center transition-transform"
              value={progressValue}
              max="130"
            />
            <h3 style={{ whiteSpace: 'pre-wrap' }}>
              <div>{data[clickCount].question}</div>
            </h3>

            {/* 답변 */}
            <div className="flex flex-col gap-2">
              <button
                className="border px-4 py-10 rounded-lg border-[#b7b6d6] bg-[#b7b6d683] text-[#33344d]"
                onClick={() => getResult(data[clickCount].type, 'A')}
              >
                {data[clickCount].answers.A}
              </button>

              <button
                className="border px-4 py-10 rounded-lg border-[#e2bbd8] bg-[#e2bbd87a] text-[#33344d]"
                onClick={() => getResult(data[clickCount].type, 'B')}
              >
                {data[clickCount].answers.B}
              </button>
            </div>
          </>
        )}

        {/* 결과화면 */}
        {onStart && clickCount === 12 && (
          <>
            <Result mbti={mbti} />
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
    </main>
  );
}

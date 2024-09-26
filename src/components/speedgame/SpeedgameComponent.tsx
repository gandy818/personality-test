'use client';

import useTimer from '@/hooks/useTimer';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const fruitList = [
  '사과',
  '바나나',
  '포도',
  '오렌지',
  '딸기',
  '파인애플',
  '망고',
  '키위',
  '체리',
  '복숭아',
  '자두',
  '레몬',
  '라임',
  '블루베리',
  '라즈베리',
  '크랜베리',
  '구아바',
  '코코넛',
  '멜론',
  '수박',
  '한라봉',
  '참외',
  '홍시',
  '감',
  '무화과',
  '귤',
  '두리안',
  '잭프룻',
  '대추',
  '파파야',
  '롱간',
  '람부탄',
  '스타프룻',
  '카람볼라',
  '용과',
  '애플망고',
  '아보카도',
  '카키',
  '구스베리',
  '산딸기',
  '잣',
  '올리브',
  '패션프루트',
  '블랙베리',
  '피타야',
  '아사이베리',
  '크렘슨',
  '드래곤후르츠',
  '페르시몬',
  '모과',
  '서양배',
  '카스터드애플',
  '탐부르노',
  '유자',
  '매실',
  '잉카베리',
  '사포테',
  '아케비',
  '소노라',
  '살구',
  '멜론',
  '석류',
  '람부탄',
  '두리안',
  '스타후르츠',
  '자바애플',
  '노니',
  '호박',
  '파우파우',
  '마룰라',
  '아테모야',
  '치코',
  '사워솝',
  '페피노',
  '캄캄',
  '커스터드애플',
  '플람',
  '마르마라',
  '산초',
  '타마릴로',
  '빨간용과',
  '골든베리',
  '카람볼라',
  '체리모야',
  '토마토',
  '오디',
  '로건베리',
  '쿠미콰트',
  '로쿠몬',
  '페피타',
  '피스타치오',
  '귤',
  '한라봉',
  '오디',
  '리치',
  '탱자',
  '가시복숭아',
  '잣',
  '고구마',
  '유자',
  '토종배',
  '참다래',
  '포포',
  '호두',
  '페르시몬',
  '타로',
  '거봉',
  '칠레구아바',
  '양배추',
];
const singerList = [
  '방탄소년단',
  '블랙핑크',
  '엑소',
  '트와이스',
  '레드벨벳',
  '아이유',
  '세븐틴',
  '마마무',
  '스트레이 키즈',
  '있지',
  '엔시티 127',
  '엔시티 드림',
  '투모로우바이투게더',
  '에스파',
  '샤이니',
  '슈퍼주니어',
  '빅뱅',
  '소녀시대',
  '투애니원',
  '원더걸스',
  '몬스타엑스',
  '에이티즈',
  '엔하이픈',
  '여자친구',
  '이달의 소녀',
  '스테이씨',
  '케플러',
  '뉴진스',
  '트레저',
  '크래비티',
  '아이브',
  '르세라핌',
  '카라',
  '에프엑스',
  '에이핑크',
  '아스트로',
  '워너원',
  '투피엠',
  'SS501',
  '씨엔블루',
  '빅스',
  '인피니트',
  '비투비',
  '데이식스',
  '하이라이트',
  '갓세븐',
  '틴탑',
  '샤크라',
  '브라운 아이드 걸스',
  '애프터스쿨',
  '티아라',
  '씨스타',
  '크레용팝',
  '오마이걸',
  '러블리즈',
  'CLC',
  '다이아',
  '프로미스나인',
  '우주소녀',
  '위키미키',
  '드림캐쳐',
  '체리블렛',
  '모모랜드',
  '트라이비',
  '에이티즈',
  '원어스',
  '더보이즈',
  '골든차일드',
  'SF9',
  '펜타곤',
  'AB6IX',
  '온앤오프',
  '베리베리',
  '세러데이',
  '루미너스',
  '엑스디너리 히어로즈',
  '킹덤',
  '마크툽',
  '이하이',
  '크러쉬',
  '백예린',
  '폴킴',
  '벤',
  '거미',
  '박효신',
  '김범수',
  '나얼',
  '휘성',
  '린',
  '윤미래',
  '자이언티',
  '딘',
  '지코',
  '비와이',
  '우원재',
  '릴보이',
  '팔로알토',
  '빈지노',
  '넉살',
  '로꼬',
  '제시',
  '에픽하이',
  '다이나믹 듀오',
  '리쌍',
];
const brandList = [
  '삼성전자',
  'LG전자',
  '현대자동차',
  '기아자동차',
  '롯데',
  '신세계',
  'SK텔레콤',
  'KT',
  '네이버',
  '카카오',
  '쿠팡',
  '배달의민족',
  '이마트',
  'GS칼텍스',
  'CJ제일제당',
  '한화',
  '대한항공',
  '아시아나항공',
  '한국전력공사',
  '두산',
  '카스',
  '하이트',
  '한샘',
  '교촌치킨',
  'BBQ',
  '맥도날드',
  '스타벅스',
  '버거킹',
  'KFC',
  '서브웨이',
  '미샤',
  '아모레퍼시픽',
  '에뛰드하우스',
  'LG생활건강',
  '설화수',
  '오뚜기',
  '농심',
  '삼양',
  '롯데리아',
  '빙그레',
  '해태',
  '파리바게뜨',
  '뚜레쥬르',
  '비비고',
  '던킨도너츠',
  'ABC마트',
  '뉴발란스',
  '나이키',
  '아디다스',
  '푸마',
  '리복',
  '언더아머',
  '무신사',
  '지마켓',
  '옥션',
  '11번가',
  '하이마트',
  '교보문고',
  'YES24',
  '인터파크',
  'S-OIL',
  '현대백화점',
  '롯데백화점',
  '에이랜드',
  '유니클로',
  '자라',
  'H&M',
  '탑텐',
  '노스페이스',
  '코오롱스포츠',
  '디스커버리',
  '빈폴',
  '폴로 랄프로렌',
  '구찌',
  '프라다',
  '루이비통',
  '샤넬',
  '디올',
  '에르메스',
  '불가리',
  '롤렉스',
  '오메가',
  '아이더',
  '르꼬끄',
  '라코스테',
  '몽클레어',
  '스톤아일랜드',
  '발렌시아가',
  '버버리',
  '발렌티노',
  '골든구스',
  '페라가모',
  '티파니앤코',
  '까르띠에',
  '조르지오 아르마니',
  '피에르 가르뎅',
  '비비안웨스트우드',
  '톰브라운',
  '토리버치',
  '코치',
  '알렉산더 맥퀸',
  '리바이스',
  '게스',
  '캘빈클라인',
];

// 키워드에 따른 리스트 매핑
const keywordMap: { [key: string]: string[] } = {
  fruit: fruitList,
  singer: singerList,
  brand: brandList,
};

// 리스트 셔플 함수
const shuffleList = (list: string[]) => {
  return list.sort(() => Math.random() - 0.5);
};

export default function SpeedgameComponent() {
  const [time, _, finish] = useTimer(60);
  const [shuffledList, setShuffledList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resultList, setResultList] = useState<string[]>([]);
  const pathParams = useParams();
  const keyword = pathParams.keyword as string;

  useEffect(() => {
    console.log(keyword);
    const keywordList = keywordMap[keyword];

    // 컴포넌트가 마운트될 때 리스트를 섞음
    setShuffledList(shuffleList([...keywordList]));
  }, []);

  // 정답or패스 버튼 핸들링
  const handleButton = (result: string) => {
    setCurrentIndex((prevIndex) => prevIndex + 1);

    setResultList((prev) => [...prev, result]);
  };

  return (
    <div>
      {finish ? (
        <div>
          <div>결과</div>
          <div>
            {resultList.map((item, index) => {
              return (
                <div key={index}>
                  {index + 1}.{shuffledList[index]} {item}
                </div>
              );
            })}
          </div>
          {/* 버튼들 */}
          <div className="flex mx-auto w-fit gap-6">
            <button className="btn bg-[#FF5E66] hover:bg-[#FF5E66] text-white rounded-2xl w-[25rem] h-[6.25rem] shadow-block text-[2.5rem]">
              다시하기
            </button>
            <button className="btn bg-[#AFE047] hover:bg-[#AFE047] text-[#3F4D23] rounded-2xl w-[25rem] h-[6.25rem] shadow-block text-[2.5rem]">
              홈으로
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* 타이머 */}
          <div
            className="mx-auto h-[200px] w-[200px]"
            style={{ backgroundImage: 'url(/images/시계.svg)', backgroundRepeat: 'no-repeat' }}
          >
            <div
              className={`${
                time <= 10 ? 'text-[#FF3204]' : ''
              } text-[44px] flex-center h-[200px] pt-3`}
            >
              {time}
            </div>
          </div>
          <div className="max-w-[800px] mx-auto">
            <div
              className="text-center font-bold mt-10 mb-32 text-[150px]"
              // style={{
              //   fontSize: 'clamp(64px, 12vw, 150px)',
              // }}
            >
              {shuffledList[currentIndex]}
            </div>
          </div>
          {/* 버튼들 */}
          <div className="flex mx-auto w-fit gap-6">
            <button
              className="btn bg-[#FF5E66] hover:bg-[#FF5E66] text-white rounded-2xl w-[25rem] h-[6.25rem] shadow-block text-[2.5rem]"
              onClick={() => handleButton('pass')}
            >
              PASS
            </button>
            <button
              className="btn bg-[#AFE047] hover:bg-[#AFE047] text-[#3F4D23] rounded-2xl w-[25rem] h-[6.25rem] shadow-block text-[2.5rem]"
              onClick={() => handleButton('correct')}
            >
              정답!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

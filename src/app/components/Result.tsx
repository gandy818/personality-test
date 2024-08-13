import Image from 'next/image';

export default function Result({ mbti }: { mbti: string }) {
  {
    if (mbti === 'ENTP')
      return (
        <Image
          src="/images/김관휘_결과.png"
          alt="결과"
          width={400}
          height={500}
          layout="responsive"
          unoptimized
        />
      );
  }

  {
    if (mbti === 'ESTJ')
      return (
        <Image
          src="/images/김보겸_결과.png"
          alt="결과"
          width={400}
          height={500}
          layout="responsive"
          unoptimized
        />
      );
  }

  {
    if (mbti === 'INFP')
      return (
        <Image
          src="/images/김윤환_결과.png"
          alt="결과"
          width={400}
          height={500}
          layout="responsive"
          unoptimized
        />
      );
  }

  {
    if (mbti === 'ISFP')
      return (
        <Image
          src="/images/박찬오_결과.png"
          alt="결과"
          width={400}
          height={500}
          layout="responsive"
          unoptimized
        />
      );
  }

  {
    if (mbti === 'ESTP')
      return (
        <Image
          src="/images/송인수_결과.png"
          alt="결과"
          width={400}
          height={500}
          layout="responsive"
          unoptimized
        />
      );
  }

  {
    if (mbti === 'ISFJ')
      return (
        <Image
          src="/images/송준희_결과.png"
          alt="결과"
          width={400}
          height={500}
          layout="responsive"
          unoptimized
        />
      );
  }

  {
    if (mbti === 'ESFP')
      return (
        <Image
          src="/images/이윤종_결과.png"
          alt="결과"
          width={400}
          height={500}
          layout="responsive"
          unoptimized
        />
      );
  }

  {
    if (mbti === 'ENFJ')
      return (
        <Image
          src="/images/정영택_결과.png"
          alt="결과"
          width={400}
          height={500}
          layout="responsive"
          unoptimized
        />
      );
  }

  return <div>당신의 MBTI는 {mbti}입니다!</div>;
}

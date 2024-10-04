// 빌드를 위한 경로 미리 설정
export async function generateStaticParams() {
  const keywords = ['fruit'];

  return keywords.map((keyword) => ({
    keyword, // 각 keyword 값을 반환
  }));
}

export default function relayspeakingKeywordPage() {
  return <div>이어말하기~</div>;
}

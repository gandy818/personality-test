'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen">
      <h1 className="text-center text-4xl font-semibold mt-40 mb-32">!</h1>
      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-4 grid-cols-1 w-full gap-4">
          <div className="btn btn-outline gap-8 flex-col flex-1 px-4 py-2 text-center font-bold rounded-xl h-52 hover:bg-white">
            <h1 className="py-3 text-3xl">상식 퀴즈1</h1>
            <Link href="/generalKnowledge" className="btn btn-secondary">
              START
            </Link>
          </div>
          <div className="btn btn-outline gap-8 flex-col flex-1 px-4 py-2 text-center font-bold rounded-xl h-52 hover:bg-white">
            <h1 className="py-3 text-3xl">상식 퀴즈2</h1>
            <Link href="/generalKnowledge2" className="btn btn-secondary">
              START
            </Link>
          </div>
          <div className="btn btn-outline gap-8 flex-col flex-1 px-4 py-2 text-center font-bold rounded-xl h-52 hover:bg-white">
            <h1 className="py-3 text-3xl">속담</h1>
            <Link href="/generalKnowledge2" className="btn btn-secondary">
              START
            </Link>
          </div>
          <div className="btn btn-outline gap-8 flex-col flex-1 px-4 py-2 text-center font-bold rounded-xl h-52 hover:bg-white">
            <h1 className="py-3 text-3xl">속담</h1>
            <Link href="/generalKnowledge2" className="btn btn-secondary">
              START
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

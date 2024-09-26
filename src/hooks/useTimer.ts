import { useState, useEffect } from 'react';

// 타이머 훅 생성
const useTimer = (initialTime: number) => {
  const [finish, setFinish] = useState(false);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId); // 타이머 정리
    } else {
      // 타이머가 끝난 후 1초 뒤에 finish를 true로 설정
      setTimeout(() => {
        setFinish(true);
      }, 1000);
    }
  }, [time]);

  return [time, setTime, finish, setFinish] as const; // 반환
};

export default useTimer;

import { useEffect, useState } from "react";

export default function Timer({ setStop, numberQue }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      return setStop(true);
    }

    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, setStop]);

  useEffect(() => {
    setTimer(30);
  }, [numberQue]);

  return <div>{timer}</div>;
}

import React, { useState, useEffect, useRef } from 'react';

const Child = React.memo(() => {
  console.log('render Child');
  return <p>Child</p>;
});

const Memo2 = () => {
  const [timeLeft, setTimeLeft] = useState(100);
  const timerRef = useRef(0);
  const timeLeftRef = useRef(timeLeft);

  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  const tick = () => {
    if (timeLeftRef.current === 0) {
      clearInterval(timerRef.current);
      return;
    }
    setTimeLeft(prevTime => prevTime - 1);
  };

  const start = () => {
    timerRef.current = window.setInterval(tick, 10);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTimeLeft(100);
  };

  return (
    <>
      <button onClick={start}>start</button>
      <button onClick={reset}>reset</button>
      <p>Memo2: {timeLeft}</p>
      <Child />
    </>
  );
};
export default Memo2;
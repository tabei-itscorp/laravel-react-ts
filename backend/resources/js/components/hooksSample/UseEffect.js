import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(document.getElementById('effectHook').innerText);
  });

  return (
    <>
      <p id="effectHook">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};
export default UseEffect;
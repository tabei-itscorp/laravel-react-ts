import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const htmlElement = document.getElementById('effectHook');
    if (htmlElement != null) {
      console.log(htmlElement.innerText);
    } else  {
      console.log('HTMLElement is not found.');
    }
  });

  return (
    <>
      <p id="effectHook">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};
export default UseEffect;
import React, { useState, useCallback } from 'react';

// メモ化したコンポーネント
const Child = React.memo(function Child({handleClick}) {
  console.log('render Child');
  return <button onClick={handleClick}>Click</button>;
});

const UseCallback = () => {
  console.log('render UseCallback');

  const [count, setCount] = useState(0);

  // 関数をメモ化
  //（メモ化したコンポーネントにて使用する。
  // メモ化してないコンポーネントで使っても意味がない）
  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  );
};
export default UseCallback;
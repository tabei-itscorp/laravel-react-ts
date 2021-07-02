import React, { useState, useCallback } from 'react';

type ChildProps = {
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// メモ化したコンポーネント
const Child = React.memo((childProps: ChildProps) => {
  console.log('render Child');
  return <button onClick={childProps.handleOnClick}>Click</button>;
});

const UseCallback = () => {
  console.log('render UseCallback');

  const [count, setCount] = useState(0);

  // 関数をメモ化
  //（メモ化したコンポーネントにて使用する。
  // メモ化してないコンポーネントで使っても意味がない）
  const handleOnClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleOnClick={handleOnClick} />
    </>
  );
};
export default UseCallback;
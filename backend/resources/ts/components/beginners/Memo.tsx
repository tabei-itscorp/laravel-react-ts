import React, { useState } from 'react';

type ChildProps = {
  count: number
}

const Child = React.memo((childProps: ChildProps) => {
  let i = 0;
  // かなりの時間がかかる処理
  while (i < 1000000000) i++;
  console.log('render Child');
  return <p>Child: {childProps.count}</p>;
});

const Memo = () => {
  console.log('render Memo');

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>Count up Memo Count</button>
      <button onClick={() => setCount2(count2 + 1)}>Count up Child Count</button>
      <p>Memo: {count1}</p>
      <Child count={count2} />
    </>
  );
};
export default Memo;
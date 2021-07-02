import React, { useState, useMemo } from 'react';

const UseMemo2 = () => {
  console.log('render UseMemo2');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 引数の数値を2倍にして返す
  // ただし、無駄なループをしているので計算にかなりの時間を要する
  const double = (count: number) => {
    let i = 0;
    while (i < 10000000000) i++;
    return count * 2;
  };

  // 描画結果（計算結果）をメモ化
  // 第2引数にcount2を渡すことにより、count2が更新されたときだけ再描画される
  const Counter = useMemo(() => {
    console.log('render Counter');
    const doubledCount = double(count2);

    return (
      <p>
        Counter: {count2}, {doubledCount}
      </p>
    );
  }, [count2]);

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      {Counter}
      <button onClick={() => setCount2(count2 + 1)}>Increment count1</button>
    </>
  );
};
export default UseMemo2;
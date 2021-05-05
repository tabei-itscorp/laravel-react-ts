import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 引数の数値を2倍にして返す
  // ただし、無駄なループをしているので計算にかなりの時間を要する
  const double = (count) => {
    let i = 0;
    while (i < 10000000000) i++;
    return count * 2;
  };

  // この書き方だとcount1が更新されたときもdouble関数が実行されるため時間がかかる
  // const doubledCount = double(count2);

  // useMemoを使い、第2引数にcount2を指定することでcount1が更新されたときは
  // double関数が呼び出されないため、時間がかからずに済む
  const doubledCount = useMemo(() => double(count2), [count2]);

  return (
    <>
      <h2>Increment count1</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <h2>Increment count2</h2>
      <p>Counter: {count2}, {doubledCount}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  );
};
export default UseMemo;
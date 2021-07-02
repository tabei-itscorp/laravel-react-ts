import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(10);
  const [vote, setVote] = useState({kinoko: 0, takenoko: 0});
  const [items, setItems] = useState([{name: 'きのこ'}]);

  //----------
  // (1)
  const decrement = () => {
    // setCount(count - 1);
    // 以下のような書き方も可能。
    // これならばロジックをコンポーネント外に切り出すことができる。
    setCount((currentCount) => currentCount - 1);
  };

  const increment = () => {
    // setCount(count + 1);
    setCount((currentCount) => currentCount + 1);
  };

  //----------
  // (2)
  const voteKinoko = () => {
    setVote({...vote, kinoko: vote.kinoko + 1});
  };

  const voteTakenoko = () => {
    setVote({...vote, takenoko: vote.takenoko + 1});
  };

  //----------
  // (3)
  const addItem = () => {
    const newItem = {
      name: Math.random() > 0.5 ? 'きのこ' : 'たけのこ'
    };
    setItems([...items, newItem]);
  };

  const deleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* (1) */}
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      <hr />

      {/* (2) */}
      <p>きのこ：{vote.kinoko}</p>
      <p>たけのこ：{vote.takenoko}</p>
      <button onClick={voteKinoko}>きのこ</button>
      <button onClick={voteTakenoko}>たけのこ</button>

      <hr />

      {/* (3) */}
      <button onClick={addItem}>「きのこ」か「たけのこ」を追加</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => deleteItem(index)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default UseState;
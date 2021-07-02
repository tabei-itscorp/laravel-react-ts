import React, { ContextType, useEffect } from 'react';

const Count = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);

  React.useEffect(() => {
    console.info(`You clicked ${count} times`);
    console.info(`You clicked2 ${count2} times`);
  }, [count, count2]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* <p id="effectHook"></p> */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>click</button>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount2(prevCount => prevCount + 1)}>click</button>
      <p>Count3: {count3}</p>
      <button onClick={() => setCount3(prevCount => prevCount + 1)}>click</button>
    </div>
  );
};

const CountDown = () => {
  const [visible, setVisible] = React.useState<boolean>(true);
  const LIMIT = 60;

  const Timer = () => {
    const [timeLeft, setTimeLeft] = React.useState(LIMIT);

    const reset = () => {
      setTimeLeft(LIMIT);
    };

    const tick = () => {
      console.log('tick');
      setTimeLeft(prevTime => prevTime === 0 ? LIMIT : prevTime - 1);
    };

    React.useEffect(() => {
      console.log('create Timer');
      const timerId = setInterval(tick, 1000);

      return () => {
        console.log('cleanup Timer');
        clearInterval(timerId);
      };
    }, []);

    return (
      <div>
        <p>time: {timeLeft}</p>
        <button onClick={reset}>reset</button>
      </div>
    );
  };

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>toggle Timer</button>
      {visible ? <Timer /> : ''}
    </div>
  );
};

const UseMemo = () => {
  const [count1, setCount1] = React.useState<number>(0);
  const [count2, setCount2] = React.useState<number>(0);

  // 無駄に時間がかかる処理
  const double = (count: number): number => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return count * 2;
  };

  // メモ化された値を再利用する方法
  const doubleCount = React.useMemo(() => {
    double(count1)
  }, [count1] );

  // // 再利用しない方法
  // const doubleCount = double(count1);

  return (
    <div>
      <p>Count1: {count1}</p>
      <p>DoubleCount: {doubleCount}</p>
      <button onClick={() => setCount1(count1 + 1)}>increment1</button>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>increment2</button>
    </div>
  );
};

const UseCallback = () => {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  type ButtonProps = {
    id: string,
    handleOnClick: (event: React.MouseEvent<HTMLElement>) => void
  }

  const Button = React.memo(function button({ id, handleOnClick }: ButtonProps) {
    React.useEffect(() => {
      console.log(`render ${id}`);
    });
    return <button onClick={handleOnClick}>{id}</button>
  });

  const increment1 = React.useCallback(() => {
    setCount1(count1 + 1)
  }, [count1]);

  const increment2 = React.useCallback(() => {
    setCount2(count => count + 1)
  }, []);

  return (
    <div>
      <p>{count1}</p>
      <Button id={'increment1'} handleOnClick={increment1} />
      <p>{count2}</p>
      <Button id={'increment2'} handleOnClick={increment2} />
    </div>
  );
};

type Value = {
  name: string,
  handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const [count, setCount] = React.useState(0);

const val: Value = {
  name: 'soarflat',
  handleOnClick: () => setCount(count => count + 1),
};

const MyContext = React.createContext(val);

const UseContext = () => {
  return (
    <div>
      <p>count: {count}</p>
      <MyContext.Provider value={val}>
        <ChildComponent />
      </MyContext.Provider>
    </div>
  )
};

const ChildComponent = () => {
  return <GrandChildComponent />
};

const GrandChildComponent = (): JSX.Element => {
  const context = React.useContext(MyContext);
  return (
    <div>
      <p>{context.name}</p>
      <button onClick={context.handleOnClick}>increment</button>
    </div>
  );
};

const UseRef = () => {
  const inputEl = React.useRef<HTMLInputElement>(null!);
  const handleOnClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={handleOnClick}>input要素にフォーカス移動</button>
    </div>
  );
};

const UseRef2 = () => {
  const [count, setCount] = React.useState(0);
  const prevCountRef = React.useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <div>
      <p>count: {count}, before: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

/**
 * カスタムフック
 */
const useCounter = (initialCounter: number) => {
  const [count, setCount] = React.useState(initialCounter);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

const UseCustomHook: React.FC = () => {
  const counter = useCounter(0);
  const counter10 = useCounter(10);

  return (
    <div>
      <p>counter: {counter.count}</p>
      <button onClick={counter.decrement}>-</button>
      <button onClick={counter.increment}>+</button>

      <p>counter10: {counter10.count}</p>
      <button onClick={counter10.decrement}>-</button>
      <button onClick={counter10.increment}>+</button>
    </div>
  );
};

const Hooks = () => {
  return (
    <>
      <Count />
      <hr />
      <CountDown />
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
      <hr />
      <UseContext />
      <hr />
      <UseRef />
      <hr />
      <UseRef2 />
      <hr />
      <UseCustomHook />
    </>
  );
};
export default Hooks;
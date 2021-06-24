import React from 'react';
// import { add } from 'lodash';

type Name = {
  firstName: string
  lastName: string
}

type IsReact = {
  isReact: boolean
}

const Hello: React.FC<Name> = ({ firstName, lastName }) => {
  const url = 'https://reactjs.org/';
  return (
    <div>
      <p>Hello {firstName} {lastName}!!</p>
      {/* <p>1 + 3 = {add(1, 3)}</p> */}
      <a href={url}>React</a>
    </div>
  )
};

const JsFramework: React.FC<IsReact> = ({ isReact }) => {
  if (isReact) {
    return <p>React</p>;
  }
  return <p>Vue.js</p>;
};

const Books: React.FC = () => {
  const books = [
    { id: 1, title: 'React.js&Next.js超入門'},
    { id: 2, title: 'React開発 現場の教科書'},
    { id: 3, title: 'Reactビギナーズガイド'},
  ];
  return (
    <ul>
      {books.map(book =>
        <li key={book.id}>{book.title}</li>
      )}
    </ul>
  )
};

const ConsoleInfo: React.FC = () => {
  const handleClick = () => {
    return () => console.info('button clicked');
  };

  return (
    <button onClick={handleClick()}>click</button>
  )
};

const Sub = () => {
  const name = {
    firstName: 'Kanako',
    lastName: 'Monota',
  };
  const isReact = true;

  return (
    <>
      <Hello {...name} />
      <hr />
      <JsFramework isReact={isReact} />
      <hr />
      <Books />
      <hr />
      <ConsoleInfo />
    </>
  )
};
export default Sub;
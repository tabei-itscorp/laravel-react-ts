import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <>Hello World!!</>;
};

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hello = () => {
  const [hello, setHello] = useState('');

  useEffect(() => {
    getHello()
  }, []);

  const getHello = async() => {
    try {
      const response = await axios.get('/api/hello');
      setHello(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <p>{hello}</p>
    </>
  );
};
export default Hello;
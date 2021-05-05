import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseEffect2 = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true);
      const result = await axios.get('/api/bookList');
      setBooks(result.data.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>書名</th>
              <th>価格</th>
              <th>出版社</th>
              <th>刊行日</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.price}</td>
                <td>{book.publisher}</td>
                <td>{book.published}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
export default UseEffect2;
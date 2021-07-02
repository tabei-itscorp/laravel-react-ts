import React, { useState, useEffect } from 'react';
import axios from 'axios';

type BookType = {
  id: number,
  isbn: string,
  title: string,
  price: number,
  publisher: string,
  published: Date
}

const BookList = () => {
  const [books, setBooks] = useState<BookType[]>([]);

  // useEffect(() => {
  //   axios
  //     .get('/api/getbooks')
  //     .then((res) => {
  //       setBooks(res.data.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  useEffect(() => {
    getBooks()
  }, []);

  const getBooks = async() => {
    try {
      const response = await axios.get('/api/bookList');
      console.log(`response:${response.data}`);
      setBooks(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <table>
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
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.price}</td>
                <td>{book.publisher}</td>
                <td>{book.published}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default BookList;
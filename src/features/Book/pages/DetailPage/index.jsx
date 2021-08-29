import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bookApi from '../../../../api/bookApi';

function DetailPage(props) {
  const params = useParams();
  const id = params['bookId']
  const [book, setBook] = useState({});

  useEffect( () => {
    const fetchBook = async() => {
      const bookData = await bookApi.get(id);
      setBook(bookData['book'])
    };
    fetchBook();
  }, [id]);

  return (
    <div>
      <h3>Book Detail Page</h3>
      <table>
        <tbody>
          <tr>
            <td><strong>ID</strong></td>
            <td>{book.id}</td>
          </tr>
          <tr>
            <td><strong>Title</strong></td>
            <td>{book.title}</td>
          </tr>
          <tr>
            <td><strong>Author</strong></td>
            <td>{book.author}</td>
          </tr>
          <tr>
            <td><strong>Publisher</strong></td>
            <td>{book.publisher}</td>
          </tr>
          <tr>
            <td><strong>Gener</strong></td>
            <td>{book.genre}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailPage;
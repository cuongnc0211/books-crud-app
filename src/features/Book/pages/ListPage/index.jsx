import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import bookApi from '../../../../api/bookApi';
import BookContext from '../../BookContext';
import BookFilter from '../../components/BookFilter';
import BookItem from '../../components/BookItem';

ListPage.propTypes = {
  books: PropTypes.array,
};

function ListPage(props) {
  const bookMeta = useContext(BookContext);
  console.log(bookMeta)
  const {page, searchKeyword} = bookMeta
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBook = async() => {
      const params = { 
          page: `${page}`,
          q: `${searchKeyword}`
      };
      const bookList = await bookApi.getAll(params);
      setBooks(bookList['books'])
    };
    fetchBook();
  }, [page, searchKeyword]);

  return (
    <div>
      <h3>Book List Page</h3>

      <BookFilter />
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Genre</th>
            <th>Action</th>
          </tr>
          {
            books.map((book, index) => (
              <tr key={book.id}>
                <BookItem book={book}></BookItem>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;
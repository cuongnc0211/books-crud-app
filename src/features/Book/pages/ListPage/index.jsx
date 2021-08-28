import React from 'react';
import PropTypes from 'prop-types';
import BookItem from '../../components/BookItem';
import BookFilter from '../../components/BookFilter';

ListPage.propTypes = {
  books: PropTypes.array,
  handleFilter: PropTypes.func
};

function ListPage(props) {
  const {books, handleFilter} = props;

  return (
    <div>
      <h3>Book List Page</h3>

      <BookFilter handleFilter={handleFilter} />
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
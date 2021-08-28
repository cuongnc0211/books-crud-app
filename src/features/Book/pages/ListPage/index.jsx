import React from 'react';
import PropTypes from 'prop-types';
import BookItem from '../../components/BookItem';

ListPage.propTypes = {
  books: PropTypes.array
};

function ListPage(props) {
  const {books} = props;

  return (
    <div>
      <h3>Book List Page</h3>

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
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
      <table>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Genre</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            books.map((book, index) => (
              <BookItem book={book}></BookItem>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;
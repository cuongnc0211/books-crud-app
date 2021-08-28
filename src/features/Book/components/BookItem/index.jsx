import React from 'react';
import PropTypes from 'prop-types';

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

function BookItem(props) {
  const { book } = props;
  return (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.publisher}</td>
      <td>{book.genre}</td>
    </tr>
  );
}

export default BookItem;
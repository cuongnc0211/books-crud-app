import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

function BookItem(props) {
  const { book } = props;
  const match = useRouteMatch();

  return (
    <Fragment>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.publisher}</td>
      <td>{book.genre}</td>
      <td><Link to={`${match.path}/${book.id}`}>Detail</Link></td>
    </Fragment>
  );
}

export default BookItem;
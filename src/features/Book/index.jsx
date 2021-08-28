import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import bookApi from '../../api/bookApi';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

// import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import DetailPage from './pages/DetailPage';
// import ListPage from './pages/ListPage';

function BookFeature(props) {
  const match = useRouteMatch();
  // const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBook = async() => {
      const params = {
          page: `${page}`,
      };
      const bookList = await bookApi.getAll(params);
      setPage(bookList['meta'].current_page)
      setBooks(bookList['books'])

      console.log(bookList);
    };
    fetchBook();
  }, [page]);

  return (
    <div>
      <h2>Book feature</h2>

      <Switch>
        <Route
          path={match.path}
          component={() => <ListPage books={books}/>}
          exact
        />
        <Route path={`${match.path}/:bookId`} component={DetailPage}></Route>
      </Switch>
    </div>
  );
}

export default BookFeature;
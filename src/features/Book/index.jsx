import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { BookProvider } from './BookContext';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

// import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import DetailPage from './pages/DetailPage';
// import ListPage from './pages/ListPage';

function BookFeature(props) {
  const match = useRouteMatch();
  // const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [searchKeyword, setSearchKeyword] = useState('')

  const bookMeta = {
    page: page,
    setPage: setPage,
    searchKeyword: searchKeyword,
    setSearchKeyword: setSearchKeyword,
  }

  return (
    <BookProvider value={bookMeta}>
      <h2>Book feature</h2>

      <Switch>
        <Route
          path={match.path}
          component={ListPage}
          exact
        />
        <Route path={`${match.path}/:bookId`} component={DetailPage}></Route>
      </Switch>
    </BookProvider>
  );
}

export default BookFeature;
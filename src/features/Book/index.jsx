import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'
import { useRouteMatch } from 'react-router-dom';

// import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import DetailPage from './pages/DetailPage';
// import ListPage from './pages/ListPage';

BookFeature.propTypes = {
  
};

function BookFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Book feature</h2>

      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:bookId`} component={DetailPage}></Route>
      </Switch>
    </div>
  );
}

export default BookFeature;
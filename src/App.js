import { NavLink, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import BookFeature from './features/Book';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <p><NavLink to="/" activeClassName="active-menu">Home</NavLink></p>
      <p><NavLink to="/books" activeClassName="active">Books</NavLink></p>

      <Switch>
        <Route path="/books" component={BookFeature}></Route>
      </Switch>
    </div>
  );
}

export default App;

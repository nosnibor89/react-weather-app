import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Main from './weather/Main';

// import logo from './logo.svg';
import './App.scss';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Main/>
      </Router>
    );
  }
}

export default App;

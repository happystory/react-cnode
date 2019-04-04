import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { hot } from 'react-hot-loader/root';

import Routes from './config/router';
import appState from './store/app-state';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Provider appState={appState}>
        <BrowserRouter>
          <div>
            <Link to="/">首页</Link>
            <br />
            <Link to="/detail">详情页</Link>
          </div>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(App);

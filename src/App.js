import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Routes from './config/router';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">首页</Link>
          <br />
          <Link to="/detail">详情页</Link>
        </div>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default hot(App);

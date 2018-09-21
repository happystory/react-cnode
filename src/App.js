import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import Routes from './config/router';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Link to="/">首页</Link>
          <br />
          <Link to="/detail">详情页</Link>
        </div>
        <Routes />
      </>
    );
  }
}

export default hot(module)(App);

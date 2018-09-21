import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import TopicList from '../views/topic-list/TopicList';
import TopicDetail from '../views/topic-detail/TopicDetail';

export default () => [
  <Route exact path="/" key="home" render={
    () => <Redirect to="/list" />
  } />,
  <Route path="/list" key="list" component={TopicList} />,
  <Route path="/detail" key="detail" component={TopicDetail} />,
];

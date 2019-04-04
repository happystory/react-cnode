import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopicList from '../views/TopicList/TopicList';
import TopicDetail from '../views/TopicDetail/TopicDetail';

export default () => [
  <Route path="/" exact key="home" render={() => <Redirect to="/list" />} />,
  <Route path="/list" key="list" component={TopicList} />,
  <Route path="/detail" key="detail" component={TopicDetail} />,
];

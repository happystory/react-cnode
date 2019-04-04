import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopicList from '../views/TopicList/TopicList';
import TopicDetail from '../views/TopicDetail/TopicDetail';
import Test from '../views/Test/Test';

export default () => [
  <Route path="/" exact key="home" render={() => <Redirect to="/list" />} />,
  <Route path="/list" key="list" component={TopicList} />,
  <Route path="/detail" key="detail" component={TopicDetail} />,
  <Route path="/test" key="test" component={Test} />,
];

import React, { Component } from 'react';
import {
  observer,
  inject,
} from 'mobx-react';
import PropTypes from 'prop-types';
import { AppState } from '../../store/app-state';

const propTypes = {
  appState: PropTypes.instanceOf(AppState),
};

@inject('appState') @observer
class TopicList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.appState.add();
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>{this.props.appState.msg}</div>
        This is TopicList
      </div>
    );
  }
}

TopicList.propTypes = propTypes;

export default TopicList;

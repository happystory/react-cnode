import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import { AppState } from '../../store/app-state';

@inject('appState')
@observer
class TopicList extends Component {
  static propTypes = {
    appState: PropTypes.instanceOf(AppState).isRequired,
  }

  changeName = (event) => {
    const { appState } = this.props;
    appState.changeName(event.target.value);
  }

  render() {
    const { appState } = this.props;

    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <span>{appState.msg}</span>
      </div>
    );
  }
}

export default TopicList;

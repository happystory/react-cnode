/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
  getTopics = () => {
    axios.get('/api/topics')
      .then((resp) => {
        console.log(resp);
      });
  }

  login = () => {
    axios.post('/api/user/login', {
      accessToken: '2b1e5a56-ac23-4fef-a977-455af0ba8f7b',
    })
      .then((resp) => {
        console.log(resp);
      });
  }

  markAll = () => {
    axios.post('/api/message/mark_all?needAccessToken=true')
      .then((resp) => {
        console.log(resp);
      });
  }


  render() {
    return (
      <div>
        <button onClick={this.getTopics}>topics</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    );
  }
}

export default Test;

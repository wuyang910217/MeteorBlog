import React, { Component } from 'react';

export default class AppLayout extends Component {
  render() {
    return (
      <div>
        <h1>this is mainlayout.</h1>
        {this.props.content()}
      </div>
    );
  }
}

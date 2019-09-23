import React, { Component } from 'react';

export default class SingleRoom extends Component {
  render() {
    return (
      <div>
        <h2>
          Hello from single room page: slug ${this.props.match.params.slug}
        </h2>
      </div>
    );
  }
}

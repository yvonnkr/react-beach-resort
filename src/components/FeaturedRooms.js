import React, { Component } from 'react';
import { RoomContext } from '../context';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // let value = this.context;
    const { greeting, name } = this.context;
    return (
      <h2>
        {greeting} {name} -- featured rooms
      </h2>
    );
  }
}

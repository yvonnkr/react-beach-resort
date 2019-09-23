import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms: rooms, loading } = this.context;

    return (
      <>
        <h2>Featured rooms</h2>
        <Room />
        <Loading />
      </>
    );
  }
}

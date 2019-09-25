import React, { Fragment } from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({ context }) {
  const { rooms, loading, sortedRooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <h2>hello from Rooms Container</h2>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </Fragment>
  );
}

export default withRoomConsumer(RoomContainer);

//=====================================================================
// import React, { Fragment } from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { rooms, loading, sortedRooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <Fragment>
//             <h2>hello from rooms container</h2>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </Fragment>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;

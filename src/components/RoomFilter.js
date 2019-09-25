import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

//get all unique  values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets
  } = context;

  //get unique types
  let types = getUnique(rooms, 'type');

  //add all
  types = ['all', ...types];

  //map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  //guests/people
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}

        {/* guests */}
        <div className='form-group'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
      </form>
    </section>
  );
};

export default RoomFilter;

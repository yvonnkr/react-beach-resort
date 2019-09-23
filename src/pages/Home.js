import React, { Fragment } from 'react';
import Hero from './../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Services from '../components/Services';

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='delux rooms starting from £299'
        >
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </Fragment>
  );
};

export default Home;

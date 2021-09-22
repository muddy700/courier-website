import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title='on-time delivery'
          subtitle='our services starting at $299'
        >
          <Link to='/rooms' className='btn-primary'>
            track you package
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}

export default Home;

import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
// import { Link } from 'react-router-dom';
// import RoomContainer from '../components/RoomContainer';

const News = () => {
    return (
    <React.Fragment>
      <Hero hero='roomsHero'>
        <Banner title='news'>
          {/* <Link to='/' className='btn-primary'>
            back home
          </Link> */}
        </Banner>
      </Hero>
      {/* <RoomContainer /> */}
    </React.Fragment>
    )
}

export default News

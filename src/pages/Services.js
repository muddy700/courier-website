import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Service from '../components/Services'
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import RoomContainer from '../components/RoomContainer';
const Services = () => {
    return (
    <React.Fragment>
      <Hero hero='roomsHero'>
        <Banner title='services'>
        </Banner>
        </Hero>
        <Card style={{ paddingTop: '5%'}}>
          <Service />
        </Card>
    </React.Fragment>
    )
}

export default Services

import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktails',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corporis!'
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corporis!'
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corporis!'
      },
      {
        icon: <FaBeer />,
        title: 'strongest beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corporis!'
      }
    ]
  };

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className='service'>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;

import React from 'react';
import Title from './Title';
import { Image, Row, Col, Card } from 'react-bootstrap'
import plane1 from '../images/plane4.jpg'

const Footer = () => {
    return (
      <section className='footer-container'>
        <Title title='Footer' />
        <Row>
            <Col md={4} >
              <Card style={{marginBottom: '50px'}}>
                    <Card.Title>Footer children</Card.Title>
              </Card>
            </Col>
        </Row>
      </section>
    )
}

export default Footer

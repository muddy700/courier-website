import React from 'react';
import Title from './Title';
import { Image, Row, Col, Card } from 'react-bootstrap'
import plane1 from '../images/plane4.jpg'
import plane2 from '../images/plane5.jpg'
import plane3 from '../images/plane6.jpg'

const Services = () => {
  const servicesArray = [
    {id: 1, name: 'Service-1', pic: plane1},
    {id: 2, name: 'Service-2', pic: plane2},
    {id: 3, name: 'Service-3', pic: plane3},
    {id: 4, name: 'Service-4', pic: plane2},
  ]

    return (
      <section className='services-container'>
        <Title title='Our Services' />
        <Row>
          {servicesArray.map(item => {
            return (
            <Col md={4} key={item.id}>
              <Card style={{marginBottom: '50px'}}>
                  <Card.Img src={item.pic} style={{ width: '100%', height: '300px' }}/>
                  <Card.ImgOverlay>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.ImgOverlay>
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
              </Card>
            </Col>
            )
          })}
        </Row>
      </section>
    )
}

export default Services

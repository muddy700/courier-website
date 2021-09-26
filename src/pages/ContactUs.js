import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import MiniTitle from '../components/MiniTitle'

const ContactUs = () => {
    return (
    <React.Fragment>
      <Hero hero='roomsHero'>
        <Banner title='contact us'>
        </Banner>
      </Hero>
        <Card style={{ backgroundColor: 'inherit', paddingTop: '5%', border: 'none' }}>
          <MiniTitle title="Send us a message" />
          <Row style={{width: '100%'}}>
          <Col md={{span: 4, offset: 4}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter message title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={6} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
            </Col>
            </Row>
        </Card>
    </React.Fragment>
    )
}

export default ContactUs

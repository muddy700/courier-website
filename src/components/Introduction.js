import React from 'react';
import Title from './Title';
import { Image, Row, Col } from 'react-bootstrap'
import pic from '../images/plane7.jpg'

const Introduction = () => {
    return (
      <section className='introduction-card'>
        <Row style={{width: '100%'}}>
            <Col md={5}>
                <Title title='The Company Name' />
                <p className="introduction-phrase">
                    <p>Is a registered non-governmental organization (NGO) that is innovating for impact and connecting Tanzanians for good.</p>
                    <p>Launched in 2006, the Vodacom Tanzania Foundation works collaboratively with a diverse set of expert Non-Governmental Organizations (NGOs) and Community Based Organization’s (CBOs) to support and complement development efforts by the Government of the United Republic of Tanzania.</p>
                    <h4>You Are Welcome</h4>
                </p>
            </Col>
                <Col md={7} >
                    {/* <div className="introduction-image"> */}
                    <Image src={pic} fluid rounded className="introduction-image"/>
                {/* </div> */}
            </Col>
        </Row>
      </section>
    )
}

export default Introduction

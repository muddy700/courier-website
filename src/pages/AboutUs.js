import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Card, Row, Col } from 'react-bootstrap';
import MiniTitle from '../components/MiniTitle'
import pic1 from '../images/plane1.jpg'
import man from '../images/WHITE MAN.jpeg'
import StaffCard from '../components/StaffCard';

const AboutUs = () => {
    return (
    <React.Fragment>
      <Hero hero='roomsHero'>
        <Banner title='about us'></Banner>
      </Hero>
      <Card style={{backgroundColor: 'inherit',  border: 'none'}}>
        <Row style={{backgroundColor: 'inherit', width: '100%', margin: 0, padding: '5% 0%'}}>
          <Col md={{ span: 6, offset: 3 }} xs={12} style={{ backgroundColor: 'inherit', }}>
            <Card style={{ backgroundColor: 'lightgray', borderRadius: '20px', padding: '2%', }}>
                <MiniTitle title='Who We Are' />
                <p style={{textAlign: 'center'}}>The-Company-Name is Tanzania’s leading communications company providing a wide range of services for consumers and enterprise including voice, data, messaging, financial services and Enterprise solutions</p>
                <p style={{textAlign: 'center'}}>The-Company-Name was listed on the Dar es Salaam Stock Exchange on 15 August 2017. The-Company-Name and its subsidiaries (together ‘the Group’) are majority owned by Vodacom Group Limited (75% holding), a company registered in South Africa, which in turn is majority owned by Vodafone Group PLC., a company based in the United Kingdom</p>
            </Card>
        </Col>
      </Row>
      <Row style={{ backgroundColor: 'inherit', padding: '3%', width: '100%' }}>
        <Col md={5} style={{ backgroundColor: 'inherit', }}>
              <MiniTitle title="Why Us" />
                {/* <p style={{textAlign: 'center'}}>The-Company-Name is Tanzania’s leading communications company providing a wide range of services for consumers and enterprise including voice, data, messaging, financial services and Enterprise solutions</p> */}
                <p style={{textAlign: 'center', fontSize: '1.2rem'}}>The-Company-Name was listed on the Dar es Salaam Stock Exchange on 15 August 2017. The-Company-Name and its subsidiaries (together ‘the Group’) are majority owned by Vodacom Group Limited (75% holding), a company registered in South Africa, which in turn is majority owned by Vodafone Group PLC., a company based in the United Kingdom</p>
        </Col>
        <Col md={{span: 6, offset: 1}} style={{ backgroundColor: 'inherit', }}>
          <Card.Img src={pic1} style={{height: '350px', borderRadius: '45px'}} />
        </Col>
      </Row>
      <Row style={{ backgroundColor: 'inherit', padding: '3%', width: '100%' }}>
          <MiniTitle title='Our Staff' />
            <StaffCard photo={man} name="John Smith" title="CEO" />
            <StaffCard photo={man} name="John Doe" title="Managing Director" />
            <StaffCard photo={man} name="John Walls" title="Operation Manager" />
      </Row>
      </Card>
    </React.Fragment>
    )
}

export default AboutUs

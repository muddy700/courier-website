import React from 'react';
import MiniTitle from './MiniTitle';
import {Row, Col, Card } from 'react-bootstrap'
import logo from '../images/pgimage.png'
import map from '../images/map.png'
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentDate = new Date();

    return (
      <section className='footer-container'>
        <Row style={{width: '100%'}}>
            <Col md={3} >
              <Card className="footer-cards"  style={{backgroundColor: 'inherit', placeItems: 'center', border: 'none'}}>
                <Card.Img src={logo} style={{ width: '70%', height: '200px' }}></Card.Img>
              </Card>
            </Col>
            <Col md={3} >
              <Card className="footer-cards" style={{backgroundColor: 'inherit', placeItems: 'center', border: 'none'}}>
              <MiniTitle title='Links' />
              <ul className="footer-links">
                <li className="footer-link-items">
                  <Link to='/'>COVID-19</Link>
                </li>
                <li className="footer-link-items">
                  <Link to='/about_us'>About Us</Link>
                </li>
                <li className="footer-link-items">
                  <Link to='/services'>Services</Link>
                </li>
                <li className="footer-link-items">
                  <Link to='/contact_us'>Contact Us</Link>
                </li>
                <li className="footer-link-items">
                  <Link to='/news'>News</Link>
                </li>
              </ul>
              </Card>
            </Col>
            <Col md={3} >
              <Card className="footer-cards"  style={{backgroundColor: 'inherit', placeItems: 'center', border: 'none'}}>
              <MiniTitle title='Contact Us' />
              <ul className="footer-links">
                <li className="footer-list-items">
                  <span><span role="img" aria-label="call-emoji">📞</span> 0717-963-697</span>
                </li>
                <li className="footer-list-items">
                  <span><span role="img" aria-label="call-emoji">✉</span> info@courier.com</span>
                </li>
                <li className="footer-list-items">
                  <span className="social-icons"><FaInstagram /></span>
                  <span className="social-icons"><FaLinkedin /></span>
                  <span className="social-icons"><FaTwitter /></span>
                </li>
              </ul>
              </Card>
            </Col>
            <Col md={3} >
              <Card className="footer-cards"  style={{backgroundColor: 'inherit', placeItems: 'center', border: 'none'}}>
              <MiniTitle title='Our Network' />
              <Card.Img src={map} style={{ width: '100%', height: '200px' }}></Card.Img>
              </Card>
            </Col>
        </Row>
        <Row style={{ width: '100%' }}>
          <div className="footer-text">
            Copyright&copy;{currentDate.getFullYear()} The Company Name. All rights Reserved.
          </div>
        </Row>
      </section>
    )
}

export default Footer

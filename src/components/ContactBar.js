import React from 'react';
import { Col, Dropdown } from 'react-bootstrap'
import '../styles/HomePage.css'

const ContactBar = () => {
    return (
        // <Row style={{width: '100%'}}>
        // <Col className="d-none d-md-block">
            <div className='contact__bar'>
                <Col md={{span:3, offset:2}}> 
                        <span> 
                            <span role="img" aria-label="emoji"> ✉ </span>
                            info@courier.com
                        </span> |
                        <span>
                            <span role="img" aria-label="emoji" > 📞 </span>
                            (255) 717 963 697
                        </span>
                </Col>
                <Col md={{span:2, offset:5}} className="d-none d-md-block">
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic" size="sm" style={{color: 'white'}}>
                            EN
                        </Dropdown.Toggle>

                    <Dropdown.Menu style={{ color: 'white', backgroundColor: 'darkblue'}}>
                        <Dropdown.Item style={{ color: 'white' }} href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item style={{ color: 'white' }} href="#/action-2">Swahili</Dropdown.Item>
                        <Dropdown.Item style={{ color: 'white' }} href="#/action-3">Arabic</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                </Col>
            </div>
        // </Row>
    )
}

export default ContactBar

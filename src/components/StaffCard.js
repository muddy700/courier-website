import React from 'react'
import { Card, Col } from 'react-bootstrap';

const StaffCard = ({photo, name, title}) => {
    return (
         <Col md={4} style={{ backgroundColor: 'inherit', marginTop: '5%' }}>
              <Card style={{backgroundColor: 'inherit', placeItems: 'center', border: 'none'}}>
                <Card.Img src={photo} style={{ height: '250px', width: '260px', borderRadius: '160px' }} />
                <Card.Title>{name}</Card.Title>
                <Card.Text>{title}</Card.Text>
              </Card>
           </Col>
    )
}

export default StaffCard

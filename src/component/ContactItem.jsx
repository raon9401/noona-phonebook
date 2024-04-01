import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({ item }) => {
    return (
        <Row className="contact-item-wrap">
            <Col lg={2}>
                <img
                    className='user-img'
                    src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_640.png" alt="user icon" />
            </Col>
            <Col lg={10} className='contact-item-info-text-wrap'>
                <Row>
                    <div>
                        User name : {item.name}
                    </div>
                    <div>
                        Phon number : {item.phoneNumber}
                    </div>
                </Row>
            </Col>
        </Row>
    )
}

export default ContactItem
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = () => {
    return (
        <Row>
            <Col lg={2}>
                <img
                    width={70}
                    src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_640.png" alt="user icon" />
            </Col>
            <Col lg={10}>
                <div>
                    user name
                </div>
                <div>
                    phon number
                </div>
            </Col>
        </Row>
    )
}

export default ContactItem
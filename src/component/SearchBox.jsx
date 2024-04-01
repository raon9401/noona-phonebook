import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const SearchBox = () => {
    return (
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="Search Name" />
            </Col>
            <Col lg={2}>
                <Button>찾기</Button>
            </Col>
        </Row>
    )
}

export default SearchBox
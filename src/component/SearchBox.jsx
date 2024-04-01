import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const SearchBox = () => {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();

    const searchByName = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });

    }

    return (
        <Form onSubmit={searchByName}>
            <Row>
                <Col lg={10}>
                    <Form.Control
                        type="text"
                        placeholder="Search Name"
                        onChange={(event) => setKeyword(event.target.value)}
                    />
                </Col>
                <Col lg={2}>
                    <Button type="submit">찾기</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox
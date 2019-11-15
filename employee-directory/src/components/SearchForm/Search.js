import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchForm(){
    return(
        <Form>
            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                <Col className="col-sm-8 offset-2">
                    <Form.Label>Search by Name</Form.Label>
                    <Form.Control as="input"/>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default SearchForm;
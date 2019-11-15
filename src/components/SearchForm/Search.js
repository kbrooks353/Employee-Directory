import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function SearchForm(props){
    return(
        <Form onSubmit={props.formSubmit}>
            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                <Col className="col-sm-8 offset-2">
                    <Form.Label>Search by Name</Form.Label>
                    <Form.Control as="input" onChange={props.inputChange}/>
                    <Button className="col-sm-2 offset-5" variant="primary" type="submit">
                    Submit
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default SearchForm;
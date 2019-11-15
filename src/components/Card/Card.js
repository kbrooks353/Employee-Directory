import React from "react";
import Card from "react-bootstrap/Card";

function EmployeeCard(props) {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                <Card.Title>{props.first} {props.last}</Card.Title>
                    <Card.Text>
                        Email: {props.email}
                </Card.Text>
                    <Card.Text>
                        Age: {props.dob}
                </Card.Text>
                    <Card.Text>
                        Phone #: {props.phone}
                </Card.Text>
                </Card.Body>
            </Card>
        )
   
    }


export default EmployeeCard;
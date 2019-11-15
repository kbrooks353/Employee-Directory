import React from "react";
import Card from "react-bootstrap/Card";

function EmployeeCard({ users }) {

    users.map(({ name, picture, phone, email, dob }) => {
        return (
            <Card>
                <Card.Img variant="top" src={picture.medium} />
                <Card.Body>
                <Card.Title>{name.first} {name.last}</Card.Title>
                    <Card.Text>
                        {email}
                </Card.Text>
                    <Card.Text>
                        {dob}
                </Card.Text>
                    <Card.Text>
                        {phone}
                </Card.Text>
                </Card.Body>
            </Card>
        )
    })
    }


export default EmployeeCard;
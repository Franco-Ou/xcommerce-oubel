import React from 'react';
import { Card } from "react-bootstrap";
import "./Item.css";


const Item = ({title, pictureUrl, description, price}) => {
    return (
        <>
        <Card className="card-style">
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body className="card-body-style">
                <Card.Title>{title}</Card.Title>
                <div>
                    <p>{description}</p>
                    <div>
                        <strong>{price}</strong>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </>
    )
}

export default Item;

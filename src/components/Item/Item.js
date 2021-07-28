import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "./Item.css";

const Item = ({ title, pictureUrl, description, price }) => {
  return (
    <>
      <Card className="card-style">
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body className="card-body-style">
          <Card.Title>{title}</Card.Title>
          <div>
            <p>{description}</p>
          </div>
          <div className="price-btn-container">
            <strong>{price}</strong>
            <Button variant="outline-primary" className="btn-detail">
              Ir a detalle
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;

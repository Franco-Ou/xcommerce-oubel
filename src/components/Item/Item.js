import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Item.css";

const Item = ({ title, pictureUrl, description, price, id }) => {

  const history = useHistory();

  const handleButtonClick = () => {
    history.push(`/detalle/${id}`);
  }

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
            <Button variant="outline-primary" className="btn-detail" onClick={() => handleButtonClick()}>
              Ir a detalle
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;

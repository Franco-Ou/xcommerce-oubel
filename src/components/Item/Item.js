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
        <Card.Img className="img-fluid" variant="top" src={pictureUrl} />
        <Card.Body className="card-body-style">
          <div className="card-title-container">
          <Card.Title>{title}</Card.Title>
          </div>
          <div className="card-description-container">
            <p>{description}</p>
          </div>
          <div className="card-price-container"> 
            <p><strong>{price}</strong></p>
          </div>
          <div className="btn-detail-container">           
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

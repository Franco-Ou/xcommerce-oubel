import React from 'react';
import "./CartItem.css";
import { Container, Row, Col, Image } from 'react-bootstrap';

const CartItem = ({ src, title, price, quantity }) => {
  return (
    <>
      <Container className="main-container">
        <Row>
          <Col md={3} xs={12}>
            <Image className="img-fluid" src={src} rounded />
          </Col>
          <Col md={4} className="container-description">
            <h4>{title}</h4>
            <h4>{price}</h4>
            <h4>Unidades seleccionadas: {quantity}</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartItem;

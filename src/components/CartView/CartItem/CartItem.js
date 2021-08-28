import React from 'react';

//Bootstrap y estilos
import "./CartItem.css";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

//Context
import { useCartContext } from '../../../context/cartContext/CartContext';

const CartItem = ({ src, title, price, quantity, id }) => {

  const { removeItemFromCart } = useCartContext();

  return (
    <>
      <Container className="main-container">
        <Row>
          <Col md={3} xs={12}>
            <Image className="img-fluid" src={src} rounded />
          </Col>
          <Col md={4} className="container-description">
            <h4>{title}</h4>
            <h4>${price}.00</h4>
            <h4>Unidades seleccionadas: {quantity}</h4>
          </Col>
          <Col>
            <Button variant="outline-primary" className="btn-remove-item" onClick={() => removeItemFromCart(id)}>Quitar</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartItem;

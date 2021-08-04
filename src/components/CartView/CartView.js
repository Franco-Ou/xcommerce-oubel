import React from "react";
import "./CartView.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext/CartContext";

const CartView = () => {
  const { itemsInCart } = useCartContext();

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 className="main-title mt-5 mb-5">Carrito de compras</h1>

      {itemsInCart.map((product) => {
        return (
          <Container className="main-container">
            <Row>
              <Col md={3} xs={12}>
                <Image
                  className="img-fluid"
                  src={product.item.item[0].pictureUrl}
                  rounded
                />
              </Col>
              <Col md={4} className="container-description">
                <h4>{product.item.item[0].title}</h4>
                <h4>{product.item.item[0].price}</h4>
                <h4>Cantidad de unidades: {product.quantity}</h4>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default CartView;

 /*         {console.log("Items in cart devuelve --> ", itemsInCart)}
        {console.log("product price: " + product.item.item[0].price)} */
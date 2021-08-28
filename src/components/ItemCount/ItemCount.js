import React from "react";

//Bootstrap y estilos
import { Button, Container, Col, Row } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ counter, setCounter, myStock, handleAddCarrito, handleUnidades }) => {

  const handleAdd = () => {
    if (counter < myStock) {
      setCounter(counter + 1);
    }
  };

  const handleSubtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <Container className="btn-container">
      <Row>
        <Col md={12}>
          <h3>
            {counter} {handleUnidades()}
          </h3>
        </Col>
          <Col md={6} sm={6}>
            <Button
              className="btn mt-4 mb-4"
              variant="outline-secondary"
              onClick={() => handleSubtract()}
              style={{ margin: "0 auto" }}
            >
              -
            </Button>
          </Col>
          <Col md={6} sm={6}>
            <Button
              className="btn mt-4 mb-4"
              variant="outline-secondary"
              onClick={() => handleAdd()}
              style={{ margin: "0 auto" }}
            >
              +
            </Button>
          </Col>
        <Col>
          <Button
            className="btn"
            variant="outline-secondary"
            onClick={() => handleAddCarrito()}
            style={{ margin: "0 auto" }}
          >
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCount;
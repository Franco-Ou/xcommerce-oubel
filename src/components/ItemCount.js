import React, { useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ counter, setCounter, stock }) => {
  //Se ejecuta cada vez que se modifica el counter para actualizar la palabra unidad o unidades según la cantidad
  useEffect(() => {
    handleUnidades();
  }, [counter]);

  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleSubtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  //Maneja palabra unidad o unidades según la cantidad de unidades
  const handleUnidades = () => {
    if (counter === 1) {
      return "unidad";
    } else {
      return "unidades";
    }
  };

  const handleAddCarrito = () => {
    alert(`Usted agregó ${counter} ${handleUnidades()} al carrito`);
  };

  return (
    <div>
      <Container className="btn-container">
        <Row className="counter-title-container">
          <Col>
            <h3>
              {counter} {handleUnidades()}
            </h3>
          </Col>
        </Row>
        <Row className="add-subtract-row">
          <Button
            className="btn"
            variant="outline-primary"
            onClick={() => handleSubtract()}
          >
            -
          </Button>
          <Button
            className="btn"
            variant="outline-primary"
            onClick={() => handleAdd()}
          >
            +
          </Button>
        </Row>
        <Row>
          <Button
            className="btn"
            variant="outline-primary"
            onClick={() => handleAddCarrito()}
          >
            Agregar al carrito
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ItemCount;

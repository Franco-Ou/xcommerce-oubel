import React, { Fragment, useState } from "react";

//Components
import ItemCount from "../../ItemCount/ItemCount";

//React-router
import { Link } from "react-router-dom";

//Context
import { useCartContext } from "../../../context/cartContext/CartContext";

//Bootstrap y estilos
import { Button, Container, Row, Col } from "react-bootstrap";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [unitsAddedMessage, setUnitsAddedMessage] = useState("");
  const [unitsAdded, setUnitsAdded] = useState(0);
  const [counter, setCounter] = useState(1);
  const [myStock, setMyStock] = useState(5);
  const { title, description, price, pictureUrl } = item || {};  
  const { addItemToCart } = useCartContext();

  const handleAddCarrito = () => {
    addItemToCart(item, counter);  
    setUnitsAdded(counter);
    setUnitsAddedMessage(`Usted agregó ${counter} ${handleUnidades()} al carrito`);
    setMyStock(myStock - counter);
  }

    //Maneja palabra unidad o unidades según la cantidad de unidades
    const handleUnidades = () => {
      if (counter === 1) {
        return "unidad";
      } else {
        return "unidades";
      }
    };


  return (
    <Fragment>
      <h1 className="detail-title">{title}</h1>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <img
              className="img-fluid img-border"
              src={pictureUrl}
              alt="producto seleccionado"
              
            />
          </Col>
          <Col md={6} className="row">
            <Col md={6} sm={12}>
              <p>{description}</p>
              <p className="font-weight-bold">${price}.00</p>
            </Col>
            <Col md={6} sm={12}>
              {unitsAdded > 0 ? (
                <div className="units-btn-container">
                <p>{unitsAddedMessage}</p>
                <Link to="/carrito">
                  <Button className="btn" variant="outline-secondary">
                    Terminar compra
                  </Button>
                </Link>
                <Link to="/">                
                <p className="seguir-comprando">Seguir comprando</p>
                </Link>
                </div>
              ) : (
                <ItemCount
                  counter={counter}
                  setCounter={setCounter}
                  myStock={myStock}
                  handleAddCarrito={handleAddCarrito}
                  handleUnidades={handleUnidades}
                />
              )}
            </Col>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ItemDetail;

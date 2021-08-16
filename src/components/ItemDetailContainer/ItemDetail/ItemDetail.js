import React, { Fragment, useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";

//Context
import { useCartContext } from "../../../context/cartContext/CartContext";

//Bootstrap - CSS
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              className="img-fluid"
              src={pictureUrl}
              alt="producto seleccionado"
            />
          </div>
          <div className="col-12 col-md-6 py-5 row ">
            <div className="col-12 col-md-6">
              <p>{description}</p>
              <p className="font-weight-bold">${price}.00</p>
            </div>
            <div className="col-12 col-md-6">
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetail;

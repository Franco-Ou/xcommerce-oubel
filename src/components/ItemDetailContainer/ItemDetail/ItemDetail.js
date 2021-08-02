import React, { Fragment, useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ selectedItem }) => {
  const [isCounterSelected, setIsCounterSelected] = useState(false);
  const [unitsAddedMessage, setUnitsAddedMessage] = useState("");
  const { title, description, price, pictureUrl } = selectedItem[0] || {};

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
              <p className="font-weight-bold">{price}</p>
            </div>
            <div className="col-12 col-md-6">
              {isCounterSelected ? (
                <div className="units-btn-container">
                <p>{unitsAddedMessage}</p>
                <Link to="/carrito">
                  <Button className="btn" variant="outline-secondary">
                    Terminar compra
                  </Button>
                </Link>
                </div>
              ) : (
                <ItemCount
                  stock={5}
                  initial={1}
                  setIsCounterSelected={setIsCounterSelected}
                  setUnitsAddedMessage={setUnitsAddedMessage}
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

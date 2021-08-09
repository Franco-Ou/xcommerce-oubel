import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = ({ itemsInCartQuantity }) => {

  return (
    <>
      <div style={{ color: "white", fontSize: "1.2em", cursor: "pointer" }}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className={"notificacion-blur"}></div>
        <div className={"notification"}>{itemsInCartQuantity}</div>
      </div>
    </>
  );
};

export default CartWidget;

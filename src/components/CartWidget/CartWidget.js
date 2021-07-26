import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div style={{ color: "white", fontSize: "1.2em", cursor: "pointer" }}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

export default CartWidget;

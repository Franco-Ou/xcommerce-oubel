import React from "react";
import "./CartView.css";
import { useCartContext } from "../../context/cartContext/CartContext";
import CartItem from "../CartItem/CartItem";

const CartView = () => {
  const { itemsInCart } = useCartContext();

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 className="main-title mt-5 mb-5">Carrito de compras</h1>
      {itemsInCart.length > 0 ? itemsInCart.map((product) => {
        return (
          <CartItem 
          key={product.item.item[0].id}
          id={product.item.item[0].id}
          src={product.item.item[0].pictureUrl}
          title={product.item.item[0].title}
          price={product.item.item[0].price}
          quantity={product.quantity}
          />
        );
      }) : <h2 className="empty-cart-message">El Carrito está vacío</h2>}
    </div>
  );
};

export default CartView;
import React from "react";
import "./CartView.css";
import { useCartContext } from "../../context/cartContext/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const CartView = () => {
  const { itemsInCart, fullPurchasePrice } = useCartContext();

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 className="main-title mt-5 mb-5">Carrito de compras</h1>
      {itemsInCart.length > 0 ? (
        itemsInCart.map((product) => {
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
        })
      ) : (
        <div className="empty-cart-text-container">
          <h2 className="empty-cart-message">El Carrito está vacío</h2>
          <Link to="/">
            <span className="seguir-comprando-cart">Seguir comprando</span>
          </Link>
        </div>
      )}
      { itemsInCart.length > 0 && <h2 className="full-price-style">{`Precio total: $${fullPurchasePrice}`}</h2> }
    </div>
  );
};

export default CartView;
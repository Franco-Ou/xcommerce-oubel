import React from "react";
import "./CartView.css";
import { useCartContext } from "../../context/cartContext/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Button } from "react-bootstrap";

const CartView = () => {
  const { itemsInCart, cartPrice, emptyCart } = useCartContext();

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 className="main-title mt-5 mb-5">Carrito de compras</h1>
      {itemsInCart.length > 0 ? (
        itemsInCart.map((product) => {
          return (
            <CartItem
              key={product.item.item.id}
              id={product.item.item.id}
              src={product.item.item.pictureUrl}
              title={product.item.item.title}
              price={product.item.item.price}
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
      { itemsInCart.length > 0 && <h2 className="full-price-style">{`Precio total: $${cartPrice()}.00`}</h2> }
      { itemsInCart.length > 0 &&       
      <div className="empty-cart-btn-container">
      <Button variant="outline-primary" className="btn-empty-cart" onClick={() => emptyCart()}>Vaciar carrito</Button> 
      </div>
      }
    </div>
  );
};

export default CartView;
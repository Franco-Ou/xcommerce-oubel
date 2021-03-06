import React, { useState } from "react";

//Components
import CartItem from "./CartItem/CartItem";
import CartForm from "./CartForm/CartForm";
import CartModal from "./CartModal/CartModal";

//Context
import { useCartContext } from '../../context/cartContext/CartContext';

//Firebase
import { getFirestore } from '../../Data/firebaseService';
import firebase from "firebase/app";

//React-router
import { Link } from "react-router-dom";

//Bootstrap y estilos
import { Button } from "react-bootstrap";
import "./CartView.css";

const CartView = () => {
  const { itemsInCart, cartPrice, emptyCart } = useCartContext();
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "" });
  const [repeatedEmail, setRepeatedEmail] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [error, setError] = useState(false);

  const { name, phone, email } = customer;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(name.trim() === '' || phone.trim() === '' || email.trim() === '') {
      setError(true);
      return;
    }

    if(repeatedEmail.trim() !== email) {
      setError(true);
      return;
    }

    setError(false);
    saveOrderInFirestore();
  };

  const handleFormChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailMatch = (e) => {
    setRepeatedEmail(e.target.value);
  }

  const saveOrderInFirestore = () => {
    const db = getFirestore();
    db.collection("Order")
      .add({
        customer,
        item: itemsInCart.map((i) => i.item.item),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: cartPrice(),
      })
      .then((res) => setOrderCode(res.id))
      .catch((err) => console.log(err));
      setModalShow(true);
  }

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
          <h2 className="empty-cart-message">El Carrito est?? vac??o</h2>
          <Link to="/">
            <span className="seguir-comprando-cart">Seguir comprando</span>
          </Link>
        </div>
      )}
      {itemsInCart.length > 0 && (
        <h2 className="full-price-style">{`Precio total: $${cartPrice()}.00`}</h2>
      )}
      {itemsInCart.length > 0 && (
        <div className="empty-cart-btn-container">
          <Button
            variant="outline-primary"
            className="btn-empty-cart"
            onClick={() => emptyCart()}
          >
            Vaciar carrito
          </Button>
        </div>
      )}
      {itemsInCart.length > 0 && (
        <CartForm
          customer={customer}
          handleFormSubmit={handleFormSubmit}
          handleFormChange={handleFormChange}
          error={error}
          handleEmailMatch={handleEmailMatch}
          repeatedEmail={repeatedEmail}
        />
      )}
      {modalShow && (
        <CartModal show={modalShow} onHide={() => setModalShow(false)} orderCode={orderCode}/>
      )}
    </div>
  );
};

export default CartView;

import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [itemsInCartQuantity, setItemsInCartQuantity] = useState(0);

  const addItemToCart = (item, quantity) => {
    if (isItemInCart(item.id)) {
      addQuantity(item.id, quantity);
    } else {
      setItemsInCart([...itemsInCart, { item: { item }, quantity: quantity }]);
    }
    const totalQuantity = itemsInCartQuantity + quantity;
    setItemsInCartQuantity(totalQuantity);
    cartPrice();
  };

  const removeItemFromCart = (id) => {
    //Consigo del item seleccionado la cantidad a restar del contador del cart
    let quantityToSubtract = 0;
    for (const product of itemsInCart) {
      if (product.item.item.id === id) {
        quantityToSubtract += product.quantity;
      }
    }

    const filteredItems = itemsInCart.filter(
      (product) => product.item.item.id !== id
    );
    setItemsInCart(filteredItems);
    setItemsInCartQuantity(itemsInCartQuantity - quantityToSubtract);
  };

  const emptyCart = () => {
    setItemsInCartQuantity(0);
    setItemsInCart([]);
  };

  const cartPrice = () => {
    let fullPrice = itemsInCart.reduce(
      (acum, product) => acum + product.item.item.price * product.quantity, 0);
    return fullPrice;
  };

  function isItemInCart(id) {
    let findProduct = itemsInCart.filter(
      (product) => product.item.item.id === id
    );
    if (findProduct.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  function addQuantity(id, quant) {
    for (const product of itemsInCart) {
      if (product.item.item.id === id) {
        product.quantity += quant;
      }
    }
    setItemsInCart([...itemsInCart]);
  }

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        itemsInCartQuantity,
        addItemToCart,
        removeItemFromCart,
        cartPrice,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

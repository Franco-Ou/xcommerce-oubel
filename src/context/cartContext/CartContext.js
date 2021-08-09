import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [itemsInCartQuantity, setItemsInCartQuantity] = useState(0);
  const [fullPurchasePrice, setFullPurchasePrice] = useState(0);

  const addItemToCart = (item, quantity) => {
    if (isItemInCart(item[0].id)) {
      addQuantity(item[0].id, quantity);
    } else {
      setItemsInCart([...itemsInCart, { item: { item }, quantity: quantity }]);
    }
    const totalQuantity = itemsInCartQuantity + quantity;
    setItemsInCartQuantity(totalQuantity);
    handleFullPurchasePrice();
  };

  const removeItemFromCart = (id) => {
    //Consigo del item seleccionado la cantidad a restar del contador del cart
    let quantityToSubtract = 0;
    for (const product of itemsInCart) {
      if (product.item.item[0].id === id) {
        quantityToSubtract += product.quantity;
      }
    }

    const filteredItems = itemsInCart.filter(
      (product) => product.item.item[0].id !== id
    );
    setItemsInCart(filteredItems);
    setItemsInCartQuantity(itemsInCartQuantity - quantityToSubtract);

    
  };

  const handleNumberFormat = (numberToConvert) => {
    let number = Number(numberToConvert.replace(/[^0-9.-]+/g, ""));
    return number;
  };

  const handleFullPurchasePrice = () => {
    let finalPrice = 0;
    itemsInCart.map((product) => {
      let quantity = product.quantity;
      let priceTimesQuantity = handleNumberFormat(product.item.item[0].price) * quantity;
      finalPrice += priceTimesQuantity;
    });

    setFullPurchasePrice(finalPrice);
  };

  function isItemInCart(id) {
    let findProduct = itemsInCart.filter(
      (product) => product.item.item[0].id === id
    );
    if (findProduct.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  function addQuantity(id, quant) {
    for (const product of itemsInCart) {
      if (product.item.item[0].id === id) {
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
        fullPurchasePrice,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

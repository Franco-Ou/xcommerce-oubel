import React, { createContext, useContext, useState } from 'react';

    export const CartContext = createContext();

    export const useCartContext = () => useContext(CartContext);



    const CartContextProvider = ({children}) => {
        const [itemsInCart, setItemsInCart] = useState([]);

        const addItemToCart = (item) => {
            setItemsInCart([...itemsInCart, item]);
        }

        function isItemInCart(id) {
            let findProduct = itemsInCart.filter(product => product.item.item[0].id === id)
            if (findProduct.length === 0) {
                return false;
            } else {
                return true;
            }
        }
     
        function addQuantity(id, quant) {
            for (const product of itemsInCart) {
                if(product.item.item[0].id===id){
                    product.quantity+= quant;
                }
            }
        }



        return <CartContext.Provider value={{
            itemsInCart,
            addItemToCart,
            isItemInCart,
            addQuantity
        }}>
            {children}
        </CartContext.Provider>
    }

    export default CartContextProvider;
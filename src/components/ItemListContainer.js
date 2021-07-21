import React, { useState, useEffect } from "react";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const items = [
      {
        id: "1",
        title: "Pavement Ranglan Crew Verde",
        description: "Buzo Ranglan con parche en pecho",
        price: "$5350,00",
        pictureUrl:
          "https://cdn2.c1rca.com.ar/shop/14773-large_default/-pavement-ranglan-crew-negro.jpg",
      },
      {
        id: "2",
        title: "Cement Po Verde",
        description: "Buzo tipo canguro con logo bordado",
        price: "$6790,00",
        pictureUrl:
          "https://cdn1.c1rca.com.ar/shop/14601-large_default/cement-po-verde-.jpg",
      },
      {
        id: "3",
        title: "Mini Icon Crew Azul",
        description: "Buzo escote redondo",
        price: "$4698,00",
        pictureUrl:
          "https://cdn2.c1rca.com.ar/shop/14481-large_default/mini-icon-crew-azul.jpg",
      },
      {
        id: "4",
        title: "Icon Crew Rojo",
        description: "Buzo escote redondo",
        price: "$4698,00",
        pictureUrl:
          "https://cdn1.c1rca.com.ar/shop/14479-large_default/icon-crew-rojo.jpg",
      },
    ];

    const getItems = new Promise((res, rej) => {
      setTimeout(() => {
        res(items);
      }, 2000);
    });

    const getItemsAsync = () => {
      return getItems;
    };

    getItemsAsync()
      .then((res) => setItemList(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 style={{ marginTop: "60px", textAlign: "center" }}>{greeting}</h1>
      <ItemList itemList={itemList}/>
      {/*<ItemCount stock={5} initial={1} />*/}
    </>
  );
};

export default ItemListContainer;

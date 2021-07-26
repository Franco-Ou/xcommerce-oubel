import React, { Fragment, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState({});

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
    ];

    const getItems = new Promise((res, rej) => {
      setTimeout(() => {
        res(items);
      }, 2000);
    });

    getItems.then((res) => setSelectedItem(res)).catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
     
        <ItemDetail selectedItem={selectedItem} />

    </Fragment>
  );
};

export default ItemDetailContainer;

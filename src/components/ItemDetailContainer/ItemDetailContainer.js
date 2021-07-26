import React, { Fragment, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const item = [
      {
        id: "1",
        title: "Pavement Ranglan Crew Verde",
        description: "Buzo Ranglan con parche en pecho",
        price: "$5350,00",
        pictureUrl:
          "https://cdn2.c1rca.com.ar/shop/14773-large_default/-pavement-ranglan-crew-negro.jpg",
      },
    ];

    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(item);
        setIsDataLoaded(true);
      }, 2000);
    });

    const getItemAsync = () => {
      return getItem;
    };

    getItemAsync()
      .then((res) => setSelectedItem(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      {isDataLoaded ? (
        <ItemDetail selectedItem={selectedItem} isDataLoaded={isDataLoaded} />
      ) : (
        <h1>Cargando...</h1>
      )}
    </Fragment>
  );
};

export default ItemDetailContainer;

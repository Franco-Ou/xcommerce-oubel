import React, { useState, useEffect } from "react";
//import ItemCount from "./ItemCount";
import ItemList from "../ItemList/ItemList";
import { NavLink, Link, useParams } from "react-router-dom";
import data from "../../Data/data";

const ItemListContainer = ({ greeting }) => {
  const [itemList, setItemList] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getItems = new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 2000);
    });

    const getItemsAsync = () => {
      return getItems;
    };

    getItemsAsync()
      .then((res) => categoryId !== undefined ? setItemList(res.filter(item => item.category === categoryId)) : setItemList(res))
      .catch((err) => console.log(err));
  }, [categoryId]);

  console.log("Esto devuelve categoryID: " + categoryId);

  const categories = [
    {
      id: "abc123",
      address: "/",
      text: "Todos los productos",
    },
    {
      id: "def123",
      address: "/",
      text: "hombres",
    },
    {
      id: "ghi123",
      address: "/",
      text: "mujeres",
    },
    {
      id: "jkl123",
      address: "/",
      text: "zapatillas",
    },
  ];

  return (
    <>
      <h1 style={{ marginTop: "60px", textAlign: "center" }}>{greeting}</h1>
      <ItemList itemList={itemList} />
      {/*<ItemCount stock={5} initial={1} />*/}
    </>
  );
};

export default ItemListContainer;

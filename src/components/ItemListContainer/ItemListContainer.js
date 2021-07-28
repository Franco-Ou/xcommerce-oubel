import React, { useState, useEffect } from "react";
//import ItemCount from "./ItemCount";
import ItemList from "../ItemList/ItemList";
import { NavLink, Link, useParams } from "react-router-dom";
import data from "../../Data/data";

const ItemListContainer = ({ greeting }) => {
  const [itemList, setItemList] = useState([]);

  const { catId } = useParams();

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
      .then((res) => setItemList(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 style={{ marginTop: "60px", textAlign: "center" }}>{greeting}</h1>
      <ItemList itemList={itemList} />
      {/*<ItemCount stock={5} initial={1} />*/}
    </>
  );
};

export default ItemListContainer;

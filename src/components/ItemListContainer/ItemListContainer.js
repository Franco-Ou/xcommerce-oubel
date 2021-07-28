import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import data from "../../Data/data";

const ItemListContainer = ({ greeting }) => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((res, rej) => {
      setTimeout(() => {
        setLoading(false);
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

  return (
    <>
      <h1 style={{ marginTop: "60px", textAlign: "center" }}>{greeting}</h1>
      {loading && <h1 className="cargando">Cargando...</h1>}
      <ItemList itemList={itemList} />
    </>
  );
};

export default ItemListContainer;

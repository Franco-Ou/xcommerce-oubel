import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/data";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const { itemId } = useParams();

  useEffect(() => {

    const getItems = new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 2000);
    });

    getItems
      .then((res) => itemId !== undefined ? setSelectedItem(res.filter(item => item.id === itemId)) : "")
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div style={{minHeight:'100vh'}}>
      {selectedItem.length > 0 && <ItemDetail selectedItem={selectedItem} />}
    </div>
  );
};

export default ItemDetailContainer;

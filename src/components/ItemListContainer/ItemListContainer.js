import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams, useLocation } from "react-router-dom";
import data from "../../Data/data";
import { Spinner } from "react-bootstrap";

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  const location = useLocation();



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
    <div style={{minHeight:'100vh'}}>
      {categoryId !== undefined && <h1 style={{ marginTop: "60px", textAlign: "center" }}>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h1>}
      {location.pathname === "/" ? <h1 style={{ marginTop: "60px", textAlign: "center" }}>Productos Destacados</h1> : ""}
      {loading &&
        <div style={{display: "flex", justifyContent: "center", marginTop: "5em"}}>
          <Spinner 
          style={{width: "4rem", height: "4rem"}} 
          animation="border" 
          variant="secondary"
          />
        </div>}
      {!loading && <ItemList itemList={itemList} /> }
    </div>
  );
};

export default ItemListContainer;

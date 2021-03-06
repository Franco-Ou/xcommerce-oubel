import React, { useState, useEffect } from "react";

//Components
import ItemList from "../ItemList/ItemList";

//React-router
import { useParams, useLocation } from "react-router-dom";

//Firebase
import { getFirestore } from "../../Data/firebaseService";

//Bootstrap
import { Spinner } from "react-bootstrap";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const dbQuery = getFirestore();

    categoryId === undefined
      ? dbQuery
          .collection("items")
          .get()
          .then((res) => {
            setItemList(
              res.docs.map((item) => ({ ...item.data(), id: item.id }))
            )
            setLoading(false);
          }
          )
          .catch((err) => console.log(err))
      : dbQuery
          .collection("items")
          .where("category", "==", categoryId)
          .get()
          .then((res) => {
            setItemList(
              res.docs.map((product) => ({ ...product.data(), id: product.id }))
            )
            setLoading(false);
          }
          )
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

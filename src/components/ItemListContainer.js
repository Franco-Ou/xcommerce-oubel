import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {

  return (
    <>
      <h1 style={{ marginTop: "60px" }}>{greeting}</h1>
      <ItemCount stock={5} initial={1}/>
    </>
  );
};

export default ItemListContainer;

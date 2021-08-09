import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/data";
import ItemDetail from "./ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((res, rej) => {
      setTimeout(() => {
        setLoading(false);
        res(data);
      }, 2000);
    });

    getItems
      .then((res) =>
        itemId !== undefined
          ? setSelectedItem(res.filter((item) => item.id === itemId))
          : ""
      )
      .catch((err) => console.log(err));
  }, [itemId]);

  return (
    <div style={{ minHeight: "100vh" }}>
      {selectedItem.length > 0 && <ItemDetail item={selectedItem} />}
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5em",
          }}
        >
          <Spinner
            style={{ width: "4rem", height: "4rem" }}
            animation="border"
            variant="secondary"
          />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;

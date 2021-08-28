import React, { useState, useEffect } from "react";

//Firebase
import { getFirestore } from "../../Data/firebaseService";
import ItemDetail from "./ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

//React-router
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const dbQuery = getFirestore();
    dbQuery
      .collection("items")
      .doc(itemId)
      .get()
      .then((res) => {
        setSelectedItem({ id: res.id, ...res.data() });
        setLoading(false);
      })
      .catch((err) => console.log(err));

    
  }, [itemId]);

  return (
    <div style={{ minHeight: "100vh" }}>
   {!loading && Object.keys(selectedItem).length !== 0 && <ItemDetail item={selectedItem} />}
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

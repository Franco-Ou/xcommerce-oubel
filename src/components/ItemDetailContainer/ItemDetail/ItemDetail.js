import React, { Fragment } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ selectedItem }) => {
  const { title, description, price, pictureUrl } = selectedItem[0] || {};

  return (
    <Fragment>
      <h1 className="detail-title">{title}</h1>
      <div className="container">
      <div className="detail-img-container">
        <img
          className="detail-img"
          src={pictureUrl}
          alt="producto seleccionado"
        />
      </div>
      <div className="description-container">
        <p>{description}</p>
        <p>{price}</p>
      </div>
      </div>

    </Fragment>
  );
};

export default ItemDetail;

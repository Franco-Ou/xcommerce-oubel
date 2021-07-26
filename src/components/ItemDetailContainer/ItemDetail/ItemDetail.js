import React, { Fragment, Container, Row, Col, Image, useEffect } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ selectedItem, pictureUrl, isDataLoaded }) => {
  const { title, description, price } = selectedItem[0] || {};

  return (
    <Fragment>
      <h1 className="detail-title">{title}</h1>
      <div>
        <img
          className="detail-img"
          src={pictureUrl}
          alt="producto seleccionado"
        />
      </div>
      <p>{description}</p>
    </Fragment>
  );
};

export default ItemDetail;

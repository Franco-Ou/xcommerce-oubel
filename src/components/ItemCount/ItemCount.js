import React from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ counter, setCounter, myStock, handleAddCarrito, handleUnidades }) => {

  const handleAdd = () => {
    if (counter < myStock) {
      setCounter(counter + 1);
    }
  };

  const handleSubtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="btn-container">    
            <h3>
              {counter} {handleUnidades()}
            </h3>
        <div className="add-subtract-row">
          <Button
            className="btn"
            variant="outline-secondary"
            onClick={() => handleSubtract()}
          >
            -
          </Button>
          <Button
            className="btn"
            variant="outline-secondary"
            onClick={() => handleAdd()}
          >
            +
          </Button>
        </div>
        <div>
          <Button
            className="btn"
            variant="outline-secondary"
            onClick={() => handleAddCarrito()}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
      
  );
};

export default ItemCount;
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {

    const [myStock, setMyStock] = useState(stock);
    const [counter, setCounter] = useState(initial);

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

  //Maneja palabra unidad o unidades según la cantidad de unidades
  const handleUnidades = () => {
    if (counter === 1) {
      return "unidad";
    } else {
      return "unidades";
    }
  };

  const handleAddCarrito = () => {
    alert(`Usted agregó ${counter} ${handleUnidades()} al carrito`);
    setMyStock(myStock - counter);
  }

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

/* <div className="btn-container">    
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
      </div> */

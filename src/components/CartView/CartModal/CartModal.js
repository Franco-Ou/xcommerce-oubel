import React from "react";

//Bootstrap
import { Modal } from "react-bootstrap";

const CartModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Compra realizada con éxito!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Gracias por confiar en nosotros</h4>
        <p>
          El ID de su orden es {props.orderCode}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;

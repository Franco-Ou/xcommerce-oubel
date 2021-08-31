import React from 'react';

//Bootstrap y estilos
import { Form, Col, Row, Container } from 'react-bootstrap';
import "./CartForm.css";

const CartForm = ({customer, handleFormSubmit, handleFormChange, error, handleEmailMatch, repeatedEmail}) => {

    return (
      <>
        <Container className="form-container">
          <h4>Ingresa tus datos para finalizar la compra</h4>
          {error ? <div className="form-error">Complete los campos correctamente</div> : ""}
          <Row>
            <Col md={12}>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingresá tu nombre"
                    name="name"
                    value={customer.name}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Teléfono Celular</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ingresá tu número"
                    name="phone"
                    value={customer.phone}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresá tu email"
                    name="email"
                    value={customer.email}
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRepeatedEmail">
                  <Form.Label>Repetí tu Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresalo nuevamente"
                    name="repeatedEmail"
                    value={repeatedEmail}
                    onChange={handleEmailMatch}
                  />
                </Form.Group>
                <button className="btn btn-confirm-purchase">Confirmar compra</button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default CartForm;

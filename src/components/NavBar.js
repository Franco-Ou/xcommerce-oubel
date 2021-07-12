import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Xcommerce</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Mujer</Nav.Link>
          <Nav.Link href="#features">Hombre</Nav.Link>
          <Nav.Link href="#pricing">Marcas</Nav.Link>
        </Nav>
        <Form inline>
          <div className="search-box-container">
            <FormControl
              type="text"
              placeholder="¿Qué estás buscando?"
              className="mr-sm-2"
            ></FormControl>
            <i className="fa fa-search" id="search-icon"></i>
          </div>
        </Form>
      </Navbar>
    </>
  );
};

export default NavBar;

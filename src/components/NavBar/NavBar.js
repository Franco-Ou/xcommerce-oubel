import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const history = useHistory();

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="navbar-brand">Xcommerce</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/categoria/mujer">Mujer</NavLink>
          <NavLink className="nav-link" to="/categoria/hombre">Hombre</NavLink>
          <NavLink className="nav-link" to="/categoria/zapatillas">Zapatillas</NavLink>
        </Nav>
        <Form inline>
          <div className="search-box-container">
            <FormControl
              type="text"
              placeholder="¿Qué estás buscando?"
              className="mr-sm-2"
            ></FormControl>
            <FontAwesomeIcon icon={faSearch} id="search-icon" />
          </div>
        </Form>
        <CartWidget />
      </Navbar>
    </>
  );
};

export default NavBar;

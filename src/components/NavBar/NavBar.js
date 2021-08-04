import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import categorias from "../../Data/Categorias";

const NavBar = () => {

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="navbar-brand">Xcommerce</Navbar.Brand>
        <Nav className="mr-auto">
          {
            categorias.map(categoria => {
              return <NavLink key={Math.random() * 100} className="nav-link" to={`/categoria/${categoria.nombre}`}>{categoria.nombre.charAt(0).toUpperCase() + categoria.nombre.slice(1)}</NavLink>
            })
          }
        </Nav>
        <Form inline>
          <div className="search-box-container">
            <FormControl
              type="text"
              placeholder="¿Qué estás buscando?"
              className="mr-sm-2"
            ></FormControl>
            <FontAwesomeIcon icon={faSearch} id="search-icon"/>
          </div>
        </Form>
        {/* <div onClick={() => handleClickOnCartWidget()}> */}
        <NavLink className="nav-link" to="/carrito">
        <CartWidget/>
        </NavLink>
        {/* </div> */}
      </Navbar>
    </>
  );
};

export default NavBar;

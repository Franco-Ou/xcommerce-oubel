import React from "react";

//Components
import CartWidget from "../CartWidget/CartWidget";
import categorias from "../../Data/Categorias";

//Context
import { useCartContext } from "../../context/cartContext/CartContext";

//React-router
import { NavLink } from "react-router-dom";

//Bootstrap y estilos
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  
  const { itemsInCartQuantity } = useCartContext();

  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="navbar-brand">XCommerce</Navbar.Brand>
        <Nav className="mr-auto">
          {
            categorias.map(categoria => {
              return <NavLink key={Math.random() * 100} className="nav-link" to={`/categoria/${categoria.nombre}`}>{categoria.nombre.charAt(0).toUpperCase() + categoria.nombre.slice(1)}</NavLink>
            })
          }
        </Nav>
        <NavLink className="nav-link" to="/carrito">
        { itemsInCartQuantity > 0 ? <CartWidget itemsInCartQuantity={itemsInCartQuantity}/> : ""}
        </NavLink>
      </Navbar>
    </>
  );
};

export default NavBar;

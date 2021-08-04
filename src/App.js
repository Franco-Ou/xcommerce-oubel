import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CartView from "./components/CartView/CartView";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider from "./context/cartContext/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Productos destacados" />
          </Route>
          <Route exact path="/categoria/:categoryId">
            <ItemListContainer greeting="Productos destacados" />
          </Route>
          <Route exact path="/detalle/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/carrito">
            <CartView />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </CartContextProvider>
  );
}

export default App;

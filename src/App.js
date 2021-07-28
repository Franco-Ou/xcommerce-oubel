import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

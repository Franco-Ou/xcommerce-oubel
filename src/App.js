import React from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Este es el catálogo" />
    </div>
  );
}

export default App;

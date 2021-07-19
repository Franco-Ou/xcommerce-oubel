import React, { useState } from "react";
import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Este es el catálogo" />
      <ItemCount stock={5} setCounter={setCounter} counter={counter} />
    </div>
  );
}

export default App;

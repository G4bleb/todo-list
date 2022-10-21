import React, { useState } from "react";
import { addItemForm } from "./AddItemForm";
import "./App.css";
import { itemsList } from "./ItemsList";

function App() {
  const [items, setItems] = useState(["item 1", "item 2"]);
  return (
    <div className="App">
      {itemsList({ items })}
      {addItemForm({
        onSubmit: (newItem) => {
          setItems([...items, newItem]);
        },
      })}
    </div>
  );
}

export default App;

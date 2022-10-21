import React, { useState } from "react";
import { addItemForm } from "./AddItemForm";
import "./App.css";
import { itemsList } from "./ItemsList";
import { Item } from "./interfaces/Item";
import { v4 as uuid } from "uuid";

const startingArr: Item[] = [
  { name: "item 1", crossedOut: false },
  { name: "item 2", crossedOut: false },
];

const startingItems: Map<string, Item> = new Map();
startingArr.forEach((item) => {
  startingItems.set(uuid(), item);
});

function App() {
  const [items, setItems] = useState(startingItems);
  const onNewItem = (newItemName: string) => {
    const newMap = new Map(items);
    newMap.set(uuid(), { name: newItemName, crossedOut: false });
    setItems(newMap);
  };
  const onItemClick = (id: string) => {
    const newItem = items.get(id) as Item;
    newItem.crossedOut = !newItem.crossedOut;
    const newMap = new Map(items);
    newMap.set(id, newItem);
    setItems(newMap);
  };

  console.log(JSON.stringify(Array.from(items.entries()), null, 2));

  return (
    <div className="App">
      {itemsList({
        items,
        onItemClick: onItemClick,
      })}
      {addItemForm({
        onSubmit: onNewItem,
      })}
    </div>
  );
}

export default App;

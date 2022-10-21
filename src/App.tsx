import React, { useState } from "react";
import { addItemForm } from "./AddItemForm";
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
  const addItem = (newItemName: string) => {
    const newMap = new Map(items);
    newMap.set(uuid(), { name: newItemName, crossedOut: false });
    setItems(newMap);
  };
  const crossItem = (id: string) => {
    const newItem = items.get(id) as Item;
    newItem.crossedOut = !newItem.crossedOut;
    const newMap = new Map(items);
    newMap.set(id, newItem);
    setItems(newMap);
  };
  const deleteItem = (id: string) => {
    const newMap = new Map(items);
    newMap.delete(id);
    setItems(newMap);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {itemsList({
        items,
        onItemClick: crossItem,
        onDelClick: deleteItem,
      })}
      {addItemForm({
        onSubmit: addItem,
      })}
    </div>
  );
}

export default App;

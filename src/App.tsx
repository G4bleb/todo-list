import { useState } from "react";
import { AddItemForm } from "./components/AddItemForm";
import { TodoList } from "./components/TodoList/TodoList";
import { Item } from "./interfaces/Item";
import { v4 as uuid } from "uuid";
const startingItems: Item[] = [
  { id: "example1", name: "item 1", crossedOut: false },
  { id: "example2", name: "item 2", crossedOut: false },
];

function App() {
  const [items, setItems] = useState(startingItems);
  const addItem = (newItemName: string) => {
    const newArray = items.slice();
    const id = uuid();
    newArray.push({ id, name: newItemName, crossedOut: false });
    setItems(newArray);
  };
  const crossItem = (id: number) => {
    const newArray = items.slice();
    const newItem = newArray[id];
    newItem.crossedOut = !newItem.crossedOut;
    setItems(newArray);
  };
  const deleteItem = (id: number) => {
    const newArray = items.slice();
    delete newArray[id];
    setItems(newArray);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {TodoList({
        items,
        onItemClick: crossItem,
        onDelClick: deleteItem,
      })}
      {AddItemForm({
        onSubmit: addItem,
      })}
    </div>
  );
}

export default App;

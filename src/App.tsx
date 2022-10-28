import { useState } from "react";
import { addItemForm } from "./components/AddItemForm";
import { itemsList } from "./components/TodoList/TodoList";
import { Item } from "./interfaces/Item";
import { v4 as uuid } from "uuid";

const startingArr: Item[] = [
  { id: "example1", name: "item 1", crossedOut: false },
  { id: "example2", name: "item 2", crossedOut: false },
];

const startingItems: Map<string, Item> = new Map();
startingArr.forEach((item) => {
  startingItems.set(item.id, item);
});

function App() {
  const [items, setItems] = useState(startingItems);
  const addItem = (newItemName: string) => {
    const newMap = new Map(items);
    const id = uuid();
    newMap.set(id, { id, name: newItemName, crossedOut: false });
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

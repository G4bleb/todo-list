import { useEffect, useState } from "react";
import { AddItemForm } from "./AddItemForm";
import { TodoList } from "./TodoList";
import { Item } from "interfaces/Item";
import { v4 as uuid } from "uuid";

import { storageProvider } from "services";

export function TodoApp() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    async function fetchData() {
      const it = await storageProvider.getUserItems();
      setItems(it);
    }
    fetchData();
  }, []);
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
      <TodoList items={items} onItemClick={crossItem} onDelClick={deleteItem} />
      <AddItemForm onSubmit={addItem} />
    </div>
  );
}

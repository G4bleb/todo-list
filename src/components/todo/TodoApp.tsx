import { useEffect, useState } from "react";
import { AddItemForm } from "./AddItemForm";
import { TodoList } from "./TodoList";
import { Item } from "interfaces/Item";
import { v4 as uuid } from "uuid";

import { storageProvider } from "services";

export function TodoApp() {
  const [items, setItems] = useState<Item[]>([]);

  const setItemsWrapper = async (newArray: Item[]) => {
    setItems(newArray);
    await storageProvider.setUserItems(newArray);
  };

  useEffect(() => {
    async function fetch() {
      const it = await storageProvider.getUserItems();
      setItems(it);
    }
    fetch();
  }, []);

  const addItem = (newItemName: string) => {
    const newArray = items.slice();
    const id = uuid();
    newArray.push({ id, name: newItemName, crossedOut: false });
    setItemsWrapper(newArray);
  };
  const crossItem = (id: number) => {
    const newArray = items.slice();
    const newItem = newArray[id];
    newItem.crossedOut = !newItem.crossedOut;
    setItemsWrapper(newArray);
  };
  const deleteItem = (id: number) => {
    const newArray = items.slice();
    newArray.splice(id, 1);
    setItemsWrapper(newArray);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <TodoList items={items} onItemClick={crossItem} onDelClick={deleteItem} />
      <AddItemForm onSubmit={addItem} />
    </div>
  );
}

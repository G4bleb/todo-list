import { useEffect, useState } from "react";
import { AddItemForm } from "./AddItemForm";
import { TodoList } from "./TodoList";
import { Item } from "interfaces/Item";
import { v4 as uuid } from "uuid";

import { storageProvider } from "services";
import { Loading } from "components/Loading";

export function TodoApp() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const syncItems = async (newArray: Item[]) => {
    setItems(newArray);
    setLoading(true);
    await storageProvider.setUserItems(newArray);
    setLoading(false);
  };

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const it = await storageProvider.getUserItems();
      setLoading(false);
      if (it) {
        setItems(it);
      } else {
        console.error("error getting items from database, new user ?");
        setItems([]);
      }
    }
    fetch();
  }, []);

  const addItem = (newItemName: string) => {
    const newArray = items.slice();
    const id = uuid();
    newArray.push({ id, name: newItemName, crossedOut: false });
    syncItems(newArray);
  };
  const crossItem = (id: number) => {
    const newArray = items.slice();
    const newItem = newArray[id];
    newItem.crossedOut = !newItem.crossedOut;
    syncItems(newArray);
  };
  const deleteItem = (id: number) => {
    const newArray = items.slice();
    newArray.splice(id, 1);
    syncItems(newArray);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <TodoList items={items} onItemClick={crossItem} onDelClick={deleteItem} />
      <AddItemForm onSubmit={addItem} />
      {loading && <Loading className="absolute w-12 m-2" />}
    </div>
  );
}

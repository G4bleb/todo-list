import { Item } from "interfaces/Item";
import { TodoListItem } from "./TodoListItem";

export function TodoList({
  items,
  onItemClick,
  onDelClick,
}: {
  items: Item[];
  onItemClick(id: number): void;
  onDelClick(id: number): void;
}) {
  const elems: JSX.Element[] = [];
  items.forEach((item, index) => {
    elems.push(TodoListItem({ index, item, onItemClick, onDelClick }));
  });
  return <ul className="border border-gray-300 rounded-lg w-80">{elems}</ul>;
}

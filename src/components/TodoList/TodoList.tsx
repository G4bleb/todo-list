import { Item } from "../../interfaces/Item";
import { ItemElement } from "./TodoListItem";

export function itemsList({
  items,
  onItemClick,
  onDelClick,
}: {
  items: Map<string, Item>;
  onItemClick(id: string): void;
  onDelClick(id: string): void;
}) {
  const elems: JSX.Element[] = [];
  items.forEach((item) => {
    elems.push(ItemElement({ item, onItemClick, onDelClick }));
  });
  return <ul className="border border-gray-300 rounded-lg w-80">{elems}</ul>;
}

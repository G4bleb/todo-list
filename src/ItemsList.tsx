import { Item } from "./interfaces/Item";

export function itemsList({
  items,
  onItemClick,
}: {
  items: Map<string, Item>;
  onItemClick(id: string): void;
}) {
  const elems: JSX.Element[] = [];
  items.forEach((item, id) => {
    elems.push(
      <li
        onClick={() => {
          onItemClick(id);
        }}
        key={id}
        style={item.crossedOut ? { textDecoration: "line-through" } : {}}
      >
        {item.name}
      </li>
    );
  });
  return <ul>{elems}</ul>;
}

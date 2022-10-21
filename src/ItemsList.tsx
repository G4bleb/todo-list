import { Item } from "./interfaces/Item";

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
  items.forEach((item, id) => {
    elems.push(
      <li
        onClick={() => {
          onItemClick(id);
        }}
        key={id}
      >
        <span style={item.crossedOut ? { textDecoration: "line-through" } : {}}>
          {item.name}
        </span>

        <span
          onClick={(e) => {
            e.stopPropagation();
            onDelClick(id);
          }}
        >
          ❌
        </span>
      </li>
    );
  });
  return <ul>{elems}</ul>;
}

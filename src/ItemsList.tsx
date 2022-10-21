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
        className="border-t border-t-gray-300 first:border-t-0 hover:bg-gray-100 p-2 flex content-between justify-between select-none"
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
  return <ul className="border border-gray-300 rounded-lg w-80">{elems}</ul>;
}

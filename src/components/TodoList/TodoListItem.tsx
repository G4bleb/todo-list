import { Item } from "../../interfaces/Item";

export function ItemElement({
  item,
  onItemClick,
  onDelClick,
}: {
  item: Item;
  onItemClick(id: string): void;
  onDelClick(id: string): void;
}) {
  return (
    <li
      className="border-t border-t-gray-300 first:border-t-0 first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100 p-2 flex content-between justify-between select-none hover:cursor-pointer"
      onClick={() => {
        onItemClick(item.id);
      }}
      key={item.id}
    >
      <span style={item.crossedOut ? { textDecoration: "line-through" } : {}}>
        {item.name}
      </span>

      <span
        onClick={(e) => {
          e.stopPropagation();
          onDelClick(item.id);
        }}
      >
        ❌
      </span>
    </li>
  );
}

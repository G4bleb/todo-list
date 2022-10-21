export function itemsList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </ul>
  );
}

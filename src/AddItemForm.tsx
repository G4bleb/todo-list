import { FormEvent } from "react";

export function addItemForm({ onSubmit }: { onSubmit(newItem: string): void }) {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      item: HTMLInputElement;
    };
    console.log(target.item.value);
    onSubmit(target.item.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="item"></input>
      <input type="submit" name="submit" value="Add"></input>
    </form>
  );
}

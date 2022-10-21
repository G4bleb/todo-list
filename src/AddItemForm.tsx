import { FormEvent } from "react";

export function addItemForm({ onSubmit }: { onSubmit(newItem: string): void }) {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      item: HTMLInputElement;
    };
    onSubmit(target.item.value);
  };

  return (
    <form className="w-80 flex justify-between pt-2 " onSubmit={submitHandler}>
      <input
        type="text"
        name="item"
        className="border border-gray-300 p-1 rounded"
      ></input>
      <input
        type="submit"
        name="submit"
        value="Add"
        className="border border-gray-300 mx-1 px-2 w-full hover:bg-gray-200 rounded"
      ></input>
    </form>
  );
}

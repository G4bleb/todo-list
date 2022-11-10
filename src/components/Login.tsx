import { FormEvent, useContext } from "react";
import { authProvider } from "services";
import { User } from "services/providers/authProvider";

export function Login({ loggedIn }: { loggedIn: (user: User) => void }) {
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: HTMLInputElement;
      password: HTMLInputElement;
    };
    const email = target.email.value;
    const password = target.password.value;
    // if (!email || !password) {
    //   return;
    // }
    const u = await authProvider.login("testuser@test.test", "testuser");
    if (u) {
      loggedIn(u);
    } else {
      console.log("no");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form className="w-80 flex justify-between pt-2" onSubmit={submitHandler}>
        <input type="email" name="email" className="border border-gray-300 p-1 rounded"></input>
        <input type="password" name="password" className="border border-gray-300 p-1 rounded"></input>
        <input
          type="submit"
          name="submit"
          value="Login"
          className="border border-gray-200 mx-1 px-2 w-full hover:bg-gray-200 rounded shadow-sm"
        ></input>
      </form>
    </div>
  );
}
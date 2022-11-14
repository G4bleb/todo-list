import { useEffect, useState } from "react";
import { Login } from "components/Login";
import { TodoApp } from "components/todo/TodoApp";
import { authProvider } from "services";
import { User } from "services/providers/authProvider";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    authProvider.addOnAuthChange((user) => {
      setUser(user);
      console.log("auth change");
    });
  }, []);

  return <div> {user ? <TodoApp /> : <Login />} </div>;
}

export default App;

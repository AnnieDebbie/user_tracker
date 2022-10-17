import logo from "./logo.svg";
import "./App.css";
import AddUserForm from "./components/AddUserForm";
import Users from "./components/Users";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function addUserHandler(newUser) {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    console.log(users)
    
  }
  return (
    <div className="">
      <AddUserForm onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;

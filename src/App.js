import "./App.css";
import AddUserForm from "./components/AddUserForm";
import Users from "./components/Users";
import { useState } from "react";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);

  function addUserHandler(newUser) {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  function checkFormValidity(validValue) {
    setIsFormValid(validValue);
  }

  const allInfo = [
    {
      isFormValid: isFormValid,
      setIsFormValid: checkFormValidity,
      onAddUser: addUserHandler,
      isAgeValid: isAgeValid,
      isNameValid: isNameValid,
      setIsAgeValid: setIsAgeValid,
      setIsNameValid: setIsNameValid,
    },
  ];
  return (
    <div className="">
      <AddUserForm
        allInfo={allInfo}
        // isFormValid={isFormValid}
        // setIsFormValid={checkFormValidity}
        // onAddUser={addUserHandler}
        // isAgeValid={isAgeValid}
        // isNameValid={isNameValid}
        // setIsAgeValid={setIsAgeValid}
        // setIsNameValid={setIsNameValid}
      />
      <Users users={users} />
      {!isFormValid && (
        <ErrorModal isAgeValid={isAgeValid} isNameValid={isNameValid} />
      )}
    </div>
  );
}

export default App;

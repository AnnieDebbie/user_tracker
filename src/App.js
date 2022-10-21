import "./App.css";
import AddUserForm from "./components/AddUserForm";
import Users from "./components/Users";
import { useState } from "react";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [isFormValid, setIsFormValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [formError, setFormError] = useState("");

  function addUserHandler(newUser) {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  function checkFormValidity(validValue) {
    setIsFormValid(validValue);
  }

  function createError(formValidity) {
    if (formValidity === false) {
      let formErrMessage = "Input value cannot be empty";
      setFormError(formErrMessage);
      return formErrMessage;
    }
    if (isAgeValid === false) {
      let ageErrMessage = "Please enter a valid number";
      setAgeError(ageErrMessage);
      return ageErrMessage;
    }
    if (isNameValid === false) {
      let nameErrMessage = "Please enter a valid age";
      setNameError(nameErrMessage);
      return nameErrMessage;
    }
  }

  const allInfo = {
    isFormValid: isFormValid,
    setIsFormValid: checkFormValidity,
    onAddUser: addUserHandler,
    isAgeValid: isAgeValid,
    isNameValid: isNameValid,
    setIsAgeValid: setIsAgeValid,
    setIsNameValid: setIsNameValid,
    showErrorModal: createError,
    ageError: ageError,
    nameError: nameError,
    formError: formError,
  };
  return (
    <div className="">
      <AddUserForm allInfo={allInfo} />
      <Users users={users} />
      {isFormValid || <ErrorModal allInfo={allInfo} />}
    </div>
  );
}

export default App;

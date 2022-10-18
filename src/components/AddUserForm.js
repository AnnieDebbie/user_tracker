import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "./ErrorModal";

function AddUserForm(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  function nameChangeHandler(e) {
    let nameValue = e.target.value;
    setUserName(nameValue);
    validateInput();
  }

  function ageChangeHandler(e) {
    setUserAge(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    let userData = {
      name: userName,
      age: userAge,
      id: uuidv4(),
    };
    props.onAddUser(userData);
    setIsFormValid(validateInput());
    console.log(userData);
    console.log(`in add user form` + userData);
  }

  function validateInput() {
    // console.log(userData["name"])
    userName.length > 0 && setIsNameValid(true);
    setIsAgeValid(!isNaN(userAge));

    if (isAgeValid && isNameValid) return true;
    else return "invalid input";
  }

  // function validateForm() {
  //   setFormValid(isNameValid && isAgeValid);
  // }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            value={userName}
            onChange={nameChangeHandler}
            placeholder="name"
            type="text"
          />
          <input
            value={userAge}
            onChange={ageChangeHandler}
            placeholder="age"
            type="text"
          />
        </div>
        <button> Add User </button>
        {isFormValid ? (
          <ErrorModal isAgeValid={isAgeValid} isNameValid={isNameValid}>
            {" "}
          </ErrorModal>
        ) : (
          ""
        )}{" "}
      </form>
    </div>
  );
}

export default AddUserForm;

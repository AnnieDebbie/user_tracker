import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "./ErrorModal";

function AddUserForm(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  /*
  let allInfo=[...props.allInfo]
  console.log(allInfo,allInfo[0].setIsAgeValid)
  */

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
    props.setIsFormValid(validateInput());
    console.log(validateInput());
  }

  function validateInput() {
    userName.length > 0 && props.setIsNameValid(true);
    props.setIsAgeValid(!isNaN(userAge));

    if (props.isAgeValid && props.isNameValid) return true;
    else return false;
  }

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
      </form>
    </div>
  );
}

export default AddUserForm;

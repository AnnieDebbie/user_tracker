import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddUserForm(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  let propsData = props.allInfo;
  function nameChangeHandler(e) {
    let nameValue = e.target.value;
    setUserName(nameValue);
  }

  function ageChangeHandler(e) {
    setUserAge(e.target.value);
  }

  function validateInput() {
    let nameValidity = userName.trim().length > 0;
    let ageValidity = !isNaN(userAge) && userAge.trim().length > 0;
    propsData.setIsNameValid(nameValidity);
    propsData.setIsAgeValid(ageValidity);

    if (nameValidity && ageValidity) return true;
    else return false;
  }

  function submitHandler(e) {
    e.preventDefault();

    let formValid = validateInput();

    if (formValid) {
      let userData = {
        name: userName,
        age: userAge,
        id: uuidv4(),
      };
      propsData.onAddUser(userData);
    } else {
      propsData.setIsFormValid(false);
      propsData.showErrorModal(formValid);
    }
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

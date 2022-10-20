import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "./ErrorModal";

function AddUserForm(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  let propsData = props.allInfo[0];
  // console.log(allInfo);

  function nameChangeHandler(e) {
    let nameValue = e.target.value;
    setUserName(nameValue);
  }

  function ageChangeHandler(e) {
    setUserAge(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    let formValid=validateInput()

    if (formValid){
      let userData = {
        name: userName,
        age: userAge,
        id: uuidv4(),
      };
      propsData.setIsFormValid(true);
      propsData.onAddUser(userData);
    } 

    
    console.log(validateInput());
  }

  function validateInput() {
    console.log(userName.trim().length > 0);
    userName.trim().length > 0 && propsData.setIsNameValid(true);
    propsData.setIsAgeValid(!isNaN(userAge) && userAge.trim().length > 0);
    // isNan(empty)=true !false
    //isNan(14)= false
    if (propsData.isNameValid && propsData.isAgeValid) return true;
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

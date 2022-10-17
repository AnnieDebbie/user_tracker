import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddUserForm(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  function nameChangeHandler(e) {
    // console.log(e.target.value);
    setUserName(e.target.value);
  }

  function ageChangeHandler(e) {
    // console.log(e.target.value);
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
    console.log(userData);
    console.log(`in add user form` + userData);
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

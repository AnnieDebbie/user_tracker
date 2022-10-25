import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./form.module.css";
import Card from "./Card";
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
      propsData.createError(formValid);
      propsData.setIsModalOpen(true)
    }
  }

  return (
    <React.Fragment>

      <div className={styles.container}>
        <h1> Add User</h1>

        <div className={styles.formContainer}>
          <form onSubmit={submitHandler}>
            <div className={styles.inputDiv}>
              <input
                className={styles.addInputField}
                value={userName}
                onChange={nameChangeHandler}
                placeholder="name"
                type="text"
                />

              <input
                className={styles.addInputField}
                value={userAge}
                onChange={ageChangeHandler}
                placeholder="age"
                type="text"
                />
            </div>

            <div className={styles.inputDiv}>
            </div>
            <button className={styles.addToDoBtn}> Add User </button>
          </form>
        </div>

        <div className={styles.divider}></div>
      </div>
      </React.Fragment>
  );
}

export default AddUserForm;

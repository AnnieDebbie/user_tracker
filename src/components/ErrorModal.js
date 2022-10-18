import { useState } from "react";
function ErrorModal(props) {
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");

  function createError() {
    setAgeError(props.isAgeValid || " Please enter a valid number");
    setNameError(props.isNameValid || "Please enter a valid age");
  }

  return <div>
    <p> Error! Error </p>
    <p> {nameError}</p>
    <p> {ageError} </p>
  </div>;
}

export default ErrorModal;

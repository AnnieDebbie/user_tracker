import { useState } from "react";
function ErrorModal(props) {
  let errorProps = props.allInfo;
  console.log("heyyy")
  console.log(errorProps.formError, errorProps.ageError, errorProps.nameError);
  return (
    <div>
      <p> Error! Error </p>
      <p> {errorProps.formError}</p>
      <p> {errorProps.nameError}</p>
      <p> {errorProps.ageError} </p>
    </div>
  );
}

export default ErrorModal;

import { useState } from "react";
import Card from "./Card";
import styles from "./Error.module.css";
function ErrorModal(props) {
  let errorProps = props.allInfo;

  function closeModal(e){
    e.preventDefault()
    errorProps.setIsModalOpen(false)
  }
  
  console.log("heyyy");
  console.log(errorProps.formError, errorProps.ageError, errorProps.nameError);
  return (
    <div className={styles.errorBG}>
      <div className={styles.errorModal}>
        <Card>
          <h4 className={styles.heading}> Invalid Input</h4>
          <p className={styles.errorMessage}> {errorProps.formError}</p>
          <p className={styles.errorMessage}> {errorProps.nameError}</p>
          <p className={styles.errorMessage}> {errorProps.ageError} </p>

          <div className={styles.modalBtnDiv}>
            <button onClick={closeModal} className={styles.modalBtn}> Okay </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ErrorModal;

import styles from "./UsersList.module.css";

function Users(props) {
  let receivedUserData = props.users;
  console.log(receivedUserData);

  return (
    <div className={styles["list-container"]}>
      <ul>
        {receivedUserData.map((userData) => (
          <li className={styles["todo-item"]} key={userData["id"]}>
            {" "}
            <span>{userData["name"]}</span>
            <span>{userData["age"]} years</span>
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}

export default Users;

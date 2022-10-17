function Users(props) {
  let receivedUserData = props.users;
  console.log(receivedUserData);

  return (
    <div>
      <ul>
        {receivedUserData.map((userData) => (
          <li key={userData["id"]}>
            {" "}
            {userData["name"]} {userData["age"]}
          </li>
        ))}{" "}
      </ul>
    </div>
  );
}

export default Users;

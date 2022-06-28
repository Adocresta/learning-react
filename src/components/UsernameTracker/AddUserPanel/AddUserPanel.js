import React from "react";
import { useState } from "react";

const AddUserPanel = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (e) => {
    console.log("username chnge");
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    console.log("agechanfge");
    setAge(parseInt(e.target.value));
  };

  const SubmitEvetHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    const newData = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };
    props.onNewUserData(newData);
  };

  return (
    <form onSubmit={SubmitEvetHandler}>
      <label>Username</label>
      <input type="text" onChange={usernameChangeHandler} />
      <label>Age</label>
      <input type="text" onChange={ageChangeHandler} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserPanel;

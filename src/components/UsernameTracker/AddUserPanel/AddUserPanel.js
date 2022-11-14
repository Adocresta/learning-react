import React from "react";
import { useState } from "react";
import "./AddUserPanel.css";

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
      <div className="add-user">
        <div className="add-user__input">
          <label>Username:</label>
          <input type="text" onChange={usernameChangeHandler} />
        </div>
        <div className="add-user__input">
          <label>Age:</label>
          <input type="text" onChange={ageChangeHandler} />
        </div>
        <div className="add-user__button">
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
};

export default AddUserPanel;

import React from "react";
import { useState } from "react";
import Card from "../../UI/Card";
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
    <Card className="add-user">
      <form onSubmit={SubmitEvetHandler}>
        <div className="add-user__input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            className="text-black"
          />
        </div>
        <div className="add-user__input">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            className="text-black"
          />
        </div>
        <div className="add-user__button">
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default AddUserPanel;

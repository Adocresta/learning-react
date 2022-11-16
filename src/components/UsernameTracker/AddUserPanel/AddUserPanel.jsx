import React, { useState } from "react";

// Components
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const AddUserPanel = (props) => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

  // form onChange handlers
  const usernameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(parseInt(e.target.value));
  };

  const submitEvetHandler = (e) => {
    e.preventDefault();

    // validation | make sure to use isNaN cuz '===' doesn't work
    if (username.trim().length === 0 || isNaN(age)) return;
    if (+age < 1 || +age > 110) return;

    // new data created
    const newData = {
      id: Math.random().toString(),
      username: username,
      age: age,
    };

    // resetting inputs
    setUserName("");
    setAge("");

    // lift the data up
    props.onNewUserData(newData);
  };

  return (
    <Card className="container max-w-2xl py-8 mt-10 mx-auto text-white text-left">
      <form onSubmit={submitEvetHandler} className="flex flex-col space-y-2">
        <div className="flex flex-row justify-between mx-auto">
          <label htmlFor="username" className="min-w-95px font-bold">
            Username:
          </label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            className="text-black"
            value={username}
          />
        </div>
        <div className="flex flex-row justify-between mx-auto">
          <label htmlFor="age" className="min-w-95px font-bold">
            Age:
          </label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            className="text-black"
            value={age}
          />
        </div>
        {/* Using a tag for button right now fix it later */}
        <Button
          className="min-w-95px mt-4 mx-auto cursor-pointer p-1 px-4 text-center focus:outline-none"
          onClick={submitEvetHandler}
        >
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUserPanel;

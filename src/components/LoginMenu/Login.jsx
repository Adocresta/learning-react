import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className="container w-11/12 max-w-2xl mx-auto my-4 p-8">
      <form onSubmit={submitHandler}>
        <div
          className={`my-4 flex items-stretch flex-col md:content-center md:flex-row ${
            //  background: #f6dbfc; for invalid?
            !emailIsValid ? "bg-[#85144b] rounded-md" : ""
          }`}
        >
          <label
            className="block font-bold flex-[1] text-slate-300 mb-2"
            htmlFor="email"
          >
            E-Mail
          </label>
          <input
            //  todo learn what is flex
            className="block flex-[3] p-1 rounded-md border border-solid border-gray-400"
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`my-4 flex items-stretch flex-col md:content-center md:flex-row ${
            !passwordIsValid ? "bg-[#85144b] rounded-md" : ""
          }`}
        >
          <label
            className="block font-bold flex-1 text-slate-300 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="block flex-[3] p-1 rounded-md border border-solid border-gray-400"
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className="text-center">
          <Button type="submit" className="" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(
      enteredEmail.includes("@") && enteredEmail.trim().length > 6
    );
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
        <div className="my-4 flex items-stretch flex-col md:content-center md:flex-row">
          <label
            className="block font-bold flex-[1] text-slate-300 mb-2"
            htmlFor="email"
          >
            E-Mail
          </label>
          <input
            //  todo learn what is flex
            className={`block flex-[3] p-1 rounded-md border border-solid border-gray-400 ${
              //  background: #f6dbfc; for invalid?
              !emailIsValid ? "bg-red-600 text-slate-300" : ""
            }`}
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className="my-4 flex items-stretch flex-col md:content-center md:flex-row">
          <label
            className="block font-bold flex-1 text-slate-300 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`block flex-[3] p-1 rounded-md border border-solid border-gray-400 ${
              //  background: #f6dbfc; for invalid?
              !passwordIsValid ? "bg-red-600 text-slate-300" : ""
            }`}
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className="text-center">
          <Button
            type="submit"
            className="disabled:bg-slate-500"
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

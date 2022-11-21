import React, { useContext, useEffect, useReducer, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import AuthContext from "../context/auth-context";

// useReducer funtions
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // object destructuring is very important with useReducer concept
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    setFormIsValid(emailState.isValid && passwordState.isValid);
    console.log("check");
    // *NOTE: TIMER WAY OF DOING THE SAME THING BUT IT'S BUGGY FOR THIS MOCK APP (CUZ YOU CAN ENTER THE SYSTEM WITH 6 Character PASSWORDS)
    // const identifier = setTimeout(() => {
    //   console.log("Checking form validity!");
    //   setFormIsValid(emailState.isValid && passwordState.isValid);
    // }, 0);

    // return () => {
    //   console.log("CLEANUP");
    //   clearTimeout(identifier);
    // };
  }, [emailIsValid, passwordIsValid]);

  const authCtx = useContext(AuthContext);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
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
              emailState.isValid === false ? "bg-red-600 text-slate-300" : ""
            }`}
            type="email"
            id="email"
            value={emailState.value}
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
              passwordState.isValid === false ? "bg-red-600 text-slate-300" : ""
            }`}
            type="password"
            id="password"
            value={passwordState.value}
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

import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import AuthContext from "../../context/auth-context";
import LoginFormInput from "./LoginFormInput";

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

const Login = () => {
  // states \\
  const [formIsValid, setFormIsValid] = useState(false);

  // reducers \\
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // refs \\
  const loginRef = useRef();
  const emailRef = useRef();

  // object destructuring is very important with useReducer concept \\
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // side effects \\
  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);

    // *NOTE: TIMER WAY OF DOING THE SAME THING \\
    // *BUT IT'S BUGGY FOR THIS MOCK APP \\
    // *(CUZ YOU CAN ENTER THE SYSTEM WITH 6 Character PASSWORDS) \\

    /* 
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    // return fuction doesn't run on initial render (it's like do-while loop) \\
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    }; 
    */
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
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      loginRef.current.focus();
    } else {
      emailRef.current.focus();
    }
  };

  return (
    <Card className="container w-11/12 max-w-2xl mx-auto my-4 p-8">
      <form onSubmit={submitHandler}>
        <LoginFormInput
          ref={loginRef}
          isValid={emailState.isValid}
          value={emailState.value}
          id="email"
          type="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        >
          E-Mail
        </LoginFormInput>
        <LoginFormInput
          ref={emailRef}
          isValid={passwordState.isValid}
          value={passwordState.value}
          id="password"
          type="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        >
          Password
        </LoginFormInput>
        <div className="text-center">
          <Button
            type="submit"
            className="disabled:bg-slate-500"
            // disabled={!formIsValid}e
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

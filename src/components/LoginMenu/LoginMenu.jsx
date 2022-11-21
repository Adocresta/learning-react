import React, { useContext } from "react";
import AuthContext from "../context/auth-context";

// components
import Home from "./Home";
import Login from "./Login";

function LoginMenu(props) {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {!authCtx.isLoggedIn && <Login />}
      {authCtx.isLoggedIn && <Home />}
    </>
  );
}

export default LoginMenu;

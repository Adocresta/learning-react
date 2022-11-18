import React, { useState } from "react";

// components
import Home from "./Home";
import Login from "./Login";

function LoginMenu(props) {
  // state props
  const { isLoggedIn } = props;
  // function props
  const { onLogout, onLogin } = props;

  return (
    <>
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
      {!isLoggedIn && <Login onLogin={onLogin} />}
      {isLoggedIn && <Home onLogout={onLogout} />}
    </>
  );
}

export default LoginMenu;

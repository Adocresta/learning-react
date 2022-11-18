import React, { useState } from "react";

// components
import Home from "./Home";
import Login from "./Login";

function LoginMenu(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // check email and password
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> */}
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </>
  );
}

export default LoginMenu;

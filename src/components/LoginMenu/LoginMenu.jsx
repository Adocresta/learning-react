import React, { useState, useEffect } from "react";
import AuthContext from "../context/auth-context";
import Header from "../UI/Header";

// components
import Home from "./Home";
import Login from "./Login";

function LoginMenu(props) {
  // Login Menu
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect shines in data fetching
  // we used here to avoid infinite loop
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // check email and password

    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <Header></Header>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </AuthContext.Provider>
  );
}

export default LoginMenu;

import React, { useState, useEffect } from "react";

// this file name is a kebab-case convention example (auth-context)
// auth_context would be snake-case
const AuthContext = React.createContext({
  isLoggedIn: false,
  // for better IDE auto-completion
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
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
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

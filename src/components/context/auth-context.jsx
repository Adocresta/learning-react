import React from "react";

// this file name is a kebab-case convention example (auth-context)
// auth_context would be snake-case
const AuthContext = React.createContext({ isLoggedIn: false });

export default AuthContext;

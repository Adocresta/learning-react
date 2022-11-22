import React, { useContext, useState } from "react";

// Components
import Button from "../UI/Button";
import Card from "../UI/Card";
// Context
import AuthContext from "../../context/auth-context";

const Home = (props) => {
  const [showHome, setShowHome] = useState(true);
  const authCtx = useContext(AuthContext);

  if (showHome) {
    return (
      <Card className="relative w-11/12 max-w-2xl p-12 mx-auto my-8 text-center">
        <div
          onClick={() => setShowHome(false)}
          className="absolute text-white hover:cursor-pointer after:content-['\00d7'] after:h-20 after:w-20 text-4xl top-0 right-2"
        />
        <h1 className="text-white">Welcome back!</h1>
        <Button onClick={authCtx.onLogout} className="mt-4">
          Log Out
        </Button>
      </Card>
    );
  } else return null;
};

export default Home;

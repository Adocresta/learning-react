import React from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
// import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className="w-11/12 max-w-2xl p-12 mx-auto my-8 text-center">
      <h1 className="text-white">Welcome back!</h1>
      <Button onClick={props.onLogout} className="mt-4">
        Log Out
      </Button>
    </Card>
  );
};

export default Home;

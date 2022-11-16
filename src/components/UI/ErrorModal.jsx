import React from "react";

// Components
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  // destructring the values
  const { errorTitle, errorMessage } = props;

  return (
    <div
      onClick={props.onConfirmError}
      className="fixed top-0 left-0 w-full h-screen z-10 bg-[#000000bf]"
    >
      <div className=""></div>
      <Card className="mx-auto mt-[30vh] z-50 max-w-sm overflow-hidden bg-slate-600">
        {/* Error title */}
        <div className="bg-slate-800 p-4 font-bold text-2xl">
          <h2 className="m-0 text-white">{errorTitle.toUpperCase()}</h2>
        </div>
        {/* error explanation */}
        <div className="p-4 text-white">
          <p>{errorMessage}</p>
        </div>
        {/* error button */}
        <div className="p-4 flex justify-end">
          <Button
            onClick={props.onConfirmError}
            className="bg-slate-800 cursor-pointer hover:bg-slate-400"
          >
            Okay
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;

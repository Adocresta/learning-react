import React from "react";
import ReactDOM from "react-dom";

// Components
import Card from "./Card";
import ATagButton from "./ATagButton";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onConfirmError}
      className="fixed top-0 left-0 w-full h-screen z-10 bg-[#000000bf]"
    ></div>
  );
};

const ModalOverlay = (props) => {
  const { errorTitle, errorMessage } = props;

  return (
    <Card className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-sm overflow-hidden bg-slate-600">
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
        <ATagButton
          onClick={props.onConfirmError}
          className="bg-slate-800 cursor-pointer hover:bg-slate-400"
        >
          Okay
        </ATagButton>
      </div>
    </Card>
  );
};

const ErrorModal = (props) => {
  // destructring the values
  const { errorTitle, errorMessage } = props;

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirmError={props.onConfirmError} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorTitle={errorTitle}
          errorMessage={errorMessage}
          onConfirmError={props.onConfirmError}
        />,
        document.querySelector("#overlay-root")
      )}
    </>
  );
};

export default ErrorModal;

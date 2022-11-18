import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`text-base font-bold text-white bg-purple-900 border border-solid border-white p-2 rounded-xl hover:bg-slate-800 focus:bg-slate-800 ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

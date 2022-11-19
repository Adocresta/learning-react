import React from "react";

const ATagButton = (props) => {
  return (
    <a
      href={props.href}
      onClick={props.onClick}
      type={props.type}
      className={`${props.className} text-base font-bold text-white bg-purple-900 border border-solid border-white p-2 rounded-xl hover:bg-slate-800 focus:bg-slate-800`}
    >
      {props.children}
    </a>
  );
};

export default ATagButton;

import React from "react";

const LoginFormInput = (props) => {
  const { isValid, value, onChange, onBlur } = props;
  return (
    <div className="my-4 flex items-stretch flex-col md:content-center md:flex-row">
      <label
        className="block font-bold flex-[1] text-slate-300 mb-2"
        htmlFor={props.id}
      >
        {props.children}
      </label>
      <input
        //  todo learn what is flex
        className={`block flex-[3] p-1 rounded-md border border-solid border-gray-400 ${
          //  background: #f6dbfc; for invalid?
          isValid === false ? "bg-red-600 text-slate-300" : ""
        }`}
        type={props.type}
        id={props.id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default LoginFormInput;

import React, { useRef, useImperativeHandle } from "react";

const LoginFormInput = React.forwardRef((props, ref) => {
  const { isValid, value, onChange, onBlur } = props;

  const inputRef = useRef();

  // custom ref function
  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div className="my-4 flex items-stretch flex-col md:content-center md:flex-row">
      <label
        className="block font-bold flex-[1] text-slate-300 mb-2"
        htmlFor={props.id}
      >
        {props.children}
      </label>
      <input
        ref={inputRef}
        className={`block flex-[3] p-1 rounded-md border border-solid border-gray-400 focus:bg-red-300 focus:text-slate-700 ${
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
});

export default LoginFormInput;

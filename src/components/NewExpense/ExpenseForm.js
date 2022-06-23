import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    selectedDate: "",
  });

  // to prevent submit error I added this seperate useState object to preview submit info!
  const [previewEnteredValues, setPreviewEnteredValues] = useState({
    defaultTitle: "Please Enter your expense name.",
    title: "Please Enter your expense name.",
    amount: "Please Enter the price.",
    date: "Please select a date.",
  });

  const titleChangeHandler = (e) => {
    const userInput = e.target.value;

    //setting both preview and userinput
    setPreviewEnteredValues((prevState) => {
      return { ...prevState, title: userInput };
    });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: userInput };
    });
    !userInput &&
      setPreviewEnteredValues((prevState) => {
        return { ...prevState, title: previewEnteredValues.defaultTitle };
      });
  };

  // this is function form of useState
  // !You need funtion form if your new state depends on previous state
  const amountChangeHandler = (e) => {
    const userInput = parseFloat(e.target.value);
    console.log(userInput);
    setPreviewEnteredValues((prevState) => {
      return { ...prevState, amount: userInput };
    });
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: userInput };
    });
    !userInput | (userInput === 0) &&
      setPreviewEnteredValues((prevState) => {
        return { ...prevState, amount: "Free!" };
      });
  };

  const dateChangeHandler = (e) => {
    const userInput = e.target.value;
    setPreviewEnteredValues((prevState) => {
      return { ...prevState, date: userInput };
    });
    setUserInput((prevState) => {
      return { ...prevState, selectedDate: userInput };
    });
    !userInput &&
      setPreviewEnteredValues((prevState) => {
        return { ...prevState, date: "Please select a date." };
      });
  };

  // !todo learn how to remap object keys and values
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.selectedDate),
    };

    props.onExpenseFormSave(expenseData);
    setUserInput(() => {
      return { enteredAmount: "", enteredTitle: "", selectedDate: "" };
    });
    setPreviewEnteredValues((prevState) => {
      return {
        ...prevState,
        title: previewEnteredValues.defaultTitle,
        amount: "Please Enter the price.",
        date: "Please select a date.",
      };
    });
    props.onCloseButtonClicked();
  };

  const closeNewExpenseBar = (e) => {
    e.preventDefault();
    console.log("bar is closed");
    props.onCloseButtonClicked();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense: {previewEnteredValues.title}</label>
          <input
            id="test"
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount: ${previewEnteredValues.amount}</label>
          <input
            type="number"
            min="0"
            max="9999"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date: {previewEnteredValues.date}</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.selectedDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={closeNewExpenseBar}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

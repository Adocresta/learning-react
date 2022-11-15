import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    selectedDate: "",
  });

  const titleChangeHandler = (e) => {
    const userInput = e.target.value;

    //setting user input
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: userInput };
    });
  };

  // this is function form of useState
  // !You need funtion form if your new state depends on previous state
  const amountChangeHandler = (e) => {
    const userInput = parseFloat(e.target.value);
    console.log(userInput);
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: userInput };
    });
  };

  const dateChangeHandler = (e) => {
    const userInput = e.target.value;
    setUserInput((prevState) => {
      return { ...prevState, selectedDate: userInput };
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
    console.log(expenseData);

    props.onExpenseFormSave(expenseData);

    // closes the bar after submit
    props.onCloseButtonClicked();
  };

  const resetValues = () => {
    setUserInput(() => {
      return { enteredAmount: "0", enteredTitle: "", selectedDate: "" };
    });
  };

  // closes the bar without saving
  const closeNewExpenseBar = (e) => {
    props.onCloseButtonClicked();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense:</label>
          <input
            id="test"
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
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
          <label>Date:</label>
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
        <button type="button" onClick={closeNewExpenseBar}>
          Cancel
        </button>
        <button type="button" onClick={resetValues}>
          Reset
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

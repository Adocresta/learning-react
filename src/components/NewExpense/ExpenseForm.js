import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const defaultTitle = "Please Enter your expense name.";
  const [enteredTitle, setEnteredTitle] = useState(defaultTitle);
  const [enteredAmount, setEnteredAmount] = useState("Free!");
  const [selectedDate, setSelectedDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    !e.target.value && setEnteredTitle(defaultTitle);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    !e.target.value && setEnteredAmount("Free!");
    e.target.value === "0" && setEnteredAmount("Free!");
  };

  const dateChangeHandler = (e) => {
    setSelectedDate(e.target.value);
    !e.target.value && setSelectedDate("Please enter a date.");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense: {enteredTitle}</label>
          <input id="test" type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount: ${enteredAmount}</label>
          <input
            type="number"
            min="0"
            max="9999"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date: {selectedDate}</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

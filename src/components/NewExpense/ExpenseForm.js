import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const defaultTitle = "Please Enter your expense name.";
  // const [enteredTitle, setEnteredTitle] = useState(defaultTitle);
  // const [enteredAmount, setEnteredAmount] = useState("Free!");
  // const [selectedDate, setSelectedDate] = useState("");
  // using objects as useState!
  const [userInput, setUserInput] = useState({
    enteredTitle: defaultTitle,
    enteredAmount: "Free!",
    selectedDate: "Please select a date.",
  });

  const titleChangeHandler = (e) => {
    // setEnteredTitle(e.target.value);
    // !e.target.value && setEnteredTitle(defaultTitle);

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
    !e.target.value &&
      setUserInput((prevState) => {
        return { ...prevState, enteredTitle: defaultTitle };
      });
  };

  const amountChangeHandler = (e) => {
    // setUserInput(e.target.value);
    // !e.target.value && setEnteredAmount("Free!");
    // e.target.value === "0" && setEnteredAmount("Free!");
    const userInput = parseFloat(e.target.value);
    console.log(userInput);
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: userInput };
    });
    !e.target.value | (userInput === 0) &&
      setUserInput((prevState) => {
        return { ...prevState, enteredAmount: "Free!" };
      });
  };

  const dateChangeHandler = (e) => {
    // setUserInput(e.target.value);
    // !e.target.value && setSelectedDate("Please select a date.");
    setUserInput((prevState) => {
      return { ...prevState, selectedDate: e.target.value };
    });
    !e.target.value &&
      setUserInput((prevState) => {
        return { ...prevState, selectedDate: "Please select a date." };
      });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense: {userInput.enteredTitle}</label>
          <input id="test" type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount: ${userInput.enteredAmount}</label>
          <input
            type="number"
            min="0"
            max="9999"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date: {userInput.selectedDate}</label>
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

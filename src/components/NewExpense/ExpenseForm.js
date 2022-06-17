import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const defaultTitle = "Title";
  const [enteredTitle, setEnteredTitle] = useState(defaultTitle);
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    !e.target.value && setEnteredTitle(defaultTitle);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{enteredTitle}</label>
          <input id="test" type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min=".01" max=".01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

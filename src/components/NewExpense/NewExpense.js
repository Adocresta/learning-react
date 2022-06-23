import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseformSaveHandler = (expenseFormData) => {
    const expenseData = {
      ...expenseFormData,
      id: Math.random().toString(),
    };
    // sending data up!
    props.onNewExpense(expenseData);
  };

  const [showBar, setShowBar] = useState(false);

  const hiddenExpenseForm = (
    <button
      onClick={() => {
        setShowBar(true);
      }}
    >
      Add New Expense!
    </button>
  );

  const shownExpenseForm = (
    <ExpenseForm
      onExpenseFormSave={expenseformSaveHandler}
      onCloseButtonClicked={() => {
        setShowBar(false);
      }}
    />
  );

  return (
    <div className="new-expense">
      {showBar ? shownExpenseForm : hiddenExpenseForm}
    </div>
  );
};

export default NewExpense;

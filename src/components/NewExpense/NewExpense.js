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
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSave={expenseformSaveHandler} />
    </div>
  );
};

export default NewExpense;

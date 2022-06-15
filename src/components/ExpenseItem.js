import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 6, 15).toDateString();
  const expenseName = "React Course";
  const expenseAmount = 12.9;

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

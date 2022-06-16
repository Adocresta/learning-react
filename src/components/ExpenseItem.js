import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";

// passing with props
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseItemDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

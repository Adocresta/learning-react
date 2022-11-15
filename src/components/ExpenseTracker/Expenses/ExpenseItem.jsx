import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../../UI/Card";

// passing with props
function ExpenseItem(props) {
  const { date } = props;
  const { title } = props;
  const { amount } = props;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseItemDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

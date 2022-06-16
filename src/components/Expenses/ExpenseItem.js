import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";
import { useState } from "react";

// passing with props
function ExpenseItem(props) {
  // Use state calls the component again
  const [title, setTitle] = useState(props.title);
  const changeTitle = () => {
    setTitle("Updated");
    // we don't see the new title rigtt away because react schedules the event
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={changeTitle}>Change Text</button>
    </Card>
  );
}

export default ExpenseItem;

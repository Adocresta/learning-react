import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  // Destructuring in Objects
  const { expenses } = props;
  const [selectedYearValue, setSelectedYearValue] = useState("2020");
  const yearFilterHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYearValue(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYearValue}
        onYearSelected={yearFilterHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;

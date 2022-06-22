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

  function createExpenseItemArray(expenses) {
    return expenses.map((element) => {
      return (
        <ExpenseItem
          title={element.title}
          amount={element.amount}
          date={element.date}
          key={element.id}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYearValue}
        onYearSelected={yearFilterHandler}
      />
      {createExpenseItemArray(expenses)}
    </Card>
  );
}

export default Expenses;

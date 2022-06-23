import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesFilter/ExpensesList";

function Expenses(props) {
  // Destructuring in Objects
  const { expenses } = props;
  const [selectedYearValue, setSelectedYearValue] = useState("2020");

  const yearFilterHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYearValue(selectedYear);
    // !Dont create new array here👇 it uses old selectedYearValue instead pass year as parameter in jsx
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYearValue
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYearValue}
        onYearSelected={yearFilterHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;

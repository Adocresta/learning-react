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
    // !Dont create new array here👇 it uses old selectedYearValue instead pass year as parameter in jsx
  };

  // filter stuff and map it directly no exstra step needed! filter won't effect original array just creates new one
  const createExpenseItemArray = (expenses, _selectedYear) => {
    const filteredExpenses = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === _selectedYear
    );
    console.log(filteredExpenses);
    // checking if there is no data to show and inform the user
    if (filteredExpenses.length === 0) {
      return <p>No Expenses found.</p>;
    } else {
      return filteredExpenses.map((element) => {
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
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYearValue}
        onYearSelected={yearFilterHandler}
      />
      {createExpenseItemArray(expenses, selectedYearValue)}
    </Card>
  );
}

export default Expenses;

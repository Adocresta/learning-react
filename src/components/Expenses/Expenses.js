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
    // !Dont create new funtion here it uses old selectedYearValue
    // const newArray = filteredExpenses.filter(
    //   (expense) => expense.date.getFullYear() === parseInt(selectedYearValue)
    // );
    // console.log(newArray);
    // setFilteredExpenses(
    //   expenses.filter(
    //     (expense) => expense.date.getFullYear() === parseInt(selectedYearValue)
    //   )
    // );
  };

  // Create a new array inside take date and check every object inside it with filter
  // this returns also a new array which save it inside the funtion
  // and we map this array to creat dynamic html(jsx)
  const createExpenseItemArray = (expenses, date) => {
    const newArray = expenses.filter(
      (expense) => expense.date.getFullYear() === parseInt(date)
    );
    return newArray.map((element) => {
      return (
        <ExpenseItem
          title={element.title}
          amount={element.amount}
          date={element.date}
          key={element.id}
        />
      );
    });
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

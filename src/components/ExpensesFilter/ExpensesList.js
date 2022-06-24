import ExpenseItem from "../Expenses/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const { expenses } = props;
  // filter stuff and map it directly no exstra step needed! filter won't effect original array just creates new one
  const expensesContent = (
    <h2 className="expenses-list__fallback">No Expenses found.</h2>
  );
  let listCreatedDynamically = null;

  if (expenses.length > 0) {
    listCreatedDynamically = expenses.map((element) => {
      return (
        <ExpenseItem
          title={element.title}
          amount={element.amount}
          date={element.date}
          key={element.id}
        />
      );
    });
  } else {
    return expensesContent;
  }

  return <ul className="expenses-list">{listCreatedDynamically}</ul>;
};

export default ExpensesList;

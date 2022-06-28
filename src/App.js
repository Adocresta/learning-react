import "./App.css";
import React, { useState } from "react";

import Header from "./components/UI/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/UI/Footer";
// Expense Tracker Files
import Expenses from "./components/ExpenseTracker/Expenses/Expenses";
import NewExpense from "./components/ExpenseTracker/NewExpense/NewExpense";
// Username Tracker Files
import AddUserPanel from "./components/UsernameTracker/AddUserPanel/AddUserPanel";
import UserDataList from "./components/UsernameTracker/UserDataList/UserDataList";

// fragment tags for a parent element
function App() {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const addNewExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevState) => {
      return [
        {
          id: expense.id,
          title: expense.title,
          amount: expense.amount,
          date: expense.date,
        },
        ...prevState,
      ];
    });
  };

  const [userData, setUserData] = useState([
    {
      id: "e1",
      username: "Adocresta",
      age: 22,
    },
    {
      id: "e2",
      username: "Adosta",
      age: 22,
    },
  ]);

  const addNewUserDataHandler = (data) => {
    console.log(data);
    setUserData((prevState) => {
      return [
        {
          id: data.id,
          username: data.username,
          age: data.age,
        },
        ...prevState,
      ];
    });
  };

  // Show or hide the project
  const [showExpenseTracker, setShowExpenseTracker] = useState(false);

  const toggleExpenseTracker = () => {
    setShowExpenseTracker((prevState) => !prevState);
  };

  const ExpenseTracker = (
    <>
      <NewExpense onNewExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );

  return (
    <React.Fragment>
      <Header onShowExpenseTracker={toggleExpenseTracker} />
      <MainContent />
      {showExpenseTracker && ExpenseTracker}
      <AddUserPanel onNewUserData={addNewUserDataHandler} />
      <UserDataList userData={userData} />
      <Footer />
    </React.Fragment>
  );
}

export default App;

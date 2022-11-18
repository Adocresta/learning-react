import React, { useState } from "react";

// UI Components
import Header from "./components/UI/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/UI/Footer";
// Expense Tracker Components
import Expenses from "./components/ExpenseTracker/Expenses/Expenses";
import NewExpense from "./components/ExpenseTracker/NewExpense/NewExpense";
// Username Tracker Components
import AddUserPanel from "./components/UsernameTracker/AddUserPanel/AddUserPanel";
import UsersDataList from "./components/UsernameTracker/UserDataList/UsersDataList";
import LoginMenu from "./components/LoginMenu/LoginMenu";

function App() {
  // Expense Tracker Datas
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ]);

  // Expense Tracker New Data
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

  // Add user app
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

  // Toggles Expense Tracker
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

  // Toggles About Section
  const [showAbout, setShowAbout] = useState(true);

  const toggleAboutHandler = () => {
    setShowAbout((prevState) => !prevState);
  };

  const AboutSection = <MainContent onShowMainContent={toggleAboutHandler} />;

  return (
    <React.Fragment>
      <Header
        onShowExpenseTracker={toggleExpenseTracker}
        onShowAbout={toggleAboutHandler}
      />
      {showAbout && AboutSection}
      {showExpenseTracker && ExpenseTracker}
      <AddUserPanel onNewUserData={addNewUserDataHandler} />
      <UsersDataList usersData={userData} />
      <LoginMenu></LoginMenu>
      <Footer />
    </React.Fragment>
  );
}

export default App;

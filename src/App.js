import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Expenses from "./components/Expenses";
import React from "react";

// fragment tags for a parent element
function App() {
  const expenses = [
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
  ];

  return (
    <React.Fragment>
      <Header />
      <MainContent />
      <Expenses expenses={expenses} />
      <Expenses expenses={expenses} />
      <Footer />
    </React.Fragment>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ExpenseItem from "./components/ExpenseItem";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
      <ExpenseItem></ExpenseItem>
      <Footer />
    </React.Fragment>
  );
}

export default App;
// fragment tags for a parent element

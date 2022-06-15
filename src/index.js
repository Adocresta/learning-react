import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import reportWebVitals from "./reportWebVitals";
import ExpenseItem from "./components/ExpenseItem";

// fragment tags for a parent element
function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <ExpenseItem></ExpenseItem>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

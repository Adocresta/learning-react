import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

// I will put header into a seperate componenet
function Header() {
  return (
    <header>
      <nav>
        <img className="nav-logo" src="logo512.png" alt="logo" />
        <ul className="nav-items">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contant</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <>
      <h1>Why I am learning React?</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Adocresta development. All rights reserved.</small>
    </footer>
  );
}

// fragment tags for a parent element
function Page() {
  return (
    <>
      <Header />
      <MainContent />
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

import logo from "../../assets/adocresta.svg";
import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <nav>
        <img src={logo} className="App-logo nav-logo" alt="logo" />
        <ul className="nav-items">
          <li>
            <a href="#" onClick={props.onShowExpenseTracker}>
              Expense Tracker
            </a>
          </li>
          <li>
            <a href="#" onClick={props.onShowAbout}>
              About
            </a>
          </li>
          <li>
            <a href="#">Content</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

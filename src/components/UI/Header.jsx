// import "./Header.css";
// Components
import Button from "./Button";
// Assets
import logo from "../../assets/adocresta.svg";

export default function Header(props) {
  return (
    <header className="container mx-auto px-6 py-2 border border-black border-solid shadow-header-shadow">
      <nav className="flex flex-row items-center justify-between">
        <div className="animate-app-logo-spin w-14">
          <img
            className="rounded-full border-stone-800 border-dashed border-2"
            src={logo}
            alt="logo"
          />
        </div>
        <ul className="hidden md:flex flex-row space-x-5">
          <li>
            <Button href="#" onClick={props.onShowExpenseTracker}>
              Expense Tracker
            </Button>
          </li>
          <li>
            <Button href="#" onClick={props.onShowAbout}>
              About
            </Button>
          </li>
          <li>
            <Button href="#" onClick={props.onShowAbout}>
              Content
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

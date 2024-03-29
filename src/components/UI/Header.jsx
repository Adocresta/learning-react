import { useContext } from "react";
// Components
import ATagButton from "./ATagButton";
// Assets
import logo from "../../assets/adocresta.svg";
// Context
import AuthContextProvider from "../../context/auth-context";

export default function Header(props) {
  const ctx = useContext(AuthContextProvider);

  return (
    <header className="container mx-auto px-6 py-2 border border-black border-solid shadow-header-shadow">
      <nav className="flex flex-row items-center justify-between">
        <div className="animate-app-logo-spin w-14">
          <img
            className="rounded-full border-stone-800 border-dashed border-2 bg-stone-600"
            src={logo}
            alt="logo"
          />
        </div>
        <ul className="hidden md:flex flex-row space-x-5">
          {ctx.isLoggedIn ? (
            <li>
              <ATagButton href="#" onClick={props.onShowExpenseTracker}>
                Expense Tracker
              </ATagButton>
            </li>
          ) : null}
          {ctx.isLoggedIn ? (
            <li>
              <ATagButton href="#" onClick={props.onShowUserList}>
                User List
              </ATagButton>
            </li>
          ) : null}
          {ctx.isLoggedIn ? (
            <li>
              <ATagButton href="#" onClick={props.onShowAbout}>
                About
              </ATagButton>
            </li>
          ) : null}
          {ctx.isLoggedIn ? (
            <li>
              <ATagButton href="#" onClick={ctx.onLogout}>
                Sign Out
              </ATagButton>
            </li>
          ) : (
            <li className="text-white">please sign in</li>
          )}
        </ul>
        {/* // !TODO: implement ||| button} */}
      </nav>
    </header>
  );
}

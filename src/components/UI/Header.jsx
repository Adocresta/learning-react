import { useContext, useState } from "react";
// Components
import ATagButton from "./ATagButton";
// Assets
import logo from "../../assets/adocresta.svg";
// Context
import AuthContext from "../context/auth-context";

export default function Header(props) {
  const ctx = useContext(AuthContext);
  console.log(ctx);

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
            <ATagButton href="#" onClick={props.onShowExpenseTracker}>
              Expense Tracker
            </ATagButton>
          </li>
          <li>
            <ATagButton href="#" onClick={props.onShowAbout}>
              About
            </ATagButton>
          </li>
          <li>
            <ATagButton href="#" onClick={props.onShowAbout}>
              Content
            </ATagButton>
          </li>
          {ctx.isLoggedIn ? (
            <li>
              <ATagButton href="#" onClick={ctx.onLogout}>
                Sign Out
              </ATagButton>
            </li>
          ) : null}
        </ul>
        {/* // !TODO: implement ||| button} */}
      </nav>
    </header>
  );
}

import logo from "../logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} className="App-logo nav-logo" alt="logo" />
        <ul className="nav-items">
          <li>
            <a href="">Pricing</a>
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

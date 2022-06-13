const navBar = (
  <nav className="nav-bar">
    <h1>Ice creams</h1>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
);

ReactDOM.render(navBar, document.querySelector("#root"));

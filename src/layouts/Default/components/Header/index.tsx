import * as Nav from "../Nav";
import NavBar from "../NavBar";

export default function Header() {
  return (
    <header>
      <h1 className="sr-only">App</h1>

      <NavBar>
        <Nav.List>
          <Nav.Item to="/">Home</Nav.Item>

          <Nav.Item to="/about">About</Nav.Item>
        </Nav.List>
      </NavBar>
    </header>
  );
}

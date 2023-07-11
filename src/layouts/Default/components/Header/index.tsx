import * as Nav from "../Nav";
import NavBar from "../NavBar";

export default function Header() {
  return (
    <header>
      <h1 className="sr-only">Me ve uma história!</h1>

      <NavBar>
        <Nav.List>
          <Nav.Item to="/">Início</Nav.Item>

          <Nav.Item to="/about">Sobre</Nav.Item>
        </Nav.List>
      </NavBar>
    </header>
  );
}

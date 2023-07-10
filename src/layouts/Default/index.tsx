import { Link, Outlet } from "react-router-dom";

export default function Default() {
  return (
    <div>
      <header>
        <h1>App</h1>

        <nav>
          <h2>Navigation</h2>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>All rights reserved.</small>
      </footer>
    </div>
  )
}

import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav
      className="flex"
    >
      <Link
        to="/"
      >
        <h1>
          Mach Typer
        </h1>
      </Link>
      <Link to="/">first</Link>
      <Link to="/">second</Link>
      <Link to="/">third</Link>
    </nav>
  );
}

export default Navbar;

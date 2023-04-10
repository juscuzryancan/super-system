import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav
      className="flex py-4 justify-between"
    >
      <Link
        to="/"
      >
        <h1>
          Mach Typer
        </h1>
      </Link>
      <div
        className="flex gap-4 justify-between"
      >
        <Link className="bg-secondary px-2 py-1 rounded text-white" to="/game">Start Typing</Link>
        <Link className="bg-secondary px-2 py-1 rounded text-white" to="/">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;

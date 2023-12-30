import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex gap-2">
      <Link to="/">Mach Typer</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;

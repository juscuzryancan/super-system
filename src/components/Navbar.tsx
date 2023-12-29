import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Mach Typer</Link>
      </h1>
    </nav>
  );
};

export default Navbar;

import { Link }  from "react-router-dom";

const Home = () => {

  return (
    <div
        className="flex flex-col justify-center items-center
        p-8"
    >
      <div>
        Mach-Typer is a typing application used to encourage people to develop their typing skills with a game-ified application. 
      </div>
      <Link
        to="/start"
      >
        Start typing
      </Link>
    </div>
  );
}

export default Home;

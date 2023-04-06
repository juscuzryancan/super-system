import { Link }  from "react-router-dom";

const Home = () => {

  return (
    <div
      className="flex flex-col justify-center items-center
      p-8"
    >
      <div className="flex flex-col items-center bg-secondary 
        text-slate-400 p-8 rounded">
        <div className="flex justify-center">
          Mach-Typer is a typing application used to encourage people to develop their typing skills with a game-ified application. 
        </div>
        <Link
          className="bg-tertiary px-2 py-1 rounded
          max-w-fit"
          to="/start"
        >
          Start typing
        </Link>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Home;

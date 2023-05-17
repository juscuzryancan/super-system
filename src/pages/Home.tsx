import { Link }  from "react-router-dom";

const Home = () => {

  return (
    <div
      className="flex flex-col justify-center gap-16
      p-8"
    >
      <div 
        className="flex flex-col items-center bg-secondary gap-4
        text-white p-8 rounded"
      >
        <div className="flex justify-center">
          Mach-Typer is a typing application used to encourage people to develop their typing skills with a game-ified application. 
        </div>
        <Link
          className="bg-tertiary px-2 py-1 rounded
          max-w-fit"
          to="/game"
        >
          Start typing
        </Link>
      </div>

      <section
        className="flex flex-col items-center bg-secondary gap-4
        text-white p-8 rounded"
      >
        <header className="text-3xl">Practice your Typing</header>

      </section>

      <section
        className="flex flex-col items-center bg-secondary gap-4
        text-white p-8 rounded"
      >
        <header className="text-3xl">Multiplayer</header>

      </section>

      <section
        className="flex flex-col items-center bg-secondary gap-4
        text-white p-8 rounded"
      >
        <header className="text-3xl">Track your statistics</header>
      </section>

      <footer className="flex flex-col bg-secondary gap-4
        text-white p-8 rounded"
      >
        <header className="text-2xl">Mach Typer</header>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <header>
              About
            </header>
            <Link to="/">somehwer</Link>
          </div>
          <div>
            Use Cases
          </div>
          <div>
            Company
          </div>
          <div>
            Resources
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;

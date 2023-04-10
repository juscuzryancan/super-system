import Chat from "../components/Chat";
import Words from "../components/Words";
const Game = () => {

  return (
    <div className="flex flex-col h-full">
      <Words />
      <Chat />
    </div>
  );
}

export default Game;

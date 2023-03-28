import { useState, useEffect, FormEventHandler } from 'react'
import { io, Socket } from "socket.io-client";
import p5 from "p5";
import Words from './components/Words';

function App() {
  const [socketId, setSocketId] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [socket, setSocket] = useState(io("http://localhost:3000"));

  useEffect(() => {

    socket.on("connect", () => {
      console.log("this is my id", socket.id);
      setSocketId(socket.id);
    })

    socket.on("receiveMessage", (data) => {
      console.log("im receiving message: ", data);
      const messagesElem = document.querySelector(".messages");
      const newMessageElem = document.createElement("p");
      newMessageElem.innerText = data;
      if (messagesElem) {
        messagesElem.append(newMessageElem);
      }
    });

    return () => {
      socket.off("connect");
      socket.off("receiveMessage");
    }

  }, [])

  const handleSendMessage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <header>
        Room Id: {socketId}
      </header>

      <div className="flex-grow">

        <Words/>
      </div>

      <div className="messages 
        overflow-auto
        border-black border-2
        h-72 w-full" />
      <form onSubmit={handleSendMessage}>
        <input className="border-black border-2 rounded" type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      </form>
    </div>
  )
}

export default App

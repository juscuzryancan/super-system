import { useState, useEffect, FormEventHandler } from 'react'
import { io, Socket } from "socket.io-client";
import p5 from "p5";
import Words from './components/Words';
import Chat from './components/Chat';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  const [socketId, setSocketId] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  // const [socket, setSocket] = useState(io("http://localhost:3000"));

  // useEffect(() => {

  //   socket.on("connect", () => {
  //     console.log("this is my id", socket.id);
  //     setSocketId(socket.id);
  //   })

  //   socket.on("receiveMessage", (data) => {
  //     console.log("im receiving message: ", data);
  //     const messagesElem = document.querySelector(".messages");
  //     const newMessageElem = document.createElement("p");
  //     newMessageElem.innerText = data;
  //     if (messagesElem) {
  //       messagesElem.append(newMessageElem);
  //     }
  //   });

  //   return () => {
  //     socket.off("connect");
  //     socket.off("receiveMessage");
  //   }

  // }, [])

  const handleSendMessage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // socket.emit("message", message);
    setMessage("");
  }

  return (
    <div
      className="mx-8"
    >
      <Navbar />
      <main>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/login"
            element={<div>hello</div>}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App;

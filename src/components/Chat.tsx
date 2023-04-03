import { useState, useEffect, FormEventHandler } from "react";
import Words from "./Words"
// @ts-ignore
import Stomp from "stomp-websocket";
import SockJS from "sockjs-client";
import { io } from "socket.io-client";

const Chat = () => {
  const [stompClient, setStompClient] = useState(null);
  
  const handleSocket = () => {
    const sock = io("");

    var socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame: any) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting: any) {
            console.log(JSON.parse(greeting.body).content);
        });
    });}

  useEffect(() => {
    handleSocket();
  }, []);

//   function connect() {
// 	ws = new WebSocket('ws://localhost:8080/name');
// 	ws.onmessage = function(data){
// 		showGreeting(data.data);
// 	}
// 	 setConnected(true);
// }

// function disconnect() {
//     if (ws != null) {
//         ws.close();
//     }
//     setConnected(false);
//     console.log("Disconnected");
// }

// function sendName() {
//     ws.send($("#name").val());
// }

// function showGreeting(message) {
//     $("#greetings").append(" " + message + "");
// }

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

    <div className="flex flex-col">
      <div className="messages 
        overflow-auto
        border-black border-2
        h-72 w-full" />
      {/* <form onSubmit={handleSendMessage}> */}
      {/*   <input className="border-black border-2 rounded" type="text" value={message} onChange={(e) => setMessage(e.target.value)}/> */}
      {/* </form> */}
    </div>
  )
}

export default Chat;

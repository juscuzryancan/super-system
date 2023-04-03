import { useState, useEffect, FormEventHandler } from "react";
import SockJS from "sockjs-client";
// @ts-ignore
import Stomp from "stomp-websocket";

const Chat = () => {
  const [stompClient, setStompClient] = useState<any>(null);
  const [message, setMessage] = useState<string>("");
  const [connected, setConnected] = useState(false);
  

//   function disconnect() {
//     if (stompClient !== null) {
//         stompClient.disconnect();
//     }
//     setConnected(false);
//     console.log("Disconnected");
// }

// function sendName() {
//     stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
// }

// function showGreeting(message) {
//     $("#greetings").append("<tr><td>" + message + "</td></tr>");
// }


  const handleConnect = () => {
    const socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    const stompClient = Stomp.over(socket);
    setStompClient(stompClient);
    stompClient.connect({}, function (frame:any) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting: any) {
            console.log(JSON.parse(greeting.body).message);
        });
    });
  }

  const handleDisconnect = () => {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
  }

  const handleSend: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    stompClient.send("/app/hello", {}, JSON.stringify({'name': message}));
  }

  return (

    <div className="flex flex-col">
      <div className="messages 
        overflow-auto
        border-black border-2
        h-72 w-full" 
      />
        {connected 
        ? <div className="p-12 bg-green-700">Connected</div>
        : <div className="p-12 bg-red-700">Disconnected</div>
        }
      <button onClick={handleConnect}>
        Connect
      </button>
      <button onClick={handleDisconnect}>
        Disconnect
      </button>
      <form onSubmit={handleSend}>
        <label>Message</label>
        <input className="border-black border-2 rounded" type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chat;

import { useState, useEffect, FormEventHandler } from "react";
import SockJS from "sockjs-client";
// @ts-ignore
import Stomp from "stomp-websocket";

const Chat = () => {
  const [stompClient, setStompClient] = useState<any>(null);
  const [message, setMessage] = useState<string>("");
  
  const handleSocket = () => {
    var socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    const stompClient = Stomp.over(socket)
    setStompClient(stompClient);
    // stompClient.connect({}, function (frame: any) {
    //   console.log('Connected: ' + frame);
    //   stompClient.subscribe('/topic/greetings', function (greeting: any) {
    //     console.log(greeting);
    //   });
    // });
  }

  const handleConnect = () => {
    console.log("handling connecting", stompClient);
    stompClient.connect({}, function (frame: any) {
      console.log('Connected: ' + frame);
      stompClient.subscribe('/topic/greetings', function (greeting: any) {
        console.log(greeting);
      });
    });
  }

  const handleSend: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("handling sending");
    stompClient.send("/app/hello", {}, JSON.stringify({'name': message}));
  }

  useEffect(() => {
    handleSocket();
  }, []);

  return (

    <div className="flex flex-col">
      <div className="messages 
        overflow-auto
        border-black border-2
        h-72 w-full" 
      />
      <button onClick={handleConnect}>
        Connect
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

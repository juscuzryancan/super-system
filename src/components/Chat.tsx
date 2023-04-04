import { useState, useEffect, useCallback, FormEventHandler, MouseEventHandler } from "react";
import SockJS from "sockjs-client";
// @ts-ignore
import Stomp from "stomp-websocket";

const Chat = () => {
  const [stompClient, setStompClient] = useState<any>(null);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Array<any>>([]);

  useEffect(() => {
    if (!stompClient) {
      return
    }

    stompClient.subscribe('/topic/greetings', function (greeting: any) {
      const { body } = greeting;
      const { message } = JSON.parse(body);
      const newMessages = messages.map((message) => message);
      newMessages.push({
        content: message,
        id: greeting.headers["message-id"]
      });
      setMessages(newMessages);
    });
  }, [messages])
  
  const handleConnect = () => {
    const socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    const stompClient = Stomp.over(socket);
    setStompClient(stompClient);

    //frame comes out to be undefined
    stompClient.connect({}, function (frame:any) {
        setConnected(true);
        stompClient.subscribe('/topic/greetings', function (greeting: any) {
          const { body } = greeting;
          const { message } = JSON.parse(body);
          const newMessages = messages.map((message) => message);
          newMessages.push({
            content: message,
            id: greeting.headers["message-id"]
          });
          setMessages(newMessages);
        });
    });
  };

  const handleDisconnect = () => {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
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
      >
        {messages.map(({content, id}: any) => {
          return (
            <div key={id}>
              {content}
            </div>
          )
        })}
      </div>
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
      <form 
        onSubmit={handleSend}
      >
        <label>Message</label>
        <input className="border-black border-2 rounded" type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button disabled={!connected} type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chat;

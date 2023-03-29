import Words from "./Words"

const Chat = () => {

  return (

    <div className="flex flex-col w-screen h-screen">
      <header>
        {/* Room Id: {socketId} */}
      </header>

      <div className="flex-grow">
        <Words/>
      </div>

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

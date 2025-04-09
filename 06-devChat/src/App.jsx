import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as signalR from "@microsoft/signalr";

import Chat from "./pages/Chat";
import { useEffect, useState } from "react";
import Join from "./pages/Join";

function App() {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:3000")
    .withAutomaticReconnect()
    .build();

  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("Liminha");
  const [message, setMessage] = useState("");

  useEffect(() => {
    connection.start().then(() => {
      console.log("Conectado!");
    });

    connection.on("ReceiveMessage", (user, message) => {
      setMessages((prev) => [...prev, { user, message }]);
    });
  }, []);
  const sendMessage = async () => {
    if (message) {
      await connection.invoke("SendMessage", user, message);
      setMessage("");
    }
  };

  return (
    <div className="m-0 p-0 d-flex justify-content-center align-items-center bg-dark text-light">
      <h1>Chat do Liminha 🟢</h1>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <button onClick={sendMessage}>Enviar</button>

      <Join setSocket={setUser} visibility={setMessages} />
      <Chat socket={connection} messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;

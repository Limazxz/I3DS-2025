import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Chat from "./pages/Chat";
import { useEffect, useState } from "react";
import Join from "./pages/Join";

function App() {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [isChatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    if (!connection) return;

    connection.start().then(() => {
      console.log("✅ Conectado ao SignalR");
      connection.invoke("GetMessages");
    });

    connection.on("ReceiveMessage", (user, message) => {
      setMessages((prev) => [...prev, { user, message }]);
    });

    connection.on("MessageHistory", (history) => {
      setMessages(history);
    });

    return () => {
      connection.stop();
    };
  }, [connection]);

  const sendMessage = async () => {
    if (message && connection) {
      await connection.invoke("SendMessage", user, message);
      setMessage("");
    }
  };

  return (
    <div className="m-0 p-0 d-flex justify-content-center align-items-center bg-dark text-light ">
      {!isChatVisible ? (
        <Join
          setSocket={({ connection, username }) => {
            setConnection(connection);
            setUser(username);
          }}
          visibility={setChatVisible}
        />
      ) : (
        <div className="container">
          <h1 className="text-center mb-4">Chat do Liminha 🟢</h1>

          <div className="mb-3">
            {messages.map((msg, idx) => (
              <div key={idx}>
                <strong>{msg.user}:</strong> {msg.message}
              </div>
            ))}
          </div>

          <div className="input-group mb-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem"
              className="form-control"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="btn btn-success" onClick={sendMessage}>
              Enviar
            </button>
          </div>

          <Chat
            socket={{ connection, username: user }}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
      )}
    </div>
  );
}

export default App;

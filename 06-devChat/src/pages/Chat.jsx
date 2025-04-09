import React, { useEffect, useRef, useState } from "react";

const Chat = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const bottomRef = useRef();

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const data = event.data;
      setMessageList((prev) => [...prev, { author: "Servidor", text: data }]);
    };

    return () => {
      socket.close();
    };
  }, [socket]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.send(message);
      setMessageList((prev) => [...prev, { author: "Você", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="chat-card d-flex flex-column shadow-lg p-3">
      <div className="flex-grow-1 overflow-auto mb-2">
        {messageList.map((msg, idx) => (
          <div
            key={idx}
            className={`d-flex flex-column ${
              msg.author === "Você"
                ? "align-self-end text-end bg-primary text-light p-2 rounded"
                : "align-self-start text-start bg-secondary text-light p-2 rounded"
            }`}
            style={{ maxWidth: "75%" }}
          >
            <strong>{msg.author}</strong>: {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="input-group">
        <input
          type="text"
          className="container form-control text-light bg-black"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="btn btn-light" onClick={sendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            fill="black"
            className="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 1 .01.848l-14 9a.5.5 0 0 1-.743-.448V8.5l7-1-7-1V5.914a.5.5 0 0 1 .743-.448l14 9a.5.5 0 0 1-.01.848z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chat;

import React, { useEffect, useRef, useState } from "react";

const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });
    return () => props.socket.off("receive_message");
  }, [props.socket]);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = () => {
    if (
      messageList.map((message) => {
        if (message.username == "undefined") {
          window.location.reload();
          return;
        }
      })
    );

    const message = messageRef.current.value;
    if (!message.trim()) return;

    props.socket.emit("message", message);

    //Enviando a mensagem para o servidor
    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div
      id="chat-container"
      style={{ width: "400px", height: "600px" }}
      className="m-4 bg-secondary rounded-4 p-3 d-flex flex-column"
    >
      <div
        id="chat-body"
        className="overflow-y-auto flex-grow-1 h-100 d-flex flex-column"
      >
        {messageList.map((message, index) => (
          <div
            className={`${
              message.authorId === props.socket.id
                ? "align-self-end bg-light m-2 bg-dark"
                : "align-self-start bg-light m-2 text-dark bg-light"
            } rounded-3 p-2`}
            key={index}
          >
            <div id="message-author" className="fw-bold">
              {message.author}
            </div>
            <div id="message-text">{message.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="input-group-text border-0 w-100" id="chat-footer">
        <input
          ref={messageRef}
          autoFocus
          type="text"
          className="form-control bg-light"
          placeholder="Digite sua mensagem..."
          onKeyDown={(e) => e.key == "Enter" && handleSubmit()}
        />
        <button
          className="input-group-text btn btn-light m-0"
          id="basic-addon1"
          onClick={() => handleSubmit()}
        >
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;

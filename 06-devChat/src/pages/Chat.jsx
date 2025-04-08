import React from "react";

const Chat = (props) => {
  //fake massage data
  const messages = [
    {
      authorId: 1,
      author: "John Doe",
      message: "olá como vai você?",
    },
    {
      authorId: 2,
      author: "Jane Doe",
      message: "Estou bem, e você?",
    },
    {
      authorId: 3,
      author: "Lucas Doe",
      message: "Estou bem, e você?",
    },
  ];
  //-----------------------------------

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
        {messages.map((message, index) => (
          <div
            className="align-self-start bg-light m-3 rounded-3 p-2 text-dark"
            key={index}
          >
            <div id="message-author" className="fw-bold">
              {message.author}
            </div>
            <div id="message-text">{message.message}</div>
          </div>
        ))}
      </div>

      <div className="input-group-text border-0 w-100" id="chat-footer">
        <input id="msgUser" name="msgUser"
          type="text"
          className="form-control bg-light"
          placeholder="Digite sua mensagem..."
        />
        <button className="input-group-text btn btn-light m-0" id="basic-addon1" >
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;

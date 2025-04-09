import React, { useRef } from "react";
import io from "socket.io-client";
import { HubConnectionBuilder } from "@microsoft/signalr";

const Join = (props) => {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value.trim();
    if (!username || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    // Criando a conexão com o SignalR
    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:3000/chathub")
      .withAutomaticReconnect()
      .build();

    try {
      await connection.start();
      props.setSocket({ connection, username });
      props.visibility(true);
    } catch (error) {
      console.error("Erro ao conectar ao SignalR:", error);
      alert("Não foi possível conectar ao servidor. Tente novamente.");
    }

    // Criando a conexão com o socket.io
    const servidorSocket = await io.connect("http://localhost:5000/chathub", {
      transports: ["websocket"],
    });

    // Enviando o nome de usuário para o servidor
    servidorSocket.emit("set_username", username);

    // Abrindo a página de chat
    props.setSocket(servidorSocket);
    props.visibility(true);
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="text-center shadow-lg p-4">
        <h1 className="text-white mb-4">devChat 💬</h1>
        <h4 className="text-white mb-3 text-light">Bem-vindo ao devChat!</h4>
        <input
          ref={usernameRef}
          type="text"
          className="text-light form-control mb-3"
          placeholder="Nome de usuário"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          className="btn btn-success w-100"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;

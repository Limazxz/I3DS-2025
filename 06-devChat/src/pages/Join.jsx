import React, { useRef } from "react";

const Join = ({ setSocket, visibility }) => {
  const usernameRef = useRef();

  const handleSubmit = () => {
    const username = usernameRef.current.value.trim();
    if (!username || username.length < 3) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    const socket = new WebSocket("http://localhost:54430");

    socket.onopen = () => {
      socket.send(username);
      setSocket(socket);
      visibility(true);
    };

    socket.onerror = (err) => {
      console.error("Erro ao conectar ao WebSocket:", err);
      alert("Não foi possível conectar ao servidor. Tente novamente.");
    };
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
        <button className="btn btn-success w-100" onClick={handleSubmit}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;

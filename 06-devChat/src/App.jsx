import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Chat from "./pages/Chat";
import { useState } from "react";
import Join from "./pages/Join";

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <div className=" m-0 p-0 vh-100 d-flex justify-content-center align-items-center bg-dark text-light">
      {chatVisibility ? (
        <Chat socket={socket} />
      ) : (
        <Join setSocket={setSocket} visibility={setChatVisibility} />
      )}
    </div>
  );
}

export default App;

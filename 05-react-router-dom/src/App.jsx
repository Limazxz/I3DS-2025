import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import Sobre from"./pages/Sobre";
import Contato from"./pages/Contato";
import NaoEncontrado from "./pages/NaoEncontrado";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
       <Header />

        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>} />
          <Route path="*" element={<NaoEncontrado/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

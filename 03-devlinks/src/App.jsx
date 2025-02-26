import "./App.css";
import foto from "./img/16a057c6-2e24-48c0-a8a8-dc257a356978.jpg";
import fotodark from "./img/img3.jpg"

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(false);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>
      <Perfil fotoPerfil={isLight? fotodark : foto }>@limazxzn</Perfil>

      <Switch troca={troca} isLight={isLight} />
      <div id="container">
      <ul>
        <Links link={"https://github.com/limazxz"}>GitHub</Links>
        <Links link={"https://instagram.com/limazxzn"}>Instagram</Links>
        <Links link={"https://linkedin.com"}>Portifólios</Links>
        <Links link={"https://github.com/Limazxz?tab=repositories"}>
          Projetos
        </Links>
      </ul>
      </div>

      <div id="socialLinks">
        <SocialLinks link={"https://github.com/Limazxz"} icon={"logo-github"} />
        <SocialLinks
          link={"https://www.instagram.com/limazxzn"}
          icon={"logo-instagram"}
        />
        <SocialLinks link={"https://www.linkedin.com"} icon={"logo-linkedin"} />
        <SocialLinks
          link={"https://www.youtube.com/@astazinho7062"}
          icon={"logo-youtube"}
        />
      </div>

      <Rodape>Lima</Rodape>
    </div>
  );
};

export default App;

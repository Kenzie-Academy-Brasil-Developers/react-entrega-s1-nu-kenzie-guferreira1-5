import { Button } from "../components/Button";

import logo from "../assets/img/Nu Kenzie.png";
import imagem from "../assets/img/itens.png";

import "./index.css";

export const HomePage = ({ changePages }) => {
  return (
    <div className="container">
      <div className="principal">
        <img className="logoImg" src={logo} alt="" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <Button changePages={changePages}>Iniciar</Button>
      </div>
      <div className="divIlustracao">
        <img className="ilustracao" src={imagem} alt="" />
      </div>
    </div>
  );
};

import logo from "../../assets/img/Nu Kenzie (1).png";
import { Button } from "../Button";

import "./index.css";

export const Header = ({ changePages }) => {
  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        alt="logo Nu Kenzie"
      />
      <Button changePages={changePages}>Inicio</Button>
    </header>
  );
};

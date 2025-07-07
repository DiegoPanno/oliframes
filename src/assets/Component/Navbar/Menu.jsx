import  { useState } from "react";
import { Nav } from "react-bootstrap";

import logo from "../Navbar/logooLiframe.png";
import "./Menu.css";
import Hamburguesa from "../Hamburguesa/Hamburguesa";
import { Link as RouterLink } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="custom-navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo de la empresa" className="logo" />
      </div>
      <div className={`ms-auto ${isOpen ? "open" : ""}`}>
        <Nav.Link
          as={RouterLink}
          to="/"
          state={{ scrollTo: "home" }}
          onClick={closeMenu}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={RouterLink}
          to="/"
          state={{ scrollTo: "nosotros" }}
          onClick={closeMenu}
        >
          Nosotros
        </Nav.Link>
        <Nav.Link
          as={RouterLink}
          to="/"
          state={{ scrollTo: "que-ofrecemos" }}
          onClick={closeMenu}
        >
          ¿Qué ofrecemos?
        </Nav.Link>
        <Nav.Link as={RouterLink} to="/Obras" onClick={closeMenu}>
          Obras
        </Nav.Link>
      </div>
      <div className="hamburguesa-container" onClick={toggleMenu}>
        <Hamburguesa isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Menu;

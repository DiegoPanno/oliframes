import React from "react";
import {  Nav } from "react-bootstrap";
import { Link } from 'react-scroll';
import logo from "../Navbar/logooLiframe.png";
import "./Menu.css";
import Hamburguesa from "../Hamburguesa/Hamburguesa";


const Menu = () => {
  return (
    
      <div className="custom-navbar">
        <div href="#home" className="logo-container">
          <img src={logo} alt="Logo de la empresa" className="logo" />
        </div>

        <div className="ms-auto">
          <Nav.Link as={Link} to="home" smooth duration={500}>Home</Nav.Link>
          <Nav.Link as={Link} to="nosotros" smooth duration={500}>Nosotros</Nav.Link>
          <Nav.Link as={Link} to="que-ofrecemos" smooth duration={500}>¿Qué ofrecemos?</Nav.Link>
          
        </div>
        <Hamburguesa />
      </div>
      
    
  );
};

export default Menu;


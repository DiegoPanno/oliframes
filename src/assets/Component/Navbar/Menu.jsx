import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-scroll';
import logo from "../Navbar/logooLiframe.png";
import "./Menu.css";


const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="custom-navbar">
        <Navbar.Brand href="#home" className="logo-container">
          <img src={logo} alt="Logo de la empresa" className="logo" />
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="home" smooth duration={500}>Home</Nav.Link>
          <Nav.Link as={Link} to="nosotros" smooth duration={500}>Nosotros</Nav.Link>
          <Nav.Link as={Link} to="que-ofrecemos" smooth duration={500}>¿Qué ofrecemos?</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;


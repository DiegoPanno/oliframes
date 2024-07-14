import React from 'react';
import './Footer.css';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <div className='contenedor-footer'>
      <nav>
        <ul className="footer-menu">
          <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
          <li><ScrollLink to="nosotros" smooth={true} duration={500}>Nosotros</ScrollLink></li>
          <li><ScrollLink to="que-ofrecemos" smooth={true} duration={500}>¿Qué ofrecemos?</ScrollLink></li>
        </ul>
      </nav>
      <span className='copy'> ©2024 All rights reserved.</span>
    </div>
  );
};

export default Footer;


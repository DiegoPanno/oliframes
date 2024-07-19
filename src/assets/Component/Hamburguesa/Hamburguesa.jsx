import React from 'react';
import "./Hamburguesa.css";

const Hamburguesa = ({ isOpen }) => {
  return (
    <div className={`icon nav-icon-5 ${isOpen ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburguesa;

 

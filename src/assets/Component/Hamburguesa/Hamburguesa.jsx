import React, { useState } from 'react';
import "./Hamburguesa.css";

const Hamburguesa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`icon nav-icon-5 ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburguesa;
 

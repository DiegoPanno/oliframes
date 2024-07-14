// WhatsAppButton.jsx
import React from 'react';
import './WhatsAppButton.css';
import { openWhatsAppChat } from '../openWhatsAppChat';

const WhatsAppButton = () => {
  return (
    <button className="whatsapp-button" onClick={openWhatsAppChat}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
      WhatsApp
    </button>
  );
};

export default WhatsAppButton;


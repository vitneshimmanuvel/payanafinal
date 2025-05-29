// src/components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {

  return (
    <div className="whatsapp-fixed">
      <a
       href="https://chat.whatsapp.com/EZosWS932Td9rkdB9HQrlk"
  target="_blank"
  rel="noopener noreferrer"
        className="whatsapp-buttonn"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-iconn" />
      </a>
    </div>
  );
};

export default WhatsAppButton;

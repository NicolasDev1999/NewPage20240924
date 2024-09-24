import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importamos el ícono de WhatsApp
import "./Whatsapp.css"
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/3125293348" // Enlace a tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  );
};
export default WhatsAppButton;

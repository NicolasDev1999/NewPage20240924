import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin, FaGithub, FaEnvelope, FaReact } from "react-icons/fa"; // Importa el ícono de React
import "./Footer.css"; // Importa los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul>
            <li>
              <a href="/Banner">Inicio</a>
            </li>
            <li>
              <a href="/About">Sobre mi</a>
            </li>
            <li>
              <a href="/Gallery">Experiencia</a>
            </li>
            <li>
              <a href="/Doc/CV_Sergio Nicolas_Galindo Cante.pdf" target="blank">
                Descarga mi CV
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul className="contacto">
            <li>
              <a href="tel:+573215293348">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
            <li>
              <a
                href="mailto:sergionicolasgalindocante@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaEnvelope size={24} /> {/* Ícono de Correo */}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/sergiogalindodev/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaLinkedin size={24} /> {/* Ícono de LinkedIn */}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/NicolasDev1999"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaGithub size={24} /> {/* Ícono de GitHub */}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Todos los derechos reservados | Desarrollado por Nicolás
          Galindo
        </p>
        <p className="made-in-react">
          Hecho en React <FaReact className="react-icon" size={24} />{" "}
          {/* Ícono de React */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

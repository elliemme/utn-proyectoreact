import React from "react";
import "./footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="region-prefooter">
      <div className="wrapper-menu">
        <div class="redes">
          <div class="redes_sociales">
            <a className="social-icon" href="#">
              <FaFacebookSquare />
            </a>
            <a className="social-icon" href="#">
              <FaLinkedin />
            </a>
            <a className="social-icon" href="#">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </div>
      <div class="policy">
        <a class="po" href="#">
          Accesibilidad web
        </a>
        <p class="po">|</p>
        <a class="po" href="#">
          Aviso de privacidad
        </a>
        <p class="po">|</p>
        <a class="po" href="#">
          Condiciones de uso
        </a>
        <p class="po">|</p>
        <a class="po" href="#">
          Mapa del sitio
        </a>
      </div>
    </div>
  );
};

export default Footer;

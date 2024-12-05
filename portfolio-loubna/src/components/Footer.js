import React from "react";
import { Link } from "react-router-dom";
import "../Style/Footer.scss"; // Importation des styles SCSS

const Footer = () => (
  <footer>
    <ul>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/about">À propos</Link>
      </li>
      <li>
        <Link to="/projects">Projets</Link>
      </li>
    </ul>
    <p>&copy; 2024 - Mon Portfolio</p> {/* Ajoute un message de copyright */}
  </footer>
);

export default Footer;

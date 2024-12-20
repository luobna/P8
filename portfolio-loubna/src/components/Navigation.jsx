import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navigation.scss"; // Importation des styles SCSS

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/about">À propos</Link></li>
      <li><Link to="/projects">Projets</Link></li>
      <li><Link to="/competences">Compétences</Link></li>
      <li><Link to="/contact">Contact</Link></li>

    </ul>
  </nav>
);

export default Navigation;

import React from "react";
import "../Style/About.scss"; // Importation du fichier SCSS

const About = () => (
  <div className="about">
    <h1>À propos de moi</h1>
    <p>
      Bonjour, je m'appelle Loubna, une développeuse web passionnée par la création 
      d'applications intuitives et performantes.
    </p>
    <h2>Formations</h2>
    <ul>
      <li>Master en contrôle qualité dans les industries pharmaceutiques, alimentaires et cosmétiques.</li>
      <li>Formation en développement web, spécialisée en JavaScript, React, et Node.js.</li>
    </ul>
    <h2>Compétences</h2>
    <ul>
      <li>Développement front-end : React, HTML, CSS, SCSS</li>
      <li>Développement back-end : Node.js, Express, MongoDB</li>
      <li>Gestion de version : Git/GitHub</li>
    </ul>
  </div>
);

export default About;

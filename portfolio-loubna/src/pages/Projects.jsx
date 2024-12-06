import React from "react";
import "../Style/Projects.scss"; // Importation du fichier SCSS

const Projects = () => (
  <div className="projects">
    <h1>Mes Projets</h1>
    <p>Voici quelques projets sur lesquels j'ai travaillé :</p>
    <ul>
      <li>
        <h2>Projet 1 : Nom du projet</h2>
        <p>Description du projet, problèmes rencontrés, et compétences développées.</p>
      </li>
      <li>
        <h2>Projet 2 : Nom du projet</h2>
        <p>Description du projet, problèmes rencontrés, et compétences développées.</p>
      </li>
    </ul>
  </div>
);

export default Projects;

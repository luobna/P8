import React from "react";
import projects from "../data/projectsData"; // Importation des données des projets
import "../Style/Projects.scss"

const ProjectsPage = () => {
  return (

    <div className="projects">
      <h1>Mes Projets</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <img src={project.img} alt={`Illustration de ${project.title}`} />
          <p>{project.description}</p>
          <p><strong>Date :</strong> {project.date}</p>
          <p><strong>Mots-clés :</strong> {project.keywords.join(", ")}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;

import React from "react";
import projects from "../data/projectsData"; // Importation des données des projets
import "../Style/Projects.scss";

const ProjectsPage = () => {
  return (
    <div className="other-pages">
      <div className="projects">
        <h1>Mes Projets</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Image du projet */}
              <img 
                src={project.img} 
                alt={`Illustration de ${project.title}`} 
              />
              {/* Contenu du projet */}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="background-projets">
                  {project.description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <p>
                  <strong>Date :</strong> {project.date}
                </p>
                <p>
                  <strong>Mots-clés :</strong> {project.keywords.join(", ")}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

import React from "react";
import projects from "../data/projectsData"; // Importation des données des projets
import "../Style/Projects.scss";

const ProjectsPage = () => {
  return (
    <div className="other-pages">
       <h1 className="titre1">Ma formation</h1>
       <h2 className="titre2">Formation Développeur Web - OpenClassrooms</h2>
       <p className="p-formation"> Au cours de ma formation chez OpenClassrooms, j'ai acquis des compétences solides en développement web à travers des projets concrets et variés. Cette formation m'a permis de maîtriser les bases du développement web (HTML, CSS, JavaScript) ainsi que des technologies avancées comme React pour le frontend et Node.js pour le backend. Voici un aperçu des projets que j'ai réalisés :</p>
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

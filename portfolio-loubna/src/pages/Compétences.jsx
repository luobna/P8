import React from "react";
import "../Style/Compétences.scss"; // Fichier SCSS pour le style

const skills = [
  { name: "HTML",  icon: require(`../assets/images/HTML.png`), description: "Le langage de balisage standard pour créer des pages web et des applications web."},
  { name: "JavaScript",  icon: require(`../assets/images/javascript.png`), description: "Un langage de programmation polyvalent utilisé pour créer des pages web interactives et du contenu dynamique."},
  { name: "CSS",  icon: require(`../assets/images/CSS.png`), description: "Un langage de style utilisé pour décrire la présentation des documents écrits en HTML."},
  { name: "React",  icon: require(`../assets/images/react.png`), description: "Une bibliothèque JavaScript pour créer des interfaces utilisateur, axée sur les composants réutilisables et la gestion efficace de l'état."},
  { name: "GitHub",  icon: require(`../assets/images/github.png`), description: "Une plateforme en ligne pour le contrôle de version et la collaboration, utilisant Git." },
  { name: "Figma",  icon: require(`../assets/images/Figma.png`), description: "Un outil de conception d'interfaces collaboratif pour créer des interfaces utilisateur et des prototypes."},
  { name: "Notion",  icon: require(`../assets/images/notion.png`), description: "Un espace de travail tout-en-un pour la prise de notes, la gestion de projet et la collaboration."},
  { name: "Node.js",  icon: require(`../assets/images/nodejs.png`), description: "Un environnement d'exécution JavaScript basé sur le moteur V8 de Chrome pour créer des applications côté serveur."},
  { name: "Postman",  icon: require(`../assets/images/postman.png`), description: "Un outil populaire pour le développement d'API, permettant aux utilisateurs de créer, partager et tester des API."},
  { name: "Sass",  icon: require(`../assets/images/sass.png`), description: "Préprocesseur CSS pour styles avancés"},
  { name: "Vs Code",  icon: require(`../assets/images/vscode.png`), description: "Éditeur de code puissant et flexible"},
  { name: "Slack",  icon: require(`../assets/images/slack.png`), description: "Une plateforme de messagerie pour les équipes, permettant de communiquer et collaborer en temps réel."},
  { name: "Adobe PhotoShop", icon: require(`../assets/images/photoshop.jpg`), description: "Un logiciel de référence pour l'édition d'images et la conception graphique, largement utilisé en photographie et en art numérique."},
  { name: "MongoDB", icon: require(`../assets/images/mongodb.png`), description: "Un programme de base de données NoSQL utilisant des documents de type JSON avec des schémas optionnels."},

];

const Skills = () => {
  return (
    <div className="other-pages">
    <div className="skills">
    <h1>Mes Compétences</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="tooltip-container">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="tooltip">{skill.description}</span>
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;

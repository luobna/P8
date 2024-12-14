import React from "react";
import "../Style/Compétences.scss"; // Fichier SCSS pour le style

const skills = [
  { name: "HTML",  icon: require(`../assets/images/HTML.png`) },
  { name: "JavaScript",  icon: require(`../assets/images/javascript.png`) },
  { name: "CSS",  icon: require(`../assets/images/CSS.png`) },
  { name: "React",  icon: require(`../assets/images/react.png`) },
  { name: "GitHub",  icon: require(`../assets/images/github.png`) },
  { name: "Figma",  icon: require(`../assets/images/Figma.png`) },
  { name: "Notion",  icon: require(`../assets/images/notion.png`) },
  { name: "Node.js",  icon: require(`../assets/images/nodejs.png`) },
  { name: "Postman",  icon: require(`../assets/images/postman.png`) },
  { name: "Sass",  icon: require(`../assets/images/sass.png`) },
  { name: "Vs Code",  icon: require(`../assets/images/vscode.png`) },
  { name: "Slack",  icon: require(`../assets/images/slack.png`) },
  { name: "Adobe PhotoShop", icon: require(`../assets/images/photoshop.jpg`) },
  { name: "MongoDB", icon: require(`../assets/images/mongodb.png`) },

];

const Skills = () => {
  return (
    <div className="other-pages">
    <div className="skills">
    <h1>Mes Compétences</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;

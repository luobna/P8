import React from "react";
import "../Style/AboutMe.scss"; // Fichier de styles associé, si besoin

function AboutMe() {
  return (
    <div className="about-me">
      <p>
        Je suis <strong>Loubna</strong>, développeuse web passionnée par le développement web.<br />
        J’ai acquis des compétences solides en création d’interfaces dynamiques avec 
        <strong> React</strong>, en développement d’APIs robustes avec <strong>Node.js</strong>, 
        et en gestion de projets numériques. <br />Mon parcours inclut la réalisation de projets variés, 
        allant de sites vitrines interactifs à des applications web complètes. <br />Organisée et curieuse, 
        je m’engage à livrer des solutions performantes et adaptées aux besoins des utilisateurs.
      </p>
      <p className="cv-link">
        Si vous souhaitez en savoir plus sur moi, consultez 
        <a 
          href="/Files/CV_Lobn.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        > mon CV</a>.
      </p>
    </div>
  );
}

export default AboutMe;

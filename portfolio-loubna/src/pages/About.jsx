import React from "react";
import myPhoto from "../assets/images/mytof.png"; // Importation de l'image
import "../Style/About.scss"; // Importation du fichier SCSS

const About = () => (
  <div className="other-pages">
  <div className="about">
    
    <h1>À propos de moi</h1>
    <img src={myPhoto} alt="myphoto" className="myPhoto" />
    <p className= "background-about size-text">
    Je suis une personne polyvalente, passionnée par le développement et toujours en quête d'excellence.<br />
Au fil de <strong>mes expériences</strong>, j'ai exploré divers aspects du développement web, que ce soit en <strong>création d'interfaces dynamiques</strong> avec <strong>React</strong> ou en <strong>développement d'APIs robustes</strong> avec <strong>Node.js</strong>.<br />

Mon approche se distingue par mon attention aux détails et ma capacité à gérer des projets de toutes tailles, en mettant un point d'honneur à améliorer leur <strong>qualité</strong> et leur <strong>performance</strong>. <br />Je cherche toujours à proposer des solutions adaptées aux besoins des utilisateurs tout en respectant les délais et les exigences.<br />

Je m'efforce d'être un membre clé de chaque équipe avec laquelle je collabore, en contribuant de manière significative à la réussite des projets. <br />Mon objectif est de produire un travail de qualité, en apportant des <strong>idées innovantes</strong> sans imposer mes choix, pour un développement harmonieux et efficace.</p>
  
  </div>
  </div>
);

export default About;

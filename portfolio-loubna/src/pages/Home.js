import React from "react";
import photoProfil from "../assets/images/logo.png"; // Importation de l'image
import "../Style/Home.scss"; // Importation du fichier SCSS

const Home = () => (
  <div className="home">
    <div className="background"></div> {/* L'image de fond */}
    <div className="content">
      <h1>Bienvenue sur mon portfolio</h1>
      <img src={photoProfil} alt="logo" className="profile-photo" />
      <p>Je suis Loubna, développeuse web passionnée...</p>
    </div>
  </div>
);

export default Home;

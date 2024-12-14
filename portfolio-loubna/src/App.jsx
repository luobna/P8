import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"; // Footer en bas
import ContactForm from "../src/pages/ContactForm";
import Compétences from "../src/pages/Compétences"
import "../src/Style/all.scss";


function App() {
  return (
    <div className="page">
    <Router>
       <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/Compétences" element={<Compétences />} />
        <Route path="/contact" element={<div><ContactForm /></div>} /> 

      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;


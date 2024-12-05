import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"; // Footer en bas



function App() {
  return (
    <Router>
       <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> {/* Footer */}
    </Router>
  );
}

export default App;


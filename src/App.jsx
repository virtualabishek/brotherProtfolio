import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Home from "./pages/Home.jsx ";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

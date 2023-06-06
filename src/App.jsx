import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Industries from "./Components/Industries";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="align-center justify-center">
        <Navbar link={Link} />
        <Hero />
        <About />
        <Services />
        <Industries />
        <Team />
        <Testimonials />
        <Footer />
        <Contact />
      </div>
    </>
  );
}

export default App;

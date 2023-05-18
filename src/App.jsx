import { useState } from "react";
import circleLogo from "/dblogo-whitecircle.png";
import Navbar from "./Components/Navbar";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="align-center justify-center">
        <Navbar link={Link} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

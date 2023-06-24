import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Industries from "./Components/Industries";
import Footer from "./Components/Footer";
import Jobs from "./Components/Jobs";
import BackToTop from "./Components/BackToTop";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="align-center justify-center">
              <Navbar />
              <Hero />
              <About />
              <Industries />
              <Services />
              <Team />
              <Testimonials />
              <Footer />
            </div>
          }
        />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <BackToTop />
    </>
  );
};

export default App;

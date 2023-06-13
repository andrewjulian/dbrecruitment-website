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
import { Routes, Route, NavLink } from "react-router-dom";
import Jobs from "./Components/Jobs";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="align-center justify-center">
              <Navbar NavLink={NavLink} />
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
        <Route
          path="/jobs"
          element={
            <div className="align-center justify-center">
              <Navbar NavLink={NavLink} />
              <Jobs />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;

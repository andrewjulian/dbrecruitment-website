import { useState } from "react";
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
        <div className=" absolute  z-0 ">
          <div className="bg-repeate-space absolute left-[0px] top-[100px] h-full w-full bg-triangles opacity-[.30]"></div>
          <Navbar link={Link} />
          <Hero />
          <About />
          <Services />
          <Industries />
          <Team />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

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
        <div className=" absolute left-[50px] top-[930px] z-0 h-[750px] w-[800px]  transform  rounded-[1000px] bg-[#36b6ff70] blur-xl filter"></div>
        <div className=" absolute left-[700px] top-[1030px] z-0 h-[600px] w-[800px]  transform  rounded-[1000px] bg-[#36b6ff30] blur-xl filter"></div>
        <div className=" absolute left-[500px] top-[1330px] z-0 h-[600px] w-[1000px]  transform  rounded-[1000px] bg-[#36b6ff50] blur-xl filter"></div>
        <div className=" absolute  top-[2015px] z-0 h-[600px] w-[3000px]  transform  bg-gray-300 blur-md filter"></div>
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
    </>
  );
}

export default App;

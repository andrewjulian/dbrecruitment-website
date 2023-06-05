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
        <div className=" z-0 flex justify-center">
          <img
            className="absolute -left-[25px] top-[950px]  h-auto w-[700px] "
            src="./shapes1.png"
          />
          <img
            className="absolute left-[268px] top-[1450px] h-auto w-[700px] "
            src="./shapes1.png"
          />
          <img
            className="absolute left-[560px] top-[1285px] h-auto w-[700px] "
            src="./shapes1.png"
          />
          <img
            className="absolute left-[560px] top-[950px] h-auto w-[700px] "
            src="./shapes1.png"
          />
        </div>

        <div className=" absolute  z-0 ">
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

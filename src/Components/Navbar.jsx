import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <>
      <div className="flex justify-between bg-[#36b6ff]">
        <div className="flex justify-center p-5">
          <img
            src="/dblogo-whitecircle.png"
            className="h-[50px] w-auto"
            alt="logo"
          />
          <h1 className="text-white text-2xl ml-4 my-auto">
            DB Recruitment Group
          </h1>
        </div>

        <div className="flex justify-center my-auto mr-5 ">
          <Link
            to="/"
            className={`text-white  hover:border-b hover:border-[#6b6ff] px-3 py-2 text-lg font-medium ${
              path === "/" ? "text-black hover:text-black" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white  hover:border-b hover:border-[#6b6ff] px-3 py-2 text-lg font-medium ${
              path === "/about" ? "text-black hover:text-black" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            /*  className="text-white hover:text-black hover:border-b hover:border-[#6b6ff] px-3 py-2  text-lg font-medium" */
            className={`text-white hover:border-b hover:border-[#6b6ff] px-3 py-2 text-lg font-medium ${
              path === "/services"
                ? "text-black hover:text-black"
                : "text-white"
            }`}
          >
            Services
          </Link>
          <Link
            to="/team"
            className={`text-white  hover:border-b hover:border-[#6b6ff] px-3 py-2 text-lg font-medium ${
              path === "/team" ? "text-black hover:text-black" : "text-white"
            }`}
          >
            Team
          </Link>
          <Link
            to="/testimonials"
            className={`text-white  hover:border-b hover:border-[#6b6ff] px-3 py-2 text-lg font-medium ${
              path === "/testimonials"
                ? "text-black hover:text-black"
                : "text-white"
            }`}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className={`text-white  hover:border-b hover:border-[#6b6ff] px-3 py-2 text-lg font-medium ${
              path === "/contact" ? "text-black hover:text-black" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-gray-800">
        <div className="flex justify-center p-5">
          <img
            src="/dblogo-whitecircle.png"
            className="h-[50px] w-auto"
            alt="logo"
          />
        </div>

        <div className="flex justify-center my-auto mr-5 ">
          <Link
            to="/"
            className="text-white hover:text-gray-300 hover:border-b hover:border-[#6b6ff] px-3 py-2  text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 hover:border-b hover:border-[#6b6ff] px-3 py-2  text-lg font-medium"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-300 hover:border-b hover:border-[#6b6ff] px-3 py-2  text-lg font-medium"
          >
            Services
          </Link>
          <Link
            to="/team"
            className="text-white hover:text-gray-300 hover:border-b hover:border-[#6b6ff] px-3 py-2  text-lg font-medium"
          >
            Team
          </Link>
          <Link
            to="/testimonials"
            className="text-white hover:text-gray-300 hover:border-b hover:border-[#6b6ff] px-3 py-2  text-lg font-medium"
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 hover:border-b hover:border-[#6b6ff] px-3 py-2  text-lg font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

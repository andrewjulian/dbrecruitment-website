import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="navbar"
      className="sticky top-0 z-30 mx-auto flex h-24 items-center justify-between  bg-[#36b6ff] px-4 text-white  sm:px-10 "
    >
      <div className="flex text-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex cursor-pointer items-center "
        >
          <div className="flex justify-center p-5">
            <img
              src="/dblogo-whitecircle.png"
              className="h-[50px] w-auto"
              alt="logo"
            />
            <h1 className="my-auto ml-4 text-2xl text-white">
              DB Recruitment Group
            </h1>
          </div>
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li className="p-4">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-black"
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-black"
          >
            About
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="industries"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-black"
          >
            Services
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="team"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-black"
          >
            Team
          </Link>
        </li>

        <li className="p-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-black"
          >
            Contact
          </Link>
        </li>
        <li className="p-4">
          <RouterLink to="/jobs">Jobs</RouterLink>
        </li>
      </ul>

      <div onClick={handleNav} className="m-2 block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-[0px] z-10 h-full w-[75%] bg-white text-black duration-500  ease-in-out md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="flex border-b border-[#36b6ff] p-4 pt-8">
            <img
              src="/dblogo-whitecircle.png"
              className="h-[50px] w-auto"
              alt="logo"
            />
            <h1 className="my-auto ml-4 text-xl text-[#36b6ff] md:text-2xl">
              DB Recruitment Group
            </h1>
          </li>
          <li className="border-b border-[#36b6ff] py-4 pl-5">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer hover:text-black"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-[#36b6ff] py-4 pl-5">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer hover:text-black"
            >
              About
            </Link>
          </li>
          <li className="border-b border-[#36b6ff] py-4 pl-5">
            <Link
              to="industries"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer hover:text-black"
            >
              Services
            </Link>
          </li>
          <li className="border-b border-[#36b6ff] py-4 pl-5">
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer hover:text-black"
            >
              Team
            </Link>
          </li>

          <li className="border-b border-[#36b6ff] py-4 pl-5">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer hover:text-black"
            >
              Contact
            </Link>
          </li>
          <li className="border-b border-[#36b6ff] py-4 pl-5">
            <RouterLink to="/jobs">Jobs</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

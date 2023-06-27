import React from "react";
import stock from "../assets/stock.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative z-10 bg-white p-16 text-center"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-[stock] bg-cover bg-fixed bg-no-repeat opacity-[.15] "></div>
      <div className="flex min-h-[90%] items-center justify-center">
        <div className="mx-auto mt-5 max-w-screen-xl px-4 py-1 text-center">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-black dark:text-white md:text-5xl xl:text-6xl">
              Empower Your Business With Our Top Talent
            </h1>
            <p className="font-italic mb-2 max-w-2xl text-black md:text-lg lg:mb-4 lg:text-xl">
              DB Recruitment Group is a team of skilled recruiters who excel in
              connecting exceptional talent with companies looking for top tier
              candidates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

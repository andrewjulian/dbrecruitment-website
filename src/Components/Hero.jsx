import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
    >
      <div
        id="hero"
        className="absolute left-0 top-0 h-full w-full opacity-[.15] "
        style={{
          backgroundImage: "url('/hero.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex min-h-[90%] items-center justify-center">
        <div className="mx-auto mt-5 max-w-screen-xl px-4 py-1 text-center">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-black dark:text-white md:text-5xl xl:text-6xl">
              Empower Your Business With Our Top Talent
            </h1>
            <p className="font-italic mb-2 max-w-2xl text-black md:text-lg lg:mb-4 lg:text-xl">
              DB Recruiting Group is a team of skilled recruiters who excel in
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

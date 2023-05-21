import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto mt-10 flex max-w-screen-xl px-4 py-4">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Empower Your Business With Our Top Talent
            </h1>
            <p className="mb-2 max-w-2xl  text-black md:text-lg lg:mb-4 lg:text-xl">
              DB Recruiting Group is a team of skilled recruiters who excel in
              connecting exceptional talent with companies looking for top tier
              cantidates.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-[#36b6ff] px-5 py-3 text-center text-base font-medium text-white hover:text-black"
            >
              Meet The Team
            </a>
            <a
              href="#"
              className="mx-3 inline-flex items-center justify-center rounded-xl bg-[#36b6ff] px-5 py-3 text-center text-base font-medium text-white hover:text-black"
            >
              Contact Us
            </a>
          </div>
          <div className="lg:mt-2 lg:flex">
            <img className="rounded-xl" src="/hero.jpeg" alt="mockup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

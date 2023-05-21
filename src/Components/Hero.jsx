import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto mt-10 flex max-w-screen-xl px-4 py-8">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Empower Your Business With Our Top Talent
            </h1>
            <p className="mb-2 max-w-2xl  text-black md:text-lg lg:mb-2 lg:text-xl">
              DB Recruitment Group connects top cantidates with companies in the
              Cybersecruity, MSP, and SaaS industries.
            </p>
            <p className="md:text-md mb-4 max-w-2xl font-light italic text-gray-500 dark:text-gray-400 lg:mb-4 lg:text-lg">
              As a proud member of the tech community, we are committed to
              helping both our clients and candidates succeed. We strongly
              believe that by working together, we can make a positive impact on
              the tech industry.
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
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
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

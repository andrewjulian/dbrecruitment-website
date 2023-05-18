import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex max-w-screen-xl px-4 py-8 mx-auto mt-10">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Empower Your Business With Our Top Talent
            </h1>
            <p className="max-w-2xl mb-2  text-black lg:mb-2 md:text-lg lg:text-xl">
              DB Recruitment Group specializes in connecting top cantidates with
              companies in the Cybersecruity, MSP, and SaaS industries.
            </p>
            <p className="max-w-2xl mb-4 font-light italic text-gray-500 lg:mb-4 md:text-md lg:text-lg dark:text-gray-400">
              We are proud to be a part of the tech community and are committed
              to helping our clients and candidates succeed. We believe that by
              working together, we can make a positive impact on the tech
              industry.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:text-black bg-[#36b6ff] rounded-xl"
            >
              Meet The Team
            </a>
            <a
              href="#"
              className="inline-flex items-center hover:text-black justify-center px-5 py-3 mx-3 text-base font-medium text-center text-white bg-[#36b6ff] rounded-xl"
            >
              Contact Us
              <svg
                className="w-5 h-5 ml-2 -mr-1"
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

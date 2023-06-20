import React from "react";

const Footer = () => {
  return (
    <div className=" text-base-content bg-black px-5 text-white">
      <div className="flex items-center justify-between text-center">
        <div className="flex">
          <img
            className="m-4 h-16 w-16"
            src="/dblogo-whitecircle.png"
            alt="DB Recruiting Logo"
          />
          <div className="my-auto px-4">
            <p className="my-auto">
              DB Recruitment Group
              <br />
              Texas, United States
            </p>
          </div>
        </div>
        <div></div>
        <div className="flex">
          <div className="my-auto px-8">
            <a
              className="text-[#36b6ff]"
              href="mailto:info@dbrecruitmentgroup.com"
            >
              info@dbrecruitmentgroup.com
            </a>
            <p className="text-[#36b6ff]">(347)-915-5404</p>
          </div>
          <div className="mr-4">
            <a
              className="mt-2"
              href="https://www.linkedin.com/company/db-recruitment-group/"
              target="_blank"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="linkedin"
                className="h-16 w-16"
              />
            </a>
          </div>
        </div>
      </div>
      <footer class="border-t-2 bg-gray-50 px-3 pt-4 lg:px-9">
        <div class="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <a href="#" class="inline-flex items-center">
              <img
                src="https://mcqmate.com/public/images/logos/60x60.png"
                alt="logo"
                class="h-8 w-8"
              />
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-800">
                Company Name
              </span>
            </a>
            <div class="mt-6 lg:max-w-xl">
              <p class="text-sm text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                felis mi, faucibus dignissim lorem id, imperdiet interdum
                mauris. Vestibulum ultrices sed libero non porta. Vivamus
                malesuada urna eu nibh malesuada, non finibus massa laoreet.
                Nunc nisi velit, feugiat a semper quis, pulvinar id libero.
                Vivamus mi diam, consectetur non orci ut, tincidunt pretium
                justo. In vehicula porta molestie. Suspendisse potenti.
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">
              Popular Courses
            </p>
            <a href="#">UPSC - Union Public Service Commission</a>
            <a href="#">General Knowledge</a>
            <a href="#">MBA</a>
            <p class="text-base font-bold tracking-wide text-gray-900">
              Popular Topics
            </p>
            <a href="#">Human Resource Management</a>
            <a href="#">Operations Management</a>
            <a href="#">Marketing Management</a>
          </div>

          <div>
            <p class="text-base font-bold tracking-wide text-gray-900">
              COMPANY IS ALSO AVAILABLE ON
            </p>
            <div class="flex items-center gap-1 px-2">
              <a href="#" class="min-w-xl w-full">
                <img
                  src="https://mcqmate.com/public/images/icons/playstore.svg"
                  alt="Playstore Button"
                  class="h-10"
                />
              </a>
              <a
                class="min-w-xl w-full"
                href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
              >
                <img
                  src="https://mcqmate.com/public/images/icons/youtube.svg"
                  alt="Youtube Button"
                  class="h-28"
                />
              </a>
            </div>
            <p class="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div class="flex">
              <p class="mr-1 text-gray-800">Email:</p>
              <a href="#" title="send email">
                admin@company.com
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col-reverse justify-between border-t pb-10 pt-5 lg:flex-row">
          <p class="text-sm text-gray-600">
            © Copyright 2023 Company. All rights reserved.
          </p>
          <ul class="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
            <li>
              <a
                href="#"
                class="hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300"
              >
                Privacy &amp; Cookies Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

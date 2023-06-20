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
      <footer className="border-t-2 bg-gray-50 px-3 pt-4 lg:px-9">
        <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center">
              <img
                src="https://mcqmate.com/public/images/logos/60x60.png"
                alt="logo"
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                Company Name
              </span>
            </a>
            <div className="mt-6 lg:max-w-xl">
              <p className="text-sm text-gray-800">
                DB Recruitment Group is a team of skilled recruiters with a
                proven track record of success as top billers in previous roles.
                Through the use of RPO models, weare able to provide a more
                efficient and effective hiring process for our clients across a
                variety of industries.
              </p>
            </div>
            <div>
              <p className="text-base font-bold tracking-wide text-gray-900">
                COMPANY IS ALSO AVAILABLE ON
              </p>
              <div className="flex items-center gap-1 px-2">
                <a href="#" className="min-w-xl w-full">
                  <img
                    src="https://mcqmate.com/public/images/icons/playstore.svg"
                    alt="Playstore Button"
                    className="h-10"
                  />
                </a>
                <a
                  className="min-w-xl w-full"
                  href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
                >
                  <img
                    src="https://mcqmate.com/public/images/icons/youtube.svg"
                    alt="Youtube Button"
                    className="h-28"
                  />
                </a>
              </div>
              <p className="text-base font-bold tracking-wide text-gray-900">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a href="#" title="send email">
                  admin@company.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Industries Served
            </p>
            <a className="text-orange-500">Defense</a>
            <a className="text-orange-500">Cybersecurity</a>
            <a className="text-orange-500">MSP</a>
            <a className="text-orange-500">SaaS</a>

            <p className="text-base font-bold tracking-wide text-gray-900">
              Services Offered
            </p>
            <a className="text-orange-500">Direct Hire</a>
            <a className="text-orange-500">Contract Staffing</a>
            <a className="text-orange-500">Recruitment Process Outsourcing </a>
            <a className="text-orange-500">Executive Search</a>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              About Us
            </p>
            <a className="text-orange-500">Our Team</a>

            <p className="text-base font-bold tracking-wide text-gray-900">
              Contact Us
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between border-t pb-10 pt-5 lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2023 DB Recruitment Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

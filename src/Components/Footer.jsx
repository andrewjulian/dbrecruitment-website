import React from "react";

const Footer = () => {
  return (
    <div className="footer text-base-content bg-black px-5 text-white">
      <div className="m-2 flex items-center justify-between text-center">
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
    </div>
  );
};

export default Footer;

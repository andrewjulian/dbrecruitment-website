import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Jobs = () => {
  return (
    <div id="jobs">
      <div className="sticky top-0 z-30 mx-auto flex h-24 items-center justify-between  bg-[#36b6ff] px-4 text-white  sm:px-10 ">
        <div className="flex text-center">
          <RouterLink to="/">
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
          </RouterLink>
        </div>

        <ul className="hidden md:flex">
          <li className="p-4">
            <RouterLink to="/" className="cursor-pointer hover:text-black">
              `Back to DB Rescruitment Group Website"
            </RouterLink>
          </li>
        </ul>
      </div>

      <iframe
        className="h-[900px] max-h-[90%] w-[900px] max-w-[90%] border-none"
        src="https://recruitcrm.io/jobs/DB_Recruitment_Group_jobs"
      ></iframe>
    </div>
  );
};

export default Jobs;

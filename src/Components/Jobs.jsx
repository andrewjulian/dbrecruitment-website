import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { TfiControlBackward } from "react-icons/tfi";

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
          <li className="flex p-4">
            <RouterLink
              to="/"
              className="flex cursor-pointer items-center hover:text-black"
            >
              <TfiControlBackward className="mr-3" />
              <div>Back to DB Recruitment Group Website</div>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div className="flex h-screen items-center justify-center">
        <iframe
          className="h-full w-full border-none"
          src="https://recruitcrm.io/jobs/DB_Recruitment_Group_jobs"
        ></iframe>
      </div>
    </div>
  );
};

export default Jobs;

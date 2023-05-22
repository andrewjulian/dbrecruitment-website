import React from "react";

const TeamMember = ({ member }) => {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col items-center pb-5">
        <img
          className="mb-10 mt-10 h-[150px] w-[150px] rounded-full  border-2 border-[#36b6ff] shadow-lg"
          src={member.image}
          alt={member.name}
        />
        <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
          {member.name}
        </h5>
        <span className="text-md text-gray-500 dark:text-gray-400">
          {member.title}
        </span>
        <div className="mt-1 flex space-x-3 ">
          <a href={member.linkedin} target="_blank">
            <img
              src="https://icongr.am/devicon/linkedin-original-wordmark.svg?size=128&color=currentColor"
              alt="linkedin"
              className="h-20 w-20"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

import React from "react";

const TeamMember = ({ member }) => {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col items-center pb-5">
        <img
          className="mb-10 mt-10 h-24 w-24 rounded-full shadow-lg"
          src={member.image}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {member.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {member.title}
        </span>
        <div className="mt-1 flex space-x-3 ">
          <a href={member.linkedin}>
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

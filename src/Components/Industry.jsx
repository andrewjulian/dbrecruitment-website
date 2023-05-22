import React from "react";

const Industry = ({ industry }) => {
  return (
    <div className="max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex">
        {industry.icons}
        <h5 className="m-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {industry.title}
        </h5>
      </div>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {industry.description}
      </p>
    </div>
  );
};

export default Industry;

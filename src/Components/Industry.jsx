import React from "react";

const Industry = ({ industry }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-black bg-white p-6 shadow-md">
      <div className="flex">
        {industry.icons}
        <h5 className="m-2 text-2xl font-semibold tracking-tight text-gray-900">
          {industry.title}
        </h5>
      </div>
      <p className="mb-3 font-normal text-gray-500">{industry.description}</p>
      <div className="absolute inset-0 h-full w-full -translate-x-full transform bg-gradient-to-r from-[rgba(255,255,255,0.8)] via-[rgba(54,182,255,0.3)] to-transparent opacity-0 transition-transform duration-500 group-hover:translate-x-full group-hover:opacity-100"></div>
    </div>
  );
};

export default Industry;

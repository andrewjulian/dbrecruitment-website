import React from "react";

const Industry = ({ industry }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border  border-black bg-white p-6 shadow-md hover:bg-[#36b6ff] hover:text-white">
      <div className="flex text-black">
        {industry.icons}
        <h5 className="m-2 text-2xl font-semibold tracking-tight text-gray-900">
          {industry.title}
        </h5>
      </div>
      <p className="mb-3 font-normal ">{industry.description}</p>
    </div>
  );
};

export default Industry;

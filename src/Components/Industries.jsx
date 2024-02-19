import { HiLockClosed } from "react-icons/hi";

import { FaShieldAlt } from "react-icons/fa";
import Industry from "./Industry";

const industryList = [
  {
    title: "Cybersecurity",
    description:
      "DBRG specializes in Cybersecurity placements in the public, private, and federal sectors.",
    icons: (
      <HiLockClosed
        className="my-auto"
        size="25"
      />
    ),
  },
  {
    title: "Defense",
    description:
      "DBRG connects vetted and clearance-approved workers with private and federal defense companies.",
    icons: (
      <FaShieldAlt
        className="my-auto"
        size="25"
      />
    ),
  },
];

const Industries = () => {
  const displayIndustries = industryList.map((industry) => (
    <Industry
      industry={industry}
      key={industry.title}
    />
  ));

  return (
    <div
      id="industries"
      className="relative"
    >
      <div className="relative z-10 w-full bg-gradient-to-b from-[#36b6ff25] to-[#36b6ff50] pb-4 pt-20 ">
        <div className="mx-auto max-w-screen-xl">
          <h1 className="mb-6 px-4 text-center text-4xl font-bold md:pl-4 md:text-left">
            INDUSTRIES WE SERVE
          </h1>
          <div>
            <div className="grid grid-cols-1  gap-4 px-10 sm:grid-cols-2 md:px-4">
              {displayIndustries}
            </div>
          </div>
          <div className="mt-5 flex px-10 md:flex-row md:px-0 ">
            <img
              src="/PFPA.png"
              alt="Industries"
              className="mx-auto mt-10 w-[20%] md:w-[20%]"
            />
            <img
              src="/DOJ.png"
              alt="Industries"
              className="mx-auto mt-10 w-[20%] md:w-[20%]"
            />
            <img
              src="/FBI.webp"
              alt="Industries"
              className="mx-auto mt-10 w-[20%] md:w-[20%]"
            />
            <img
              src="/DoD-Seal.png"
              alt="Industries"
              className="mx-auto mt-10 w-[20%] md:w-[20%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;

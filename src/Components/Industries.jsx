import React from "react";
import { HiLockClosed } from "react-icons/hi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
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
  {
    title: "MSP",
    description:
      "DBRG collaborates with both partners and end-users seeking highly skilled Managed Services Technology professionals.",
    icons: (
      <BsFillPersonVcardFill
        className="my-auto"
        size="25"
      />
    ),
  },
  {
    title: "SaaS",
    description:
      "DBRG supports burgeoning tech organizations that seek to build their Data & Software Teams.",
    icons: (
      <HiOutlineDesktopComputer
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
      <div className="relative z-10 w-full bg-gradient-to-b from-[#36b6ff25] to-[#36b6ff50] pb-4 pt-16 ">
        <div className="mx-auto max-w-screen-xl">
          <h1 className="mb-6 px-4 text-center text-4xl font-bold md:pl-4 md:text-left">
            INDUSTRIES AND SERVICES
          </h1>
          <div>
            <div className="grid grid-cols-1  gap-4 px-10 sm:grid-cols-2 md:px-4">
              {displayIndustries}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;

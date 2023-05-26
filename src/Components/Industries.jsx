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
      "DBRG specializes in placements in Private and Federal the Contracting requiring clearances.",
    icons: <HiLockClosed className="my-auto" size="25" />,
  },
  {
    title: "MSP",
    description:
      "DBRG works with both Partner and End-Users that need Managed Services Tech professionals.",
    icons: <BsFillPersonVcardFill className="my-auto" size="25" />,
  },
  {
    title: "SaaS",
    description:
      "DBRG supports burgeoning tech organizations that seek to build their Data & Software Teams.",
    icons: <HiOutlineDesktopComputer className="my-auto" size="25" />,
  },
  {
    title: "Defense",
    description:
      "DBRG connects vetted and clearance approved workers with private and federal defense companies.",
    icons: <FaShieldAlt className="my-auto" size="25" />,
  },
];

const Industries = () => {
  const displayIndustries = industryList.map((industry) => (
    <Industry industry={industry} key={industry.title} />
  ));

  return (
    <div className="w-full bg-gray-300">
      <div className="mx-auto max-w-screen-xl py-10">
        <h3 className="mb-5 px-4 text-2xl">
          We are currently working with the following industries.
        </h3>
        <div>
          <div className="grid grid-cols-2 gap-4 px-4">{displayIndustries}</div>
        </div>
      </div>
    </div>
  );
};

export default Industries;

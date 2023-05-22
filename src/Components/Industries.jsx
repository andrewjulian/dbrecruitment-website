import React from "react";
import { HiLockClosed } from "react-icons/hi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Industry from "./Industry";

const industryList = [
  {
    title: "Cybersecurity",
    description:
      "We work with companies in the cybersecurity industry to find top talent for their open positions.",
    icons: <HiLockClosed className="my-auto" size="25" />,
  },
  {
    title: "MSP",
    description:
      "We work with companies in the MSP industry to find top talent for their open positions.",
    icons: <BsFillPersonVcardFill className="my-auto" size="25" />,
  },
  {
    title: "SaaS",
    description:
      "We work with companies in the SaaS industry to find top talent for their open positions.",
    icons: <HiOutlineDesktopComputer className="my-auto" size="25" />,
  },
];

const Industries = () => {
  const displayIndustries = industryList.map((industry) => (
    <Industry industry={industry} key={industry.title} />
  ));

  return (
    <>
      <div className="mt-1">
        <h3 className="mx-[10.5%] mb-4 text-2xl">
          We are currently working with the following industries.
        </h3>
        <div className="mx-[9.5%] bg-white dark:bg-gray-900">
          <div className="mx-auto flex  gap-4 px-4">{displayIndustries}</div>
        </div>
      </div>
    </>
  );
};

export default Industries;

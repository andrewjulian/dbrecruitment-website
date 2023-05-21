import React from "react";
import { HiLockClosed } from "react-icons/hi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Service from "./Service";

const serviceList = [
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

const Services = () => {
  const displayServices = serviceList.map((service) => (
    <Service service={service} key={service.title} />
  ));

  return (
    <>
      <div className="mt-1">
        <h3 className="mx-[9%] mb-1 text-2xl">
          We are currently working with the following industries.
        </h3>
        <div className="mx-[8%] bg-white dark:bg-gray-900">
          <div className="mx-auto flex w-[100%]  gap-4 px-4">
            {displayServices}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

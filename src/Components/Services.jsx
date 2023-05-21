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
      <div className="bg-white dark:bg-gray-900">
        <h1 className="text-center text-[50px]"> Industries We Serve </h1>
        <div className="mx-auto mt-2 flex max-w-screen-xl gap-2 px-4">
          {displayServices}
        </div>
      </div>
    </>
  );
};

export default Services;

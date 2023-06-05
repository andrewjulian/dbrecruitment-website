import React from "react";
import Service from "../Components/Service";

const Services = () => {
  const data = [
    {
      title: "Executive Serarch",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.",
    },
    {
      title: "Direct Hire",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.",
    },
    {
      title: "Contract Staffing",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.",
    },
    {
      title: "Temp-to-Hire",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.",
    },
    {
      title: "Managed Services",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.",
    },
  ];
  return (
    <div id="services" className="grid w-full  py-10">
      <div className=" -skew-x-18 absolute left-[-200px] top-[1100px] z-0 h-[2000px] w-[2000px] -skew-y-12 transform rounded-full bg-[#36b6ff]"></div>
      <div className="relative z-10">
        <div className="mx-auto w-[60%]">
          <h1 className="mb-6 text-center text-4xl font-bold">OUR SERVICES</h1>
          <div className="container mx-auto">
            {data.map((item, key) => (
              <Service
                title={item.title}
                content={item.content}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

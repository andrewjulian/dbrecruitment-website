import React from "react";
import Service from "../Components/Service";

const Services = () => {
  const data = [
    {
      title: "How much do i need to pay for this?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.",
    },
    {
      title: "Can i delete my account?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.",
    },
    {
      title: "Is this accordion styled in Tailwind css?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="w-full bg-[#36b6ff] p-10">
      <div className="container mx-auto">
        <h1 className="mb-4 text-center text-4xl font-extrabold md:text-5xl xl:text-6xl">
          Our Services
        </h1>
        {data.map((item, key) => (
          <Service title={item.title} content={item.content} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Services;

/* We offer a comprehensive range of tech recruitment services, including:
Executive search
Direct hire
Contract Staffing
Temp-to-hire
Managed services */

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
    <div id="services" className="grid w-full bg-gray-300 py-10">
      <div className="mx-auto w-[60%]">
        <h1 className="mb-6 text-4xl font-bold">Our Services</h1>
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
      <div className=" mx-auto my-5  w-3/4">
        <p className=" h-auto text-xl  md:top-0 md:text-center">
          We understand that each position is unique, and we will tailor our
          approach to each individual search. With a strong ever growing network
          of candidates, we work closely with our clients to understand their
          needs, and we use our expertise to find the candidates who are the
          best fit. We are committed to providing our clients with high-quality
          service at a fair price.
        </p>
      </div>
    </div>
  );
};

export default Services;

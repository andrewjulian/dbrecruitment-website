import React from "react";
import Service from "../Components/Service";
import "../App.css";

const Services = () => {
  const data = [
    {
      title: "Executive Search",
      content:
        "Our Executive Search service connects your organization with industry-leading executives. We leverage our deep industry knowledge and extensive network to identify and secure high-caliber leaders that can guide your organization to new heights.",
    },
    {
      title: "Direct Hire",
      content:
        "Our Direct Hire service ensures the best match for your organization's needs. We meticulously identify, engage, and place top talent directly into your organization, driving the success and growth of your business.",
    },
    {
      title: "Contract Staffing",
      content:
        "With our Contract Staffing service, we provide skilled professionals for specified contract periods, facilitating project-specific hiring and allowing for flexibility and scalability within your organization.",
    },
    {
      title: "Recruitment Process Outsourcing",
      content:
        "Our Recruitment Process Outsourcing (RPO) service delivers cost-efficient and effective recruitment solutions. By acting as your company's internal recruitment function, our dedicated team streamlines hiring processes, improving both the quality of hires and operational efficiency",
    },
    /* {
      title: "Managed Services",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo. Impedit nesciunt beatae debitis delectus pariatur nostrum maiores magni quibusdam officia tempore quis ea molestiae ducimus error nemo, tenetur possimus, earum illo.",
    }, */
  ];
  return (
    <div
      id="services"
      className="text-based-content relative grid w-full bg-gradient-to-b from-[#36b6ff50] to-[#36b6ff25] py-10"
    >
      <div className="mx-auto w-[60%]">
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
  );
};

export default Services;

{
  /* <div className=" text-base-content bg-black px-5 text-white">
   */
}

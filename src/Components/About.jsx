import React from "react";

const AboutUsPage = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center">
      <div className="mx-auto mt-6 grid max-w-screen-xl px-4 py-1 md:flex">
        <div className="mt-5">
          <h1 className="mb-6 text-4xl font-bold">ABOUT US</h1>
          <p className="mb-8 text-lg text-gray-600">
            DB Recruiting Group was founded in 2022 by David Vacianna and Ben
            Puschett to focus on providing recruiting services to companies in
            the tech and IT industries. With the addition of Shelby Carter as
            lead recruiter, DB Recruiting is uniquely equipped to provide
            customized recruiting services to clients.
          </p>
          <p className="mb-8 text-lg text-gray-600">
            We are a team of skilled recruiters with a proven track record of
            success as top billers in previous roles. Through the use of RPO
            models, we are able to provide a more efficient and effective hiring
            process for our clients across a variety of industries.
          </p>

          <p className="mt-6 hidden text-xl font-bold md:flex">
            We are currently working with the following industries:
          </p>
        </div>
        <div className="container grid justify-center md:flex ">
          <img
            className="mx-auto h-auto w-[350px] md:ml-10 "
            src="/dblogo-bluecircle.png"
            alt="DB Recruiting Logo"
          />
          <p className="mt-6 hidden text-xl font-bold sm:flex">
            We are currently working with the following industries:
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

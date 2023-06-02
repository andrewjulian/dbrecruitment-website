import React from "react";

const AboutUsPage = () => {
  return (
    <div
      id="about"
      className="mx-auto flex flex-col items-center justify-center"
    >
      <div className="mt-6 grid max-w-screen-xl px-10 py-1 md:flex md:px-4">
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
        </div>
        <div className="container grid justify-center md:flex ">
          <img
            className="mx-auto mt-2 h-[300px] w-[300px] md:ml-16 "
            src="/dblogo-bluecircle.png"
            alt="DB Recruiting Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

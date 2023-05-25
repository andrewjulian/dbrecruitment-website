import React from "react";

const AboutUsPage = () => {
  return (
    <div className="mb-10 flex items-center justify-center">
      <div className="mx-auto mt-10  flex max-w-screen-xl px-4 py-1">
        <div className="mt-5">
          <h1 className="mb-6 text-4xl font-bold">ABOUT US</h1>
          <p className="mb-8 text-lg text-gray-600">
            DB Recruiting Group was founded in 2022 by David Vacianna and Ben
            Puschett to focus on providing recruiting services to companies in
            the tech and IT industries. With the addition of Shelby Carter as
            lead recruiter, DB Recruiting is uniquely equipped to provide
            customized recruiting services to clients.
          </p>
          <p className="text-xl text-gray-800">What sets us apart?</p>

          <p className="text-lg text-gray-700">
            <li> Demonstrated success as top billers in previous roles</li>
            <li>
              Effective implementation of RPO models for improved hiring
              processes
            </li>
            <li> Experience in recruitment across multiple tech industries</li>
          </p>
        </div>
        <div className="container flex justify-center ">
          <img
            className="ml-10 h-auto w-[350px] "
            src="/dblogo-bluecircle.png"
            alt="DB Recruiting Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

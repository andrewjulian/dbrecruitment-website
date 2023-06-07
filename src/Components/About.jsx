import React from "react";
import Trait from "../Components/Trait";

const traits = [
  {
    title: "Extensive Network",
    description:
      "We maintain and establish strong relationships with top clients across various industries, providing us with exclusive access to a broad range of job opportunities. Our extensive network allows us to effectively match talented professionals with the right opportunities that align with their skills and career goals.",
    image: "url(./network.png)",
  },
  {
    title: "Personalized Approach",
    description:
      "At DB Recruitment Group, we believe in taking a personalized approach to understand your company or career goals, strengths, and preferences. We'll work closely with you to find the perfect fit, ensuring a rewarding and fulfilling career journey.",
    image: "url(./network.png)",
  },
  {
    title: "Industry Expertise",
    description:
      "Our team of experienced recruiters has in-depth knowledge of the defense and space industry. We stay up-to-date with the latest trends and requirements, enabling us to provide valuable insights and guidance throughout the hiring process.",
    image: "url(./network.png)",
  },
  {
    title: "Confidentiality",
    description:
      "We understand the importance of discretion and confidentiality when it comes to security clearances. Rest assured that your information will be handled with the utmost care and professionalism.",
    image: "url(./network.png)",
  },
];

const AboutUsPage = () => {
  const displayTraits = traits.map((trait) => (
    <Trait trait={trait} key={trait.title} />
  ));

  return (
    <div className="relative">
      <div
        id="about"
        className=" mx-auto flex h-full flex-col items-center justify-center bg-gradient-to-b from-white to-[#36b6ff25] pb-5 pt-10 "
      >
        <div className=" mt-6 grid max-w-screen-xl py-1 md:flex">
          <div className="md:ml-10 ">
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
              models, we are able to provide a more efficient and effective
              hiring process for our clients across a variety of industries.
            </p>
          </div>
          <div className=" mb-4 w-[1000px] md:mb-0 md:ml-10">
            <img
              className="mx-auto mt-2 h-[250px] w-[250px] rounded-full "
              src="/dblogo-bluecircle.png"
              alt="DB Recruiting Logo"
            />
          </div>
        </div>

        <div className="mx-auto w-full justify-center  text-center md:flex">
          <div className="grid sm:grid-cols-2 md:flex">{displayTraits}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

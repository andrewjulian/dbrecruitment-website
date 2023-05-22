import React from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Ben Puschett",
    title: "Founder, Head of Recruitment",
    linkedin: "https://www.linkedin.com/in/benjaminpuschett/",
    image: "/ben_profile.jpeg",
  },
  {
    name: "David Vacianna",
    title: "Founder, Head of Business Development",
    linkedin: "https://www.linkedin.com/in/david-vacianna/",
    image: "/david_profile.jpeg",
  },
  {
    name: "Shelby Carter",
    title: "Lead Recruiter",
    linkedin: "https://www.linkedin.com/in/shelbygracecarter/",
    image: "/shelby_profile.jpeg",
  },
];

const Team = () => {
  const team = teamMembers.map((member) => {
    return <TeamMember member={member} key={member.name} />;
  });

  return (
    <div className=" bg-gray-300">
      <div className="mx-auto my-20 grid max-w-screen-xl px-4 py-10">
        <h1 className="mb-2 text-center text-4xl font-extrabold md:text-5xl xl:text-6xl">
          Our Team
        </h1>
        <div className="mt-10 flex justify-center gap-4">{team}</div>
      </div>
    </div>
  );
};

export default Team;

import React from "react";
import TeamMember from "./TeamMember";

const teamMembers = [
  {
    name: "Ben Puschett",
    title1: "Founder",
    title2: "Head of Recruitment",
    linkedin: "https://www.linkedin.com/in/benjaminpuschett/",
    image: "/ben_profile.jpeg",
  },
  {
    name: "David Vacianna",
    title1: "Founder",
    title2: "Head of Business Development",
    linkedin: "https://www.linkedin.com/in/david-vacianna/",
    image: "/david_profile.jpeg",
  },
  {
    name: "Shelby Carter",
    title1: "Lead Technical Recruiter",
    title2: "Business Development",
    linkedin: "https://www.linkedin.com/in/shelbygracecarter/",
    image: "/shelby_profile.jpeg",
  },
  {
    name: "Mark Blaha",
    title1: "Technical Sourcing Specialist for",
    title2: "Top Secret Defense Positions",
    linkedin: "https://www.linkedin.com/in/mark-blaha-34b2632b/",
    image: "/mark_profile.jpeg",
  },
];

const Team = () => {
  const team = teamMembers.map((member) => {
    return <TeamMember member={member} key={member.name} />;
  });

  return (
    <div
      id="team"
      className=" relative z-10  bg-gradient-to-b from-[#36b6ff25] to-white pt-10"
    >
      <div className="z-10 mx-auto  grid max-w-screen-xl px-4 ">
        <h1 className="mb-2 text-center text-4xl font-bold">OUR TEAM</h1>
        <div className="mt-6 grid justify-center gap-4 sm:flex">{team}</div>
      </div>
    </div>
  );
};

export default Team;

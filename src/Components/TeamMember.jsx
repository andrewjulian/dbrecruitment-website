import PropTypes from "prop-types";

const TeamMember = ({ member }) => {
  return (
    <div className="shadow-[[#36b6ff] w-full max-w-sm rounded-lg border border-gray-200 bg-white py-3 drop-shadow-lg">
      <div className="flex flex-col items-center justify-center p-4">
        <img
          className="mb-10 mt-10 h-[150px] w-[150px] rounded-full border-2 border-[#36b6ff] shadow-lg"
          src={member.image}
          alt={member.name}
        />
        <h5 className="mb-1 text-2xl font-medium text-gray-900">
          {member.name}
        </h5>
        <span className="text-md text-center text-gray-500">
          {member.title1}
        </span>
        <a href={`mailto:${member.email}`}>
          <button className="text-md text-center text-gray-500 hover:text-gray-700">
            {member.title2}
          </button>
        </a>
        <span className="text-md text-center text-gray-500">
          {member.phone}
        </span>
        <div className="py-auto my-3 flex h-[50px] items-center space-x-3 px-2 hover:scale-125 hover:rounded">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://icongr.am/devicon/linkedin-original-wordmark.svg?size=128&color=currentColor"
              alt="linkedin"
              className="h-20 w-20"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  member: PropTypes.object.isRequired,
};

export default TeamMember;

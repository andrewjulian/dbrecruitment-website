import React from "react";

const Jobs = () => {
  return (
    <div>
      <h1 className="mb-2 text-center text-4xl font-bold">CURRENT POSITIONS</h1>

      <iframe
        className="h-[900px] max-h-[90%] w-[900px] max-w-[90%] border-none"
        src="https://recruitcrm.io/jobs/DB_Recruitment_Group_jobs"
      ></iframe>
    </div>
  );
};

export default Jobs;

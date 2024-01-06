import PropTypes from "prop-types";

const Industry = ({ industry }) => {
  return (
    <div className="group relative z-10 overflow-hidden rounded-lg  border border-black bg-white p-6 shadow-md ">
      <div className="flex text-black">
        {industry.icons}
        <h5 className="m-2 text-2xl font-semibold tracking-tight text-gray-900">
          {industry.title}
        </h5>
      </div>
      <p className="mb-3 font-normal ">{industry.description}</p>
    </div>
  );
};

Industry.propTypes = {
  industry: PropTypes.shape({
    icons: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Industry;

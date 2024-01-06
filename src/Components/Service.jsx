import { useState, useRef, useEffect } from "react";

import PropTypes from "prop-types";

const Service = ({ title, content }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);

  useEffect(() => {
    setHeight(isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  }, [isOpened]);

  const handleOpening = () => {
    setOpened(!isOpened);
  };

  return (
    <div
      onClick={handleOpening}
      className="border border-black"
    >
      <div className="flex justify-between bg-white p-4 text-black">
        <h4 className="font-semibold">{title}</h4>
        {isOpened ? (
          <img
            src="/accordianOpen.svg"
            className="h-[20px] w-auto"
            alt="logo"
          />
        ) : (
          <img
            src="/accordianClosed.svg"
            className="h-[20px] w-auto"
            alt="logo"
          />
        )}
      </div>
      <div
        ref={contentElement}
        style={{ height }}
        className="overflow-hidden border-black bg-gray-300 text-black transition-all duration-200"
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Service;

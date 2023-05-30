import React, { useState, useRef, useEffect } from "react";

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
    <div onClick={handleOpening} className="border border-black">
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
        className="overflow-hidden border-black bg-[#36b6ff] text-white transition-all duration-200"
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  );
};

export default Service;

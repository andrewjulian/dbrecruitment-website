import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div id="contact" className="relative">
      <div className="absolute inset-0 z-0 h-96 w-96 -skew-x-12 -skew-y-6 transform rounded-full bg-indigo-500"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold">Welcome to My React App!</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet...</p>
      </div>
    </div>
  );
};

export default Contact;

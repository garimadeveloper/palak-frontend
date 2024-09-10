import React from 'react';

const ToolsSection = () => {
  return (
    <div className="bg-white p-10 text-center">
      {/* Button */}
      <button className="text-sm font-bold py-1 px-4 border border-blue-900 text-blue-900 rounded-full mb-4">
        Tools
      </button>

      {/* Title */}
      <h1 className="text-5xl font-bold text--900">
        The Integration We Use
      </h1>
      <h2> It is a ling estabilished fact that a reader will be distracted by the readable content of a page
                             when looking at its layout
      </h2>
      <img
              src={"/image/Integration.png"} // Use the newly uploaded image here
              alt="Dashboard"
              className="rounded-lg shadow-lg w-full h-[800px]"
            />
    </div>
  );
};

export default ToolsSection;

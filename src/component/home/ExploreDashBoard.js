import React from 'react';


const ExploreDashBoard = () => {
  return (
    <div className="bg-white p-10 text-center">
      {/* Button */}
      <button className="text-sm font-bold py-1 px-4 border border-blue-900 text-blue-900 rounded-full mb-4">
        Explore Dashboard
      </button>

      {/* Title */}
      <h1 className="text-5xl font-bold text-blue-900">
        Let’s Explore the Dashboard!
      </h1>
      <h2>
        It is a long established fact that a reader will be distracted by the readable content of a page
        when looking at its layout.
      </h2>
      <img
        src="/image/Integration.png" // Ensure this path is correct
        alt="Dashboard"
        className="rounded-lg shadow-lg w-full h-[800px]"
      />
    </div>
  );
};

export default ExploreDashBoard;

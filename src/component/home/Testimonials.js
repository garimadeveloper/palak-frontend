
import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-white p-10 text-center">
      {/* Button */}
      <button className="text-sm font-bold py-1 px-4 border border-blue-900 text-blue-900 rounded-full mb-4">
        Testimonials
      </button>

      {/* Title */}
      <h1 className="text-5xl font-bold text-black-900">
        Our Users feedback
      </h1>
      <h2>It is a long established fact that a reader will be distracted by the readable content of a page whenlooking at its 
        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
               using 'Content here, content here', making it look like readable English.
      </h2>
      <img
              src={"/image/Integration.png"} // Use the newly uploaded image here
              alt="Dashboard"
              className="rounded-lg shadow-lg w-full h-[800px]"
            />
    </div>
  );
};

export default Testimonials;

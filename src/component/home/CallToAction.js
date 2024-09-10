import React from 'react';
import Slider from "react-slick";

const CallToAction = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full py-16 bg-[#0b3558] bg-gradient-to-r from-[#0b3558]  to-[#0b3558]">
      <div className="text-white py-16 px-8 text-center rounded-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Take Control of Your Inbox?
        </h2>
        <p className="text-gray-300 mb-8">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-200 transition">
            Contact Us
          </button>
          <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-200 hover:text-blue-800 transition">
            Sign Up Now
          </button>
        </div>

        {/* Slider Section */}
        <div className="mt-8">
          <Slider {...sliderSettings}>
            <div>
              <h3>Slider Item 1</h3>
            </div>
            <div>
              <h3>Slider Item 2</h3>
            </div>
            <div>
              <h3>Slider Item 3</h3>
            </div>
            <div>
              <h3>Slider Item 4</h3>
            </div>
            <div>
              <h3>Slider Item 5</h3>
            </div>
            <div>
              <h3>Slider Item 6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

// ManageTools.js
import React from 'react';

const features = [
  {
    title: 'Seamless Integration',
    description: 'Lorem ipsum dolor sit amet consectetur. Netus com maecenas rutrum egestas mi eget tristique enim.',
    image: '/image/blog1.jpeg', // replace with actual image path
  },
  {
    title: 'Strong Customer Support',
    description: 'Lorem ipsum dolor sit amet consectetur. Netus com maecenas rutrum egestas mi.',
    image: '/image/blog1.jpeg', // replace with actual image path
    isList: true,
    listItems: ['Robert Fox', 'Cody Fisher', 'Sabrine Josephine'],
  },
  {
    title: 'Real Time Insights',
    description: 'Lorem ipsum dolor sit amet consectetur. Netus com maecenas rutrum egestas mi.',
    image: '/image/blog1.jpeg', // replace with actual image path
  },
  {
    title: 'Customizable Solutions',
    description: 'Lorem ipsum dolor sit amet consectetur. Netus com maecenas rutrum egestas mi eget tristique enim.',
    image: '/image/blog1.jpeg', // replace with actual image path
  },
];

const ManageTools = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-blue-500 font-semibold mb-2">Manage Tools</p>
        <h2 className="text-4xl font-bold">
          What Would You Like To <span className="text-blue-600">Manage</span>?
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4"
          >
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>

            {feature.isList ? (
              <div className="flex flex-col space-y-2">
                {feature.listItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white shadow-sm border rounded-md px-4 py-2 flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <p className="text-gray-800 font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            ) : (
              <img src={feature.image} alt={feature.title} className="rounded-md" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageTools;

// TopFeatures.js
import React, { useState } from 'react';

const leftFeatures = [
  { title: 'CRM', subtitle: 'Grow Engagement', icon: '📊' },
  { title: 'MARKETING', subtitle: 'Grow Engagement', icon: '📢' },
  { title: 'HRM', subtitle: 'Grow Engagement', icon: '📈' },
  { title: 'CUSTOMERSERVICE', subtitle: 'Grow Engagement', icon: '💬' },
  { title: 'PRODUCTIVITY', subtitle: 'Grow Engagement', icon: '⚙️' },
];

const rightFeaturesData = {
  CRM: [
    { title: 'B2B Integration', subtitle: 'Grow Engagement', icon: '🔗' },
    { title: 'Mail to Lead', subtitle: 'Grow Engagement', icon: '📧' },
    { title: 'API\'s', subtitle: 'Grow Engagement', icon: '🛠️' },
    { title: 'Webform to Lead', subtitle: 'Grow Engagement', icon: '🌐' },
    { title: 'Call to Lead', subtitle: 'Grow Engagement', icon: '📞' },
    { title: 'Google Integration', subtitle: 'Grow Engagement', icon: '🔍' },
  ],
  MARKETING: [
    { title: 'SEO Optimization', subtitle: 'Improve Visibility', icon: '🔍' },
    { title: 'Email Campaigns', subtitle: 'Increase Engagement', icon: '📧' },
    { title: 'Social Media', subtitle: 'Grow Audience', icon: '📱' },
    { title: 'Ad Targeting', subtitle: 'Boost Reach', icon: '🎯' },
    { title: 'Lead Nurturing', subtitle: 'Convert Leads', icon: '👥' },
  ],
  HRM: [
    { title: 'Employee Tracking', subtitle: 'Manage Workforce', icon: '👥' },
    { title: 'Payroll Management', subtitle: 'Automate Payroll', icon: '💸' },
    { title: 'Recruitment', subtitle: 'Hire Smartly', icon: '🎓' },
    { title: 'Performance Reviews', subtitle: 'Track Growth', icon: '📈' },
    { title: 'Onboarding', subtitle: 'Smooth Integration', icon: '📝' },
  ],
  CUSTOMERSERVICE: [
    { title: 'Helpdesk Support', subtitle: 'Support Customers', icon: '🛠️' },
    { title: 'Live Chat', subtitle: 'Instant Interaction', icon: '💬' },
    { title: 'Ticketing System', subtitle: 'Track Issues', icon: '📋' },
    { title: 'Feedback Collection', subtitle: 'Improve Service', icon: '📩' },
    { title: 'Knowledge Base', subtitle: 'Educate Users', icon: '📚' },
  ],
  PRODUCTIVITY: [
    { title: 'Task Management', subtitle: 'Stay Organized', icon: '🗂️' },
    { title: 'Team Collaboration', subtitle: 'Work Together', icon: '👥' },
    { title: 'Project Planning', subtitle: 'Deliver Results', icon: '📝' },
    { title: 'Time Tracking', subtitle: 'Monitor Progress', icon: '⏳' },
    { title: 'Goal Setting', subtitle: 'Achieve Milestones', icon: '🏆' },
  ],
};

const TopFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState('CRM');

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="w-full bg-[#0b3558] py-12 text-white">
      <div className="text-center">
        <h3 className="text-lg mb-2">Features</h3>
        <h2 className="text-4xl font-bold">BIZ Pro Top Features</h2>
      </div>

      <div className="max-w-7xl mx-auto mt-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6">
        {/* Left Side */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-6">
          {leftFeatures.map((feature, index) => (
            <div
              key={index}
              onClick={() => handleFeatureClick(feature.title)}
              className={`cursor-pointer p-6 rounded-lg shadow-lg flex items-center space-x-4 transition ${
                selectedFeature === feature.title ? 'bg-[#11467279]' : 'bg-[#114c7d]'
              } hover:bg-[#0b3558a0]`}
            >
              <div className="bg-white text-blue-800 w-12 h-12 rounded-md flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rightFeaturesData[selectedFeature].map((feature, index) => (
            <div key={index} className="bg-[#19558742] p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <div className="bg-white text-blue-800 w-12 h-12 rounded-md flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore More Button */}
      <div className="mt-8 text-center">
        <button className="py-3 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default TopFeatures;

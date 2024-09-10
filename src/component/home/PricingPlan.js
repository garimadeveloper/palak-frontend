// PricingPlan.js
import React, { useState } from 'react';

const PricingPlan = () => {
  const [billingType, setBillingType] = useState('monthly'); // for toggling between monthly/yearly

  const handleBillingTypeChange = (type) => {
    setBillingType(type);
  };

  return (
    <div className="w-full py-12 bg-gray-50 flex flex-col items-center">
      <h3 className="text-blue-500 mb-4 font-medium">Biz Pro Plans</h3>
      <h2 className="text-4xl font-bold text-gray-900">
        We Offer Great <span className="text-blue-600">Price Plan</span> For The <span className="text-blue-600">Application</span>
      </h2>

      <div className="flex space-x-4 mt-8 text-gray-500">
        <button
          className={`mr-4 ${billingType === 'monthly' ? 'text-gray-900 font-semibold' : ''}`}
          onClick={() => handleBillingTypeChange('monthly')}
        >
          Billed Monthly
        </button>
        <span>|</span>
        <button
          className={`ml-4 ${billingType === 'yearly' ? 'text-gray-900 font-semibold' : ''}`}
          onClick={() => handleBillingTypeChange('yearly')}
        >
          Billed Yearly
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full max-w-7xl h-[350px]">
        {/* Free Plan */}
        <div className="border border-gray-300 p-6 rounded-lg shadow hover:shadow-lg transition ">
          <h3 className="text-2xl font-bold mb-4">Free</h3>
          <p className="text-gray-600 mt-5">Recover all mailbox items including emails, attachments, contacts.</p>
          <p className="text-lg font-bold mb-4  mt-10">Always Free</p>
          <button className="w-full py-3 bg-white border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 mt-4">
            Try for Free
          </button>
        </div>

        {/* Standard Plan */}
        <div className="border border-blue-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">Standard</h3>
          <p className="text-gray-600 mb-4">Recover all mailbox items including emails, attachments, contacts.</p>
          <p className="text-lg font-bold mb-4">$16 / Seat / Mo</p>
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Try for Free
          </button>
        </div>

        {/* Teams Plan */}
        <div className="border border-blue-600 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Teams</h3>
          <p className="text-gray-600 mb-4">Recover all mailbox items including emails, attachments, contacts.</p>
          <p className="text-lg font-bold mb-4">$16 / Seat / Mo</p>
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Try for Free
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="border border-blue-900 p-6 rounded-lg shadow-lg bg-blue-900 text-white hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
          <p className="text-white mb-4">Recover all mailbox items including emails, attachments, contacts.</p>
          <p className="text-lg font-bold mb-4">$16 / Seat / Mo</p>
          <button className="w-full py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;

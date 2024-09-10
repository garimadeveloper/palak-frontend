import React from 'react';

const CompanySection = () => {
  const companies = [
    { name: 'GEICO', logo: '/image/geico.jpg' },
    { name: 'Deel', logo: '/image/geico.jpg' },
    { name: 'Stanford', logo: '/image/geico.jpg' },
    { name: 'Guaranteed Rate', logo: '/image/geico.jpg' },
    { name: 'Compass', logo: '/image/geico.jpg' },
    { name: 'Sonder', logo: '/image/geico.jpg' },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        20,000+ Companies Managed their Project with Biz Pro
      </h2>
      <div className="flex justify-between space-x-20">
        {companies.map((company, index) => (
            <div className='w-32'>

          <img
            key={index}
            src={company.logo}
            alt={`${company.name} logo`}
            className="h-10 w-30 object-contain"
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySection;

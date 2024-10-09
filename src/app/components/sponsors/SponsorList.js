import React from 'react';
import sponsorsData from "../../data/sponsors.json";

const SponsorList = () => {
  const sponsors = sponsorsData.sponsors;

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Our Sponsors & Supporters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-32 h-32 object-contain mb-4" // Adjust size as needed
            />
            <h2 className="text-xl font-semibold">{sponsor.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorList;

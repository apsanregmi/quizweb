import React from 'react';
import competitorsData from "../../data/competitor.json";

const CompetitorList = () => {
  return (
    <div className="flex flex-col items-center p-5">
      
      <h1 className="text-white font-semibold text-center justify-center text-4xl mb-4"> Competitor List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {competitorsData.competitors.map((competitor) => (
          <div key={competitor.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{competitor.name}</h2>
            <p className="text-gray-600">Coordinator: {competitor.coordinator}</p>
            <h3 className="mt-2 font-semibold">Team Members:</h3>
            <ul className="list-disc pl-5">
              {competitor.teamMembers.map((member, index) => (
                <li key={index} className="text-gray-800">{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitorList;

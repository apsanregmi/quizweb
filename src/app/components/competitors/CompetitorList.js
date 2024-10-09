import React, { useState } from 'react';
import competitorsData from "../../data/competitor.json";

const CompetitorList = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  };

  const radius = 300; // Base radius for the circular layout
  const competitors = competitorsData.competitors;
  const totalCompetitors = competitors.length;

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold mb-48 text-white">Competitor List</h1>
      <div className="relative w-full h-80">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: `${radius * 2.5}px`, height: `${radius * 2}px` }}
        >
          {competitors.map((competitor, index) => {
            const angle = (index / totalCompetitors) * (2 * Math.PI); // Calculate angle
            const x = radius * Math.cos(angle); // X position
            const y = radius * Math.sin(angle); // Y position

            return (
              <div
                key={competitor.id}
                className="absolute flex items-center justify-center cursor-pointer"
                style={{ left: `${x + radius}px`, top: `${y + radius}px` }}
                onClick={() => handleMemberClick(competitor)}
              >
                <div className="bg-blue-500 text-white rounded-3xl w-36 h-24 flex items-center text-center justify-center">
                  {competitor.name}
                </div>
              </div>
            );
          })}

          {/* Display selected member details at the center */}
          {selectedMember && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 border border-gray-300 rounded-lg shadow-lg bg-yellow-200"
              style={{ width: '300px', height: '200px' }}
            >
              <h2 className="text-xl font-bold">{selectedMember.name}</h2>
              <p className="text-gray-600">Coordinator: {selectedMember.coordinator}</p>
              <h3 className="mt-2 font-semibold">Team Members:</h3>
              <ul className="list-disc pl-5">
                {selectedMember.teamMembers.map((member, index) => (
                  <li key={index} className="text-gray-800">{member}</li>
                ))}
              </ul>
              {/* <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleClose}
              >
                Close
              </button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitorList;

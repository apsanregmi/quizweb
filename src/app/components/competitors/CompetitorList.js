import React, { useState } from 'react';
import competitorsData from "../../data/competitor.json";

const CompetitorList = () => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMemberId(member.id); // Track the selected member's ID
  };

  const handleClose = () => {
    setSelectedMemberId(null);
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
                className={`absolute flex items-center rounded-3xl justify-center cursor-pointer transition-all duration-300 ${selectedMemberId === competitor.id ? 'bg-green-400' : 'bg-blue-500'}`} // Change color if selected
                style={{ left: `${x + radius}px`, top: `${y + radius}px` }}
                onClick={() => handleMemberClick(competitor)}
              >
                <div className="text-white rounded-3xl w-36 h-24 flex items-center text-center justify-center px-2">
                  {competitor.name}
                </div>
              </div>
            );
          })}

          {/* Display selected member details at the center */}
          {selectedMemberId && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-14 mt-10 border border-gray-300 rounded-full shadow-lg bg-yellow-200"
              style={{ width: '400px', height: '300px' }} // Increased size
            >
              <h2 className="text-xl font-bold">{competitors.find(member => member.id === selectedMemberId)?.name}</h2>
              <p className="text-gray-600">Coordinator: {competitors.find(member => member.id === selectedMemberId)?.coordinator}</p>
              <h3 className="mt-2 font-semibold">Team Members:</h3>
              <ul className="list-disc pl-5">
                {competitors.find(member => member.id === selectedMemberId)?.teamMembers.map((member, index) => (
                  <li key={index} className="text-gray-800">{member}</li>
                ))}
              </ul>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitorList;

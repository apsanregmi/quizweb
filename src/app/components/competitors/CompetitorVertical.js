"use client";
import React, { useState } from "react";
import competitorsData from "../../data/competitor.json";

const CompetitorVertical = () => {
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const competitors = competitorsData.competitors;

  const handleMemberClick = (member) => {
    setSelectedMemberId(member.id); // Track the selected member's ID
  };

  const handleClose = () => {
    setSelectedMemberId(null); // Reset the selection
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      {competitors.map((competitor) => {
        const isSelected = selectedMemberId === competitor.id;
        return (
          <div
            key={competitor.id}
            className={`w-full max-w-md p-4 flex flex-col items-center text-center cursor-pointer rounded-lg transition-all duration-300 ${
              isSelected ? "bg-yellow-400" : "bg-blue-500"
            }`} // Highlight if selected
            onClick={() => handleMemberClick(competitor)}
          >
            <h2 className="text-white text-lg font-semibold">{competitor.name}</h2>
            <p className="text-white">{competitor.coordinator}</p>
            
          </div>
        );
      })}

      
    </div>
  );
};

export default CompetitorVertical;

import React from 'react';

const CompetitorList = ({ competitors }) => {
    // Ensure competitors is defined and is an array
    if (!competitors || !Array.isArray(competitors)) {
        return <div>Loading competitors...</div>; // Optional loading state
    }

    // Calculate the position of each competitor in a circle
    const radius = 150; // You can adjust this radius to change the circle size
    const totalCompetitors = competitors.length;

    return (
        <div className="relative flex justify-center items-center h-96">
            <div className="relative">
                {competitors.map((competitor, index) => {
                    const angle = (index / totalCompetitors) * (2 * Math.PI);
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                        <div
                            key={competitor.id}
                            className="absolute bg-blue-500 text-white p-4 rounded shadow-lg"
                            style={{ transform: `translate(${x}px, ${y}px)` }}
                        >
                            <h3>{competitor.name}</h3>
                            <p>Coordinator: {competitor.coordinator}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CompetitorList;

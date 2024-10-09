// components/GroupCircle.js
"use client";

const GroupCircle = ({ groups }) => {
  return (
    <div className="relative w-full h-96">
      {groups.map((group, index) => {
        const angle = (360 / groups.length) * index;
        return (
          <div
            key={index}
            className="absolute transform"
            style={{ transform: `rotate(${angle}deg) translate(150px)` }}
          >
            <div className="bg-blue-500 p-4 text-white rounded-full">
              {group.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GroupCircle;

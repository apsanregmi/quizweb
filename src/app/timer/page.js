"use client";

import React from "react";
import Timer from  "../components/timer/Timer"

const Quiz = () => {
  const handleComplete = () => {
    alert("Time's up!");
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-semibold mb-6 text-center">Quiz Competition</h1>
      <Timer duration={30} onComplete={handleComplete} />
    </div>
  );
};

export default Quiz;

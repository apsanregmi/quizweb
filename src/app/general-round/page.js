"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import QuestionGrid from "../components/QuestionGrid";
import CompetitorVertical from "../components/competitors/CompetitorVertical";
import Timer from "../components/Timer";

const GeneralRound = () => {
  const [duration, setDuration] = useState(30); // Timer duration (30 seconds default)
  const [key, setKey] = useState(0); // Key for remounting Timer

  // Handle question selection and reset timer
  const handleQuestionSelect = (question) => {
    console.log("Selected question:", question);

    // Reset the timer for each selected question (resetting to 30 seconds)
    setDuration(30);
    setKey(prevKey => prevKey + 1); // Change key to remount Timer component

   
  };
 const handleComplete = () => {
      alert("Time's up!");
    };
  

  return (
    <div className="m-10 p-5">
      <div className="grid grid-cols-3 gap-5">
        {/* Question Grid */}
        <div className="bg-pink-200">
          <QuestionGrid totalQuestions={100} onQuestionSelect={handleQuestionSelect} />
        </div>

        {/* Timer Section */}
        <div className="bg-red-200">
          <div className="grid grid-flow-col grid-rows-3">
            <div className="bg-red-300">
              {/* Timer component with key to reset */}
              <Timer key={key} duration={duration} onComplete={handleComplete} />
            </div>
            <div className="bg-red-100"></div>
            <div className="bg-red-800">Hello</div>
          </div>
        </div>

        {/* Competitor Section */}
        <div className="bg-yellow-400">
          <CompetitorVertical />
        </div>
      </div>

      
    </div>
    
  );
};

export default GeneralRound;

"use client";

import React from "react";
import Navbar from "../components/Navbar";
import QuestionGrid from "../components/QuestionGrid";
import CompetitorVertical from "../components/competitors/CompetitorVertical";
import Timer from "../components/Timer";

const GeneralRound = () => {
  const handleQuestionSelect = (question) => {
    console.log("Selected question:", question);
  };
  return (
    <div className="m-10 p-5">
      <div className=" grid grid-cols-3 gap-5 ">
        <div className="gridList bg-pink-200">
          <QuestionGrid
            totalQuestions={100}
            onQuestionSelect={handleQuestionSelect}
          />
        </div>
        <div className="question bg-red-200">
          <div className="grid grid-flow-col grid-rows-3">
            <div className="bg-red-300">
              <Timer />
            </div>
            <div className="bg-red-100"></div>
            <div className="bg-red-800">Hello</div>
          </div>
        </div>
        <div className="timerSide bg-yellow-400">
          {" "}
          <CompetitorVertical />
        </div>
      </div>
      <Timer/>
    </div>
  );
};

export default GeneralRound;

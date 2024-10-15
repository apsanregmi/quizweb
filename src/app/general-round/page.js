// GeneralRound.js
"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import QuestionGrid from "../components/QuestionGrid";
import CompetitorVertical from "../components/competitors/CompetitorVertical";
import Timer from "../components/Timer";
import questionsData from "../data/general.json"; // Import your question data

const schools = ["School A", "School B", "School C"]; // Example school names

const GeneralRound = () => {
  const [duration, setDuration] = useState(30); // Timer duration (30 seconds default)
  const [key, setKey] = useState(0); // Key for remounting Timer
  const [selectedQuestion, setSelectedQuestion] = useState(null); // Selected question
  const [selectedSchool, setSelectedSchool] = useState(null); // Selected school
  const [scores, setScores] = useState({ "School A": 0, "School B": 0, "School C": 0 }); // Track school scores

  // Handle school selection
  const handleSchoolSelect = (school) => {
    setSelectedSchool(school);
    setSelectedQuestion(null); // Reset selected question when school changes
  };

  // Handle question selection and reset timer
  const handleQuestionSelect = (questionId) => {
    const question = questionsData.questions.find((q) => q.id === questionId);
    setSelectedQuestion(question);

    // Reset the timer
    setDuration(30);
    setKey((prevKey) => prevKey + 1); // Reset Timer component
  };

  const handleAnswer = (isCorrect) => {
    if (!selectedSchool || !selectedQuestion) return;

    if (isCorrect) {
      // Increase score for the selected school
      setScores((prevScores) => ({
        ...prevScores,
        [selectedSchool]: prevScores[selectedSchool] + selectedQuestion.marks,
      }));
    }
    // Clear selected question after answering
    setSelectedQuestion(null);
  };

  const handleComplete = () => {
    alert("Time's up!");
    setSelectedQuestion(null); // Deselect the question if time runs out
  };

  return (
    <div className="m-10 p-5">
      <div className="grid grid-cols-3 gap-5">
        {/* School Selection */}
        <div className="bg-blue-200 p-4">
          <h2 className="text-xl font-bold mb-4">Select School:</h2>
          {schools.map((school) => (
            <button
              key={school}
              className={`p-4 mb-2 rounded ${selectedSchool === school ? "bg-blue-500 text-white" : "bg-blue-300"}`}
              onClick={() => handleSchoolSelect(school)}
            >
              {school}
            </button>
          ))}
        </div>

        {/* Question Grid */}
        <div className="bg-pink-200">
          <QuestionGrid
            totalQuestions={questionsData.questions.length}
            onQuestionSelect={handleQuestionSelect}
            disabled={!selectedSchool} // Disable question grid until a school is selected
          />
        </div>

        {/* Timer Section */}
        <div className="bg-red-200">
          <div className="grid grid-flow-col grid-rows-3">
            <div className="bg-red-300">
              <Timer key={key} duration={duration} onComplete={handleComplete} />
            </div>
            <div className="bg-red-100">
              {selectedQuestion ? (
                <div>
                  <h2 className="text-xl font-bold">Question: {selectedQuestion.question}</h2>
                </div>
              ) : (
                <p>Select a question to view.</p>
              )}
            </div>
            <div className="bg-red-800 flex justify-around mt-4">
              <button
                className="p-2 bg-green-500 text-white rounded"
                onClick={() => handleAnswer(true)}
                disabled={!selectedQuestion}
              >
                Correct
              </button>
              <button
                className="p-2 bg-red-500 text-white rounded"
                onClick={() => handleAnswer(false)}
                disabled={!selectedQuestion}
              >
                Incorrect
              </button>
              <button
                className="p-2 bg-yellow-500 text-white rounded"
                onClick={() => setSelectedQuestion(null)}
                disabled={!selectedQuestion}
              >
                Pass
              </button>
            </div>
          </div>
        </div>

        {/* Competitor Section with Scores */}
        <div className="bg-yellow-400">
          <h2 className="text-xl font-bold mb-4">Scores:</h2>
          {schools.map((school) => (
            <div key={school} className="mb-2">
              <span>{school}: </span>
              <span>{scores[school]} points</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralRound;

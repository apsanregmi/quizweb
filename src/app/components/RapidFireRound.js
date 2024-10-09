// components/RapidFireRound.js
"use client";

import { useState } from 'react';
import Timer from './Timer';
import { motion } from 'framer-motion';

const RapidFireRound = () => {
  const [currentSet, setCurrentSet] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const sets = Array.from({ length: 20 }, (_, index) => ({
    setNumber: index + 1,
    questions: Array.from({ length: 10 }, (_, qIndex) => `Question ${qIndex + 1}`),
  }));

  const handleSetSelect = (setNumber) => {
    setCurrentSet(sets[setNumber]);
    setCurrentQuestionIndex(0);
    setIsAnswerCorrect(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswerCorrect(false);
    } else {
      // End of set
      setCurrentSet(null);
    }
  };

  const handleCorrectAnswer = () => {
    setIsAnswerCorrect(true);
    setScore(score + 10);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Rapid Fire Round</h1>
      <div className="mb-4">Score: {score}</div>

      {!currentSet && (
        <div className="mb-4">
          <h2>Select a Set:</h2>
          <div className="grid grid-cols-5 gap-4">
            {sets.map((set, index) => (
              <button
                key={index}
                className="p-4 bg-gray-200 hover:bg-gray-300 rounded"
                onClick={() => handleSetSelect(index)}
              >
                Set {set.setNumber}
              </button>
            ))}
          </div>
        </div>
      )}

      {currentSet && (
        <div>
          <h2 className="mb-4">
            Set {currentSet.setNumber}, Question {currentQuestionIndex + 1}
          </h2>
          <Timer duration={10} onTimeUp={handleNextQuestion} />
          <p>{currentSet.questions[currentQuestionIndex]}</p>
          <button className="p-2 bg-green-500 text-white mt-4" onClick={handleCorrectAnswer}>
            Correct Answer
          </button>
          {isAnswerCorrect && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="bg-green-500 p-4 text-white rounded mt-4"
            >
              Correct!
            </motion.div>
          )}
          <button className="p-2 bg-blue-500 text-white mt-4" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default RapidFireRound;

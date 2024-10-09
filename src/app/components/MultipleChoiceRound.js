// components/MultipleChoiceRound.js
"use client";

import { useState } from 'react';
import QuestionGrid from './QuestionGrid';
import Timer from './Timer';
import { motion } from 'framer-motion';

const MultipleChoiceRound = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuestionSelect = (questionNumber) => {
    setSelectedQuestion(questionNumber);
    setTimerFinished(false);
    setIsAnswerCorrect(false);
    setSelectedOption(null);
  };

  const handleTimeUp = () => {
    setTimerFinished(true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'A') {
      setIsAnswerCorrect(true);
      setScore(score + 10);
    }
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Multiple Choice Round</h1>
      <div className="mb-4">Score: {score}</div>

      {selectedQuestion && (
        <div className="mb-4">
          <Timer duration={30} onTimeUp={handleTimeUp} />
          {!timerFinished && (
            <div>
              <p>Question {selectedQuestion}: What is the largest planet in our solar system?</p>
              <div className="mt-4">
                <button
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded mr-2"
                  onClick={() => handleOptionSelect('A')}
                >
                  A) Jupiter
                </button>
                <button
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded mr-2"
                  onClick={() => handleOptionSelect('B')}
                >
                  B) Saturn
                </button>
                <button
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded mr-2"
                  onClick={() => handleOptionSelect('C')}
                >
                  C) Earth
                </button>
                <button
                  className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
                  onClick={() => handleOptionSelect('D')}
                >
                  D) Mars
                </button>
              </div>
            </div>
          )}

          {isAnswerCorrect && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="bg-green-500 p-4 text-white rounded mt-4"
            >
              Correct Answer!
            </motion.div>
          )}

          {selectedOption && !isAnswerCorrect && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-red-500 p-4 text-white rounded mt-4"
            >
              Wrong Answer!
            </motion.div>
          )}
        </div>
      )}

      {!selectedQuestion && (
        <QuestionGrid totalQuestions={100} onQuestionSelect={handleQuestionSelect} />
      )}
    </div>
  );
};

export default MultipleChoiceRound;

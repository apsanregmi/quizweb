// components/VisualRound.js
"use client";

import { useState } from 'react';
import QuestionGrid from './QuestionGrid';
import Timer from './Timer';
import { motion } from 'framer-motion';

const VisualRound = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuestionSelect = (questionNumber) => {
    setSelectedQuestion(questionNumber);
    setTimerFinished(false);
    setIsAnswerCorrect(false);
  };

  const handleTimeUp = () => {
    setTimerFinished(true);
  };

  const handleCorrectAnswer = () => {
    setIsAnswerCorrect(true);
    setScore(score + 10);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Visual Round</h1>
      <div className="mb-4">Score: {score}</div>

      {selectedQuestion && (
        <div className="mb-4">
          <Timer duration={30} onTimeUp={handleTimeUp} />
          {!timerFinished && (
            <div>
              <p>Question {selectedQuestion}:</p>
              {/* Replace with your image source */}
              <img src="/images/sample.jpg" alt="Visual Question" className="mb-4" />
              <button className="p-2 bg-green-500 text-white" onClick={handleCorrectAnswer}>
                Submit Answer
              </button>
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
        </div>
      )}

      {!selectedQuestion && (
        <QuestionGrid totalQuestions={100} onQuestionSelect={handleQuestionSelect} />
      )}
    </div>
  );
};

export default VisualRound;

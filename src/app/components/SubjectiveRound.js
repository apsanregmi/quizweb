// components/SubjectiveRound.js
"use client";

import { useState } from 'react';
import QuestionGrid from './QuestionGrid';
import Timer from './Timer';
import { motion } from 'framer-motion';

const SubjectiveRound = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswer = '42';

  const handleQuestionSelect = (questionNumber) => {
    setSelectedQuestion(questionNumber);
    setTimerFinished(false);
    setIsAnswerCorrect(false);
    setAnswer('');
  };

  const handleTimeUp = () => {
    setTimerFinished(true);
  };

  const handleSubmitAnswer = () => {
    if (answer.trim() === correctAnswer) {
      setIsAnswerCorrect(true);
      setScore(score + 10);
    }
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Subjective Round</h1>
      <div className="mb-4">Score: {score}</div>

      {selectedQuestion && (
        <div className="mb-4">
          <Timer duration={60} onTimeUp={handleTimeUp} />
          {!timerFinished && (
            <div>
              <p>Question {selectedQuestion}: What is the answer to life, the universe, and everything?</p>
              <textarea
                className="w-full p-2 border mt-4"
                rows="4"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <button className="p-2 bg-green-500 text-white mt-4" onClick={handleSubmitAnswer}>
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

          {answer && !isAnswerCorrect && timerFinished && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-red-500 p-4 text-white rounded mt-4"
            >
              Time's up! Incorrect Answer.
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

export default SubjectiveRound;

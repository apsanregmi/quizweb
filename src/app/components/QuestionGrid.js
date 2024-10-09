// components/QuestionGrid.js
"use client";

const QuestionGrid = ({ totalQuestions, onQuestionSelect }) => {
  return (
    <div className="grid grid-cols-10 gap-4">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <button
          key={index}
          className="p-4 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => onQuestionSelect(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default QuestionGrid;

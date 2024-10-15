// components/QuestionGrid.js
"use client";

const QuestionGrid = ({ totalQuestions, onQuestionSelect, disabled }) => {
  return (
    <div className="grid grid-cols-10 gap-4 p-4 rounded-full">
      {Array.from({ length: totalQuestions }, (_, index) => (
        <button
          key={index}
          className={`p-4 rounded-full ${disabled ? "bg-gray-400" : "bg-gray-200 hover:bg-gray-300"}`}
          onClick={() => !disabled && onQuestionSelect(index + 1)}
          disabled={disabled}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default QuestionGrid;

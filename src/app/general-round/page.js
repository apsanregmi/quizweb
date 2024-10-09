import React from 'react';
import Navbar from '../components/Navbar';

const GeneralRound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">
          Welcome to the General Round!
        </h1>
        <p className="text-lg text-gray-700">
          Get ready to answer the first question.
        </p>
      </div>
    </div>
  );
};

export default GeneralRound;

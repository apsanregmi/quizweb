// components/Timer.js
"use client";

import { useState, useEffect } from 'react';

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return <div className="text-3xl">{timeLeft} seconds left</div>;
};

export default Timer;

import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ duration, onComplete }) => {
  return (
    <div className="flex justify-center items-center ">
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={["#004777", "#F7B801", "#A30000", "#FF0000"]}
        colorsTime={[10, 6, 3, 0]}  // Color change intervals
        onComplete={onComplete}
        size={150}
        strokeWidth={12}
      >
        {({ remainingTime }) => (
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-blue-800">{remainingTime}</span>
            <span className="text-gray-600 text-lg">seconds</span>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;

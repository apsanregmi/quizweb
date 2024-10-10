// Mark the component as a client component
"use client"; // This must be at the very top before any imports

import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Countdown from "react-countdown";
import { Howl } from "howler";

// Timer sound
const soundSrc = '/path/to/timer-sound.mp3'; // Replace with your sound path

const AttractiveTimer = ({ duration }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const soundRef = useRef(null);

  // Timer start sound
  const playSound = () => {
    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: [soundSrc],
        volume: 0.5,
      });
    }
    soundRef.current.play();
  };

  // Animation config for the circular progress bar
  const animationProps = useSpring({
    from: { strokeDashoffset: 440 }, // Full circle length (2πr for radius 70px)
    to: { strokeDashoffset: 0 },
    config: { duration: duration * 1000 },
    reset: !isRunning,
  });

  // Handle timer completion
  const handleCompletion = () => {
    setCompleted(true);
    playSound(); // Play sound when time is up
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-10">
      <div className="relative">
        {/* Background circle for shadow effect */}
        <svg width="160" height="160" className="absolute inset-0">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="none"
            strokeWidth="10"
            fill="url(#gradient)"
            className="filter drop-shadow-xl"
          />
        </svg>

        {/* Gradient-filled progress bar */}
        <svg width="160" height="160">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4A90E2", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#50E3C2", stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="gray"
            strokeWidth="10"
            fill="none"
            className="drop-shadow-lg"
          />

          <animated.circle
            cx="80"
            cy="80"
            r="70"
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="none"
            strokeDasharray="440"
            strokeDashoffset={animationProps.strokeDashoffset}
            className="transition-colors duration-500"
          />
        </svg>
      </div>

      <Countdown
        date={Date.now() + duration * 1000} // Countdown duration
        controlled={false}
        onStart={() => setIsRunning(true)}
        onComplete={handleCompletion}
        renderer={({ minutes, seconds }) => (
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h2>
        )}
      />

      {!isRunning && !completed && (
        <button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => setIsRunning(true)}
        >
          Start Timer
        </button>
      )}

      {completed && (
        <h3 className="text-red-500 font-bold text-3xl mt-4 animate-pulse">
          Time's Up!
        </h3>
      )}
    </div>
  );
};

export default AttractiveTimer;

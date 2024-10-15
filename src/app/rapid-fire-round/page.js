"use client";
import React, { useState } from "react";
import Timer from "../components/Timer";

const Page = () => {
  // Setting up a timestamp for future use (5 minutes added to current time)
  const [expiryTimestamp] = useState(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300); // 5 minutes timer by default
    return time;
  });

  return (
    <div>
      {/* Rendering the Timer component */}
      <Timer />
    </div>
  );
};

export default Page;

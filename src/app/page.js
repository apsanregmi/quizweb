// pages/index.js
"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Link from 'next/link';
import ButtonList from "./components/buttons/ButtonList";
import CompetitorList from "./components/competitors/CompetitorList";
import SponsorList from "./components/sponsors/SponsorList";
import QuestionGrid from "./components/QuestionGrid";
import Timer from "./components/timer/Timer";

export default function Home() {
  const handleComplete = () => {
    alert("Time's up!");
  };
  
  return (
    <div className="  bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-24 flex flex-col items-center">
        <motion.h1
          className="text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the Quiz Competition
        </motion.h1>
        <ButtonList/>
        <div className="container mt-10 mb-72">
          
          <CompetitorList/>
          <div className="p-6">
      <h1 className="text-4xl font-semibold mb-6 text-center mt-48">Quiz Competition</h1>
      <Timer duration={30} onComplete={handleComplete} />
    </div>


          

        </div>
        <div className="-mt-48">
        <SponsorList/>

        </div>


        
      </div>
    </div>
  );
}

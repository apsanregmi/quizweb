// pages/index.js
"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Link from 'next/link';
import ButtonList from "./components/buttons/ButtonList";
import CompetitorList from "./components/competitors/CompetitorList";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen">
      {/* <Navbar /> */}
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
        <div className="container">
          <CompetitorList/>

        </div>

        
      </div>
    </div>
  );
}

import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";

const ButtonList = () => {
  return (
    <div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link href="/general-round" legacyBehavior>
            <a className="bg-white text-blue-600 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-blue-200 text-center">
              General Round
            </a>
          </Link>
          <Link href="/visual-round" legacyBehavior>
            <a className="bg-white text-green-600 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-green-200 text-center">
              Visual Round
            </a>
          </Link>
          <Link href="/rapid-fire-round" legacyBehavior>
            <a className="bg-white text-red-600 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-red-200 text-center">
              Rapid Fire Round
            </a>
          </Link>
          <Link href="/multiple-choice-round" legacyBehavior>
            <a className="bg-white text-yellow-600 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-yellow-200 text-center">
              Multiple Choice Round
            </a>
          </Link>
          <Link href="/subjective-round" legacyBehavior>
            <a className="bg-white text-purple-600 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-purple-200 text-center">
              Subjective Round
            </a>
          </Link>
          <Link href="/score" legacyBehavior>
            <a className="bg-white text-indigo-600 font-semibold py-4 px-6 rounded-lg shadow-lg hover:bg-indigo-200 text-center">
              Score
            </a>
          </Link>
        </motion.div>
      
    </div>
  )
}

export default ButtonList

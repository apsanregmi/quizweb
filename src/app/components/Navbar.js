// components/Navbar.js
"use client";

import Link from 'next/link';

const Navbar = () => {
  const rounds = [
    { name: 'General', path: '/general-round' },
    { name: 'Visual', path: '/visual-round' },
    { name: 'Rapid Fire', path: '/rapid-fire-round' },
    { name: 'Multiple Choice', path: '/mcq-round' },
    { name: 'Subjective', path: '/subjective-round' },
    { name: 'Score', path: '/score' },

  ];

  return (
    <nav className="bg-blue-600 p-4 text-white sticky top-0">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Navbar brand or title */}
        <div className="text-xl font-bold">
          <Link href="/" legacyBehavior>
            Master Nepal Quiz
          </Link>
        </div>

        {/* Navbar links */}
        <div className="flex space-x-4">
          {rounds.map((round, index) => (
            <Link key={index} href={round.path} legacyBehavior>
              <a className="hover:bg-blue-500 p-2 rounded transition duration-300 ease-in-out">
                {round.name} 
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

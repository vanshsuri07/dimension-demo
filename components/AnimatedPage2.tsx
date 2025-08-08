'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPage2 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      
      {/* Static background circle */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-b-full rotate-180 bg-gradient-conic from-black via-indigo-800 to-black p-px">
        <div className="w-full h-full rounded-b-full bg-[#06060a]"></div>
      </div>

      {/* Animated circles using Framer Motion */}
      <motion.div 
        className="absolute bottom-26 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-b-full rotate-180 p-3"
        style={{
          background: 'conic-gradient(from 0deg, black, #3730a3, black)'
        }}
        animate={{ 
          background: [
            'conic-gradient(from 0deg, black, #3730a3, black)',
            'conic-gradient(from 90deg, black, #3730a3, black)',
            'conic-gradient(from 180deg, black, #3730a3, black)',
            'conic-gradient(from 270deg, black, #3730a3, black)',
            'conic-gradient(from 360deg, black, #3730a3, black)'
          ]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="w-full h-full rounded-b-full bg-[#06060a]"></div>
      </motion.div>

      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-b-full rotate-180 p-1.5"
        style={{
          background: 'conic-gradient(from 0deg, black, #3730a3, black)'
        }}
        animate={{ 
          background: [
            'conic-gradient(from 0deg, black, #3730a3, black)',
            'conic-gradient(from 90deg, black, #3730a3, black)',
            'conic-gradient(from 180deg, black, #3730a3, black)',
            'conic-gradient(from 270deg, black, #3730a3, black)',
            'conic-gradient(from 360deg, black, #3730a3, black)'
          ]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "linear",
          delay: 0.5 
        }}
      >
        <div className="w-full h-full rounded-b-full bg-[#06060a]"></div>
      </motion.div>

      <div className="relative z-20 flex flex-col items-center space-y-6 text-center">
        
        {/* Animated button with Framer Motion */}
        <motion.div 
          className="p-[2px] rounded-lg"
          style={{
            background: 'conic-gradient(from 0deg, black, #eab308, black)'
          }}
          animate={{ 
            background: [
              'conic-gradient(from 0deg, black, #eab308, black)',
              'conic-gradient(from 90deg, black, #eab308, black)',
              'conic-gradient(from 180deg, black, #eab308, black)',
              'conic-gradient(from 270deg, black, #eab308, black)',
              'conic-gradient(from 360deg, black, #eab308, black)'
            ]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <motion.div 
            className="p-[1px] rounded-lg"
            style={{
              background: 'conic-gradient(from 0deg, black, #eab308, black)'
            }}
            animate={{ 
              background: [
                'conic-gradient(from 0deg, black, #eab308, black)',
                'conic-gradient(from 90deg, black, #eab308, black)',
                'conic-gradient(from 180deg, black, #eab308, black)',
                'conic-gradient(from 270deg, black, #eab308, black)',
                'conic-gradient(from 360deg, black, #eab308, black)'
              ]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear",
              delay: 0.2
            }}
          >
            <div className="rounded-lg bg-gradient-to-br from-violet-400 via-rose-400 to-yellow-200 px-6 py-3 text-white/70 font-semibold text-xl">
              D
            </div>
          </motion.div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold tracking-tight text-gray-900">
          <span className="block bg-gradient-to-r from-zinc-300 to-gray-400 bg-clip-text text-transparent">
            Ready to join new
          </span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Dimension?
          </span>
        </h1>

        <div className="card-wrapper h-[50px] w-[150px]">
          <div className="card-content to-yellow-20 flex items-center justify-center text-xs">
            <div className="max-w-[60%] text-center">
              <a
                href="https://dimension.dev"
                className="font-semibold text-white/80 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPage2;
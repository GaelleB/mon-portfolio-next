'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* 404 3D Objects positioned above title */}
      <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 pointer-events-none z-0">
        <div className="flex items-center -space-x-32">
          
          {/* Orange "4" */}
          <motion.div
            animate={{ 
              y: [0, -15, 0, 15, 0]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Image 
              src="/assets/3d/4-orange.png"
              alt="4" 
              width={800} 
              height={800} 
              className="opacity-90"
            />
          </motion.div>

          {/* "0" */}
          <motion.div
            animate={{ 
              y: [0, -15, 0, 15, 0]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <Image 
              src="/assets/3d/0-blue.png"
              alt="0" 
              width={800} 
              height={800} 
              className="opacity-90"
            />
          </motion.div>

          {/* Green "4" */}
          <motion.div
            animate={{ 
              y: [0, -15, 0, 15, 0]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <Image 
              src="/assets/3d/4-green.png"
              alt="4" 
              width={800} 
              height={800} 
              className="opacity-90"
            />
          </motion.div>

        </div>
      </div>

      {/* Main Content - positioned at bottom */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center z-10 max-w-2xl px-4">
        
        {/* 404 Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-6"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          OOPS! This page wasn&apos;t found!
        </motion.p>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/">
            <div className="cta-button-reverse font-public-sans">
              <span className="cta-button-text-reverse">
                Back Home
              </span>
              <span className="cta-button-icon-reverse">
                ←
              </span>
            </div>
          </Link>
        </motion.div>

      </div>

    </div>
  );
}
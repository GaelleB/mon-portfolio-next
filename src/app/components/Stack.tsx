'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Technologies avec descriptions
const technologies = [
  { 
    name: 'React', 
    icon: '⚛️', 
    color: '#61DAFB',
    description: 'React revolutionizes my web development approach. It provides a component-based architecture that makes building complex UIs intuitive and maintainable.'
  },
  { 
    name: 'Figma', 
    icon: '🎨', 
    color: '#F24E1E',
    description: 'Figma transforms my design workflow. It offers a collaborative platform where I can create stunning interfaces and prototypes with precision.'
  },
  { 
    name: 'Next.js', 
    icon: '▲', 
    color: '#000000',
    description: 'Next.js elevates my React applications. It provides server-side rendering, routing, and optimization features out of the box.'
  },
  { 
    name: 'Tailwind', 
    icon: '💨', 
    color: '#06B6D4',
    description: 'Tailwind accelerates my styling process. It offers utility-first CSS that allows rapid prototyping and consistent design systems.'
  },
  { 
    name: 'TypeScript', 
    icon: 'TS', 
    color: '#3178C6',
    description: 'TypeScript enhances my JavaScript development. It provides type safety and better tooling for more robust and maintainable code.'
  },
  { 
    name: 'Framer', 
    icon: '🎭', 
    color: '#0055FF',
    description: 'Framer revolutionizes my web design workflow. It goes beyond a simple website builder, offering a visual playground where I can craft stunning and interactive websites without getting bogged down in complex code.'
  }
];

// Composant carte technologie avec effet flip
const TechCard = ({ tech, index }: { tech: typeof technologies[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: index < 3 ? -50 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 + (index < 3 ? 0.1 : 0.4) }}
      className="text-center group cursor-pointer relative"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Tooltip qui suit la souris */}
      {showTooltip && !isFlipped && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute z-50 pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y - 50,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="bg-white rounded-full shadow-lg px-4 py-2 text-sm border border-gray-200 whitespace-nowrap">
            <span className="text-gray-700 font-medium">Tap to Flip</span>
          </div>
        </motion.div>
      )}
      <motion.div 
        className="w-[381px] h-[394px] p-6 mx-auto relative"
        style={{ perspective: '1000px' }}
      >
        {/* Carte qui flip */}
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Face avant */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ 
              borderRadius: '48px',
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '5px solid rgba(220, 220, 220, 0.4)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
              opacity: '1',
              backfaceVisibility: 'hidden'
            }}
          >
            <span className="text-8xl mb-6">{tech.icon}</span>
            <p className="font-semibold text-2xl text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {tech.name}
            </p>
          </motion.div>

          {/* Face arrière */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center p-8"
            style={{ 
              borderRadius: '48px',
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '5px solid rgba(220, 220, 220, 0.4)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
              opacity: '1',
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)'
            }}
          >
            <p className="text-lg leading-relaxed text-gray-700 text-center" style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              color: '#4D4D4D'
            }}>
              {tech.description}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Stack() {
  return (
    <div id="stack" className="relative min-h-screen bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Titre */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            My Stack
          </h2>
        </div>

        {/* Container principal avec grille de technologies */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
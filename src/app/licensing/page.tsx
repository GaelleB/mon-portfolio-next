'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Licensing() {
  const resources = [
    {
      name: 'Framer Motion',
      description: 'Animation library for React components',
      license: 'MIT License',
      usage: 'Used for all animations and transitions throughout the site'
    },
    {
      name: 'Google Fonts',
      description: 'Web fonts service by Google',
      license: 'Open Font License',
      usage: 'Public Sans and Inter fonts used for typography'
    },
    {
      name: 'Figma',
      description: 'Design and prototyping tool',
      license: 'Commercial License',
      usage: 'Used for UI/UX design and asset creation'
    },
    {
      name: 'Next.js',
      description: 'React framework for production',
      license: 'MIT License',
      usage: 'Core framework powering the entire application'
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      license: 'MIT License',
      usage: 'Styling and responsive design system'
    },
    {
      name: '3D Assets',
      description: 'Custom 3D objects and illustrations',
      license: 'Original Creation',
      usage: 'All 3D models and visual assets are original work'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      
      {/* Bouton Back Home en haut à gauche */}
      <div className="absolute top-8 left-8 z-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
        
        {/* Titre principal */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-12 text-center"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Licensing
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-16 text-center max-w-3xl"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          This portfolio uses various technologies and resources. Here&apos;s the complete attribution and licensing information.
        </motion.p>

        {/* Liste des ressources */}
        <div className="max-w-4xl w-full">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.name}
              className="bg-white border border-gray-200 rounded-2xl p-8 mb-6 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {resource.name}
                  </h3>
                  <p className="text-gray-600 mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {resource.description}
                  </p>
                  <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {resource.usage}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {resource.license}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note de bas de page */}
        <motion.div
          className="mt-16 text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-gray-500" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            All content, design, and code implementation are original work by Gaëlle Boucher. 
            This portfolio showcases personal projects and technical expertise.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
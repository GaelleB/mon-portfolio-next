"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraphs = [
  {
    title: "About Me",
    content: "My web design journey began with a solid foundation in design principles, meticulously honed through years of formal education. I hold a degree in Graphic Design from XYZ University, where I not only acquired technical expertise but also developed a profound appreciation for the beautiful union of aesthetics and functionality."
  },
  {
    title: "",
    content: "My tech stack mirrors the vibrant diversity of the web itself. From the core languages of HTML5, CSS3, and JavaScript to the arsenal of design tools like Adobe Creative Suite and Sketch, I stay well-equipped. However, I believe in constantly pushing the boundaries, exploring emerging technologies and design trends."
  },
  {
    title: "",
    content: "I believe that great design is not just about how something looks, but how it makes people feel. Every project is an opportunity to create something meaningful, functional, and beautiful that connects with users on a deeper level."
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Animations affinées pour chaque paragraphe (style Framer)
  const paragraph1Y = useTransform(scrollYProgress, [0, 0.3], ["60vh", "0vh"]);
  const paragraph1Rotate = useTransform(scrollYProgress, [0, 0.2, 0.4], ["2deg", "2deg", "0deg"]);
  const paragraph1Scale = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.6], [0.9, 1, 1, 0.95]);
  const paragraph1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 1], [0, 1, 1, 1]);

  const paragraph2Y = useTransform(scrollYProgress, [0.3, 0.6], ["60vh", "0vh"]);
  const paragraph2Rotate = useTransform(scrollYProgress, [0.3, 0.45, 0.65], ["2deg", "2deg", "0deg"]);
  const paragraph2Scale = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.85], [0.9, 1, 1, 0.95]);
  const paragraph2Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 1], [0, 1, 1, 1]);

  const paragraph3Y = useTransform(scrollYProgress, [0.6, 0.85], ["60vh", "0vh"]);
  const paragraph3Rotate = useTransform(scrollYProgress, [0.6, 0.75], ["2deg", "0deg"]);
  const paragraph3Scale = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 1], [0.9, 1, 1, 0.95]);
  const paragraph3Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.9], [0, 1, 1, 0]);

  // Animation du CV - arrive du HAUT après le 3ème paragraphe
  const cvY = useTransform(scrollYProgress, [0.85, 1], ["-60vh", "0vh"]);
  const cvScale = useTransform(scrollYProgress, [0.85, 0.95], [0.8, 1]);
  const cvOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Section avec hauteur pour permettre le scroll */}
      <div className="h-[400vh]">
        {/* Contenu sticky qui reste fixe pendant le scroll */}
        <div className="sticky top-0 h-screen bg-white overflow-hidden">
          {/* Formes organiques violettes en arrière-plan */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Forme violette (gauche) */}
            <div 
              className="absolute top-20 left-20 w-80 h-40 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full blur-sm opacity-60"
              style={{
                clipPath: "ellipse(65% 45% at 40% 60%)",
                transform: "rotate(-20deg)"
              }}
            />
            
            {/* Forme bleue (droite) */}
            <div 
              className="absolute top-32 right-20 w-72 h-36 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full blur-sm opacity-60"
              style={{
                clipPath: "ellipse(70% 50% at 60% 40%)",
                transform: "rotate(15deg)"
              }}
            />
            
            {/* Forme violette du bas */}
            <div 
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-sm opacity-50"
              style={{
                clipPath: "ellipse(80% 30% at 50% 50%)",
                transform: "translateX(-50%) rotate(-5deg)"
              }}
            />
          </div>

          {/* Paragraphes superposés */}
          <div className="relative h-full flex items-center justify-center">
            {/* Paragraph 1 */}
            <motion.div
              style={{
                y: paragraph1Y,
                rotate: paragraph1Rotate,
                scale: paragraph1Scale,
                opacity: paragraph1Opacity,
                zIndex: 3
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="h-20 md:h-24 mb-16 flex items-center justify-center">
                  {paragraphs[0].title && (
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                      {paragraphs[0].title}
                    </h2>
                  )}
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    {paragraphs[0].content}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div
              style={{
                y: paragraph2Y,
                rotate: paragraph2Rotate,
                scale: paragraph2Scale,
                opacity: paragraph2Opacity,
                zIndex: 2
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="h-20 md:h-24 mb-16 flex items-center justify-center">
                  {paragraphs[1].title && (
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                      {paragraphs[1].title}
                    </h2>
                  )}
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    {paragraphs[1].content}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Paragraph 3 */}
            <motion.div
              style={{
                y: paragraph3Y,
                rotate: paragraph3Rotate,
                scale: paragraph3Scale,
                opacity: paragraph3Opacity,
                zIndex: 1
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="h-20 md:h-24 mb-16 flex items-center justify-center">
                  {paragraphs[2].title && (
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                      {paragraphs[2].title}
                    </h2>
                  )}
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    {paragraphs[2].content}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* READ MY CV */}
            <motion.div
              style={{
                y: cvY,
                scale: cvScale,
                opacity: cvOpacity,
                zIndex: 10
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Read My CV
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
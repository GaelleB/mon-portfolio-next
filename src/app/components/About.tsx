"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Configuration des animations
const ANIMATION_CONFIG = {
  PARAGRAPH_DURATION: 0.3,
  CV_START: 0.85,
  INITIAL_ROTATION: "2deg",
  INITIAL_SCALE: 0.9,
  INITIAL_Y: "60vh"
} as const;

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

// Composant réutilisable pour chaque carte
interface ParagraphCardProps {
  paragraph: typeof paragraphs[0];
  animation: {
    y: MotionValue<string>;
    rotate: MotionValue<string>;
    scale: MotionValue<number>;
    opacity: MotionValue<number>;
    zIndex: number;
  };
}

const ParagraphCard: React.FC<ParagraphCardProps> = ({ paragraph, animation }) => (
  <motion.div
    style={{
      y: animation.y,
      rotate: animation.rotate,
      scale: animation.scale,
      opacity: animation.opacity,
      zIndex: animation.zIndex
    }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="h-20 md:h-24 mb-16 flex items-center justify-center">
        {paragraph.title && (
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {paragraph.title}
          </h2>
        )}
      </div>
      <div className="glass-card px-16 py-12 mx-auto flex items-center justify-center">
        <p className="text-2xl leading-relaxed" style={{ 
          fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif',
          color: '#4D4D4D',
          fontSize: '24px',
          fontWeight: 400
        }}>
          {paragraph.content}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Animations pour chaque paragraphe (hooks au niveau supérieur)
  const paragraph1Animation = {
    y: useTransform(scrollYProgress, [0, ANIMATION_CONFIG.PARAGRAPH_DURATION], [ANIMATION_CONFIG.INITIAL_Y, "0vh"]),
    rotate: useTransform(scrollYProgress, [0, 0.15, ANIMATION_CONFIG.PARAGRAPH_DURATION], [ANIMATION_CONFIG.INITIAL_ROTATION, ANIMATION_CONFIG.INITIAL_ROTATION, "0deg"]),
    scale: useTransform(scrollYProgress, [0, 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION, 1], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1, 0.95]),
    opacity: useTransform(scrollYProgress, [0, 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION, 1], [0, 1, 1, 1]),
    zIndex: 1
  };

  const paragraph2Animation = {
    y: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2], [ANIMATION_CONFIG.INITIAL_Y, "0vh"]),
    rotate: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.15, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2], [ANIMATION_CONFIG.INITIAL_ROTATION, ANIMATION_CONFIG.INITIAL_ROTATION, "0deg"]),
    scale: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, 1], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1, 0.95]),
    opacity: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, 1], [0, 1, 1, 1]),
    zIndex: 2
  };

  const paragraph3Animation = {
    y: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.CV_START], [ANIMATION_CONFIG.INITIAL_Y, "0vh"]),
    rotate: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.15], [ANIMATION_CONFIG.INITIAL_ROTATION, "0deg"]),
    scale: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.1, ANIMATION_CONFIG.CV_START, 1], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1, 0.95]),
    opacity: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.1, ANIMATION_CONFIG.CV_START, 0.9], [0, 1, 1, 1]),
    zIndex: 3
  };

  const paragraphAnimations = [paragraph1Animation, paragraph2Animation, paragraph3Animation];

  // Animation du CV - arrive du HAUT après le 3ème paragraphe
  const cvY = useTransform(scrollYProgress, [ANIMATION_CONFIG.CV_START, 1], ["-60vh", "0vh"]);
  const cvScale = useTransform(scrollYProgress, [ANIMATION_CONFIG.CV_START, 1], [0.8, 1]);
  const cvOpacity = useTransform(scrollYProgress, [ANIMATION_CONFIG.CV_START, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Section avec hauteur pour permettre le scroll */}
      <div className="h-[400vh]">
        {/* Contenu sticky qui reste fixe pendant le scroll */}
        <div className="sticky top-0 h-screen bg-white overflow-hidden">
          {/* Paragraphes superposés */}
          <div className="relative h-full flex items-center justify-center">
            {paragraphs.map((paragraph, index) => (
              <ParagraphCard
                key={index}
                paragraph={paragraph}
                animation={paragraphAnimations[index]}
              />
            ))}

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
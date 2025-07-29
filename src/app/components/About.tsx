"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Configuration des animations
const ANIMATION_CONFIG = {
  PARAGRAPH_DURATION: 0.15,
  CV_START: 0.65,
  PARAGRAPH_3_END: 0.75,
  INITIAL_ROTATION: "2deg",
  INITIAL_SCALE: 0.9,
  INITIAL_Y: "60vh"
} as const;

const paragraphs = [
  {
    title: "",
    content: "Greetings! I'm Gaëlle, and I navigate the exciting world of web design, where every pixel serves a purpose. Combining a deep understanding of user experience with a knack for transforming ideas into visually stunning interfaces, I approach each project with a burning passion to craft something truly remarkable."
  },
  {
    title: "",
    content: "My tech stack mirrors the vibrant diversity of the web itself. From the core languages of HTML5, CSS3, and JavaScript to the arsenal of design tools like Adobe Creative Suite and Figma, I stay well-equipped. However, I believe in constantly pushing the boundaries, exploring emerging technologies and design trends."
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
    opacity: useTransform(scrollYProgress, [0.05, 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION, 1], [0, 1, 1, 1]),
    zIndex: 1
  };

  const paragraph2Animation = {
    y: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2], [ANIMATION_CONFIG.INITIAL_Y, "0vh"]),
    rotate: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.15, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2], [ANIMATION_CONFIG.INITIAL_ROTATION, ANIMATION_CONFIG.INITIAL_ROTATION, "0deg"]),
    scale: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, 1], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1, 0.95]),
    opacity: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.05, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, 1], [0, 1, 1, 1]),
    zIndex: 2
  };

  const paragraph3Animation = {
    y: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_3_END], [ANIMATION_CONFIG.INITIAL_Y, "0vh"]),
    rotate: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.15], [ANIMATION_CONFIG.INITIAL_ROTATION, "0deg"]),
    scale: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.1, ANIMATION_CONFIG.PARAGRAPH_3_END, 1], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1, 0.95]),
    opacity: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.05, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.1, ANIMATION_CONFIG.PARAGRAPH_3_END, 1], [0, 1, 1, 1]),
    zIndex: 3
  };

  const paragraphAnimations = [paragraph1Animation, paragraph2Animation, paragraph3Animation];

  // Animation du CV - descente lente puis immobilité totale
  const cvY = useTransform(scrollYProgress, [0.78, 0.92, 0.95, 1], ["0vh", "40vh", "40vh", "40vh"]);
  const cvScale = useTransform(scrollYProgress, [0.78, 0.92, 1], [0.8, 1, 1]);
  const cvOpacity = useTransform(scrollYProgress, [0.78, 0.8, 0.95, 1], [0, 1, 1, 1]);

  return (
    <div id="about" ref={containerRef} className="relative">
      {/* Section avec hauteur pour permettre le scroll */}
      <div className="h-[250vh]">
        {/* Contenu sticky qui reste fixe pendant le scroll */}
        <div className="sticky top-0 h-screen bg-white overflow-hidden">
          {/* Titre fixe About Me */}
          <div className="absolute top-40 left-0 right-0 h-20 md:h-24 flex items-center justify-center z-50">
            <h2 className="text-4xl font-medium text-gray-900 mb-6" style={{ fontFamily: '"Public Sans", "Public Sans Placeholder", sans-serif', fontSize: '38px', fontWeight: 500 }}>
              About Me
            </h2>
          </div>
          
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
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div style={{ pointerEvents: 'auto', borderColor: '#EFF0FF' }} className="group inline-flex items-center bg-white border-[5px] rounded-[48px] text-xl font-bold h-[72px] overflow-hidden transition-all duration-300 cursor-pointer">
                <span className="inline-block px-[48px] py-[24px] text-black transition-all duration-300 group-hover:pr-[24px] group-hover:pl-[48px]">
                  Read My CV
                </span>
                <span className="inline-flex items-center justify-center bg-black text-white min-h-[65px] min-w-[65px] h-[65px] w-[65px] rounded-full -mr-[72px] transition-all duration-300 text-[24px] group-hover:mr-0 group-hover:[transform:rotate(-360deg)]" style={{ aspectRatio: '1/1', flexShrink: 0 }}>
                  📄
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

// Configuration des animations
const ANIMATION_CONFIG = {
  PARAGRAPH_DURATION: 0.2,
  CV_START: 0.65,
  PARAGRAPH_3_END: 0.8,
  INITIAL_ROTATION: "2deg", 
  INITIAL_SCALE: 0.9,
  INITIAL_Y: "60vh"
} as const;

const paragraphs = [
  {
    title: "",
    content: "Avant de devenir développeuse web, j'étais auxiliaire de puériculture. Je travaillais en néonatalogie, entourée de silences, de machines, et de tout petits humains. C'était un métier exigeant, profondément humain. Et puis un jour, j'ai eu besoin de créer autrement. Alors j'ai appris à coder."
  },
  {
    title: "",
    content: "Je vis au rythme du clavier, mais aussi de la musique, des séries et des livres. J'ai toujours aimé les histoires, celles qu'on lit, qu'on entend, qu'on regarde. Elles me nourrissent autant que le design ou le code. Les séries et la musique, c'est mon moteur. Ça m'inspire autant que Figma."
  },
  {
    title: "",
    content: "Aujourd'hui, je crée des sites web sur mesure avec React et Next.js. Je veux des sites simples, fluides et fidèles à ceux qui les portent. Je ne cherche pas juste à afficher du contenu. Je veux raconter ton histoire, à travers chaque ligne. Et te créer un espace qui te ressemble."
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
    rotate: useTransform(scrollYProgress, [0, 0.05, ANIMATION_CONFIG.PARAGRAPH_DURATION * 1.5], ["1deg", "1deg", "0deg"]),
    scale: useTransform(scrollYProgress, [0, 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION, 1], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1, 1]),
    opacity: useTransform(scrollYProgress, [0.05, 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION, 1], [0, 1, 1, 1]),
    zIndex: 1
  };

  const paragraph2Animation = {
    y: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2], [ANIMATION_CONFIG.INITIAL_Y, "0vh"]),
    rotate: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.05, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2.5], ["-1deg", "-1deg", "0deg"]),
    scale: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, 1], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1, 1]),
    opacity: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.05, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, 1], [0, 1, 1, 1]),
    zIndex: 2
  };

  const paragraph3Animation = {
    y: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_3_END], [ANIMATION_CONFIG.INITIAL_Y, "0vh"]),
    rotate: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.05, ANIMATION_CONFIG.PARAGRAPH_3_END + 0.1], ["1deg", "1deg", "0deg"]),
    scale: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.1, ANIMATION_CONFIG.PARAGRAPH_3_END, 1], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1, 1]),
    opacity: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.05, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.1, ANIMATION_CONFIG.PARAGRAPH_3_END, 1], [0, 1, 1, 1]),
    zIndex: 3
  };

  const paragraphAnimations = [paragraph1Animation, paragraph2Animation, paragraph3Animation];

  // Animation du CV - descente lente puis immobilité totale
  const cvY = useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_3_END, 0.9, 1], ["-10vh", "35vh", "35vh"]);
  const cvScale = useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_3_END, 0.9, 1], [0.8, 1, 1]);
  const cvOpacity = useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_3_END, ANIMATION_CONFIG.PARAGRAPH_3_END + 0.05, 1], [0, 1, 1]);

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
          
          {/* Objets 3D décoratifs */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Casque à gauche */}
            <motion.div 
              className="absolute left-100 top-80 w-64 h-64 z-5"
              style={{ transform: 'translateY(-50%)' }}
              animate={{
                y: [0, -8, -3, -12, 0],
                rotate: [0, -4, 2, -6, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: -2
              }}
            >
              <Image 
                src="/assets/3d/casque.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Biberon à droite */}
            <motion.div 
              className="absolute right-100 top-80 w-64 h-64 z-5"
              style={{ transform: 'translateY(-50%)' }}
              animate={{
                y: [0, -10, -5, -8, 0],
                rotate: [0, 3, -2, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            >
              <Image 
                src="/assets/3d/biberon.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>

          {/* Paragraphes superposés */}
          <div className="relative h-full flex items-center justify-center z-20">
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
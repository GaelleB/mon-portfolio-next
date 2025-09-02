"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

// Configuration des animations - vraiment lentes
const ANIMATION_CONFIG = {
  PARAGRAPH_DURATION: 0.25,
  PARAGRAPH_3_END: 0.65,
  CV_START: 0.65,
  CV_END: 0.8,
  SECTION_MOVE: 0.98,
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
    content: "Aujourd'hui, je crée des sites web sur mesure avec React et Next.js. Je veux des sites simples, fluides et fidèles à ceux qui les portent. Je ne cherche pas juste à afficher du contenu.<br />Je veux raconter ton histoire, à travers chaque ligne. Et te créer un espace qui te ressemble."
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
    <div className="relative w-full max-w-5xl p-4 md:p-6 mx-4 md:mx-8 lg:mx-12 xl:mx-0">
      {/* Calque 1 : blur + fond indigo ultra-dilué */}
      <div className="glass-bg glass-backdrop absolute inset-0 z-0" />

      {/* Calque 2 : carte blanche nette */}
      <div className="glass-foreground relative z-10 flex items-center justify-center text-center lg:py-9 lg:px-10">
        <p className="paragraph-text text-gray-custom text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed max-w-4xl" dangerouslySetInnerHTML={{ __html: paragraph.content }}>
        </p>
      </div>
    </div>
  </motion.div>
);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  

  // Animations pour chaque paragraphe (hooks au niveau supérieur) 
  const paragraph1Animation = {
    y: useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"]), // Toujours positionné
    rotate: useTransform(scrollYProgress, [0, 0.02, ANIMATION_CONFIG.PARAGRAPH_DURATION - 0.02], ["2deg", "2deg", "0deg"]), // Redressement très lent
    scale: useTransform(scrollYProgress, [0, 1], [1, 1]), // Toujours à l'échelle normale
    opacity: useTransform(scrollYProgress, [0, 1], [1, 1]), // Toujours visible
    zIndex: 1
  };

  const paragraph2Animation = {
    y: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2], [isMobile ? "40vh" : ANIMATION_CONFIG.INITIAL_Y, "0vh"]),
    rotate: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.01, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 - 0.02], ["-3deg", "-3deg", "0deg"]), // Redressement très lent
    scale: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, 1], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1, 1]),
    opacity: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.05, ANIMATION_CONFIG.PARAGRAPH_DURATION + 0.1, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, 1], [0, 1, 1, 1]),
    zIndex: 2
  };

  const paragraph3Animation = {
    y: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_3_END], [isMobile ? "30vh" : ANIMATION_CONFIG.INITIAL_Y, isMobile ? "-2vh" : "0vh"]),
    rotate: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.01, ANIMATION_CONFIG.PARAGRAPH_3_END - 0.02], ["3deg", "3deg", "0deg"]), // Redressement très lent
    scale: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.1, ANIMATION_CONFIG.PARAGRAPH_3_END], [ANIMATION_CONFIG.INITIAL_SCALE, 1, 1]),
    opacity: useTransform(scrollYProgress, [ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.05, ANIMATION_CONFIG.PARAGRAPH_DURATION * 2 + 0.1, ANIMATION_CONFIG.PARAGRAPH_3_END, ANIMATION_CONFIG.SECTION_MOVE], [0, 1, 1, 1]),
    zIndex: 3
  };

  const paragraphAnimations = [paragraph1Animation, paragraph2Animation, paragraph3Animation];

  // Animation du CV - apparaît à 0.6, se place jusqu'à 0.8, puis reste stable  
  const cvY = useTransform(scrollYProgress, [ANIMATION_CONFIG.CV_START, ANIMATION_CONFIG.CV_END, ANIMATION_CONFIG.SECTION_MOVE], ["12vh", "25vh", "25vh"]);
  const cvScale = useTransform(scrollYProgress, [ANIMATION_CONFIG.CV_START, ANIMATION_CONFIG.CV_START + 0.05, ANIMATION_CONFIG.CV_END], [1, 1, 1]);
  const cvOpacity = useTransform(scrollYProgress, [ANIMATION_CONFIG.CV_START, ANIMATION_CONFIG.CV_START + 0.02, ANIMATION_CONFIG.CV_END], [0, 1, 1]);
  const cvZIndex = useTransform(scrollYProgress, [ANIMATION_CONFIG.CV_START, ANIMATION_CONFIG.CV_END - 0.1, ANIMATION_CONFIG.CV_END], [0, 0, 4]);

  return (
    <div id="about" ref={containerRef} className="relative">
      {/* Section avec hauteur pour permettre le scroll */}
      <div className="h-[280vh] lg:h-[320vh]">
        {/* Contenu sticky qui reste fixe pendant le scroll */}
        <div className="sticky top-0 h-screen bg-white overflow-hidden">
          {/* Titre fixe About Me */}
          <div className="absolute top-12 md:top-16 lg:top-20 left-0 right-0 h-16 md:h-18 lg:h-20 flex items-center justify-center z-50">
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900">
              About Me
            </h2>
          </div>
          
          {/* Objets 3D décoratifs avec positionnement responsive */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Casque - côtés en desktop/tablette paysage, au-dessus des cards en mobile/tablette portrait */}
            <motion.div 
              className="absolute z-5 about-3d-object-1"
              animate={{
                y: [0, -15, 0, -10, 0, -20, 0],
                rotate: [0, -2, 1, -3, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            >
              <Image 
                src="/assets/3d/casque.png"
                alt="Casque audio 3D représentant la passion pour la musique et les séries"
                width={200}
                height={200}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Biberon - côtés en desktop/tablette paysage, en dessous des cards en mobile/tablette portrait */}
            <motion.div 
              className="absolute z-5 about-3d-object-2"
              animate={{
                y: [0, 20, 0, 15, 0, 25, 0],
                rotate: [0, 2, -1, 4, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 6
              }}
            >
              <Image 
                src="/assets/3d/biberon.png"
                alt="Biberon 3D symbolisant le passé d'auxiliaire de puériculture en néonatalogie"
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
                zIndex: cvZIndex
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div style={{ pointerEvents: 'auto' }} className="cta-button-glass font-public-sans">
                <div className="glass-bg-button glass-backdrop" />
                <div className="glass-foreground-button">
                  <span className="cta-button-text-glass text-base md:text-lg lg:text-xl">Read My CV</span>
                  <span className="cta-button-icon-glass">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                      <polyline points="13,2 13,9 20,9"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <line x1="10" y1="9" x2="8" y2="9"/>
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
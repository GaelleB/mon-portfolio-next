'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Icônes
const ReactIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/react.svg" alt="React" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(95%) saturate(1094%) hue-rotate(162deg) brightness(98%) contrast(94%)' }} />
  </div>
);

const NextIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/nextjs.svg" alt="Next.js" width={80} height={80} className="object-contain" />
  </div>
);

const FigmaIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/figma.svg" alt="Figma" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(92%) saturate(4593%) hue-rotate(344deg) brightness(98%) contrast(95%)' }} />
  </div>
);

const JavaScriptIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/javascript.jpg" alt="JavaScript" width={80} height={80} className="object-contain" />
  </div>
);

const TypeScriptIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/typescript.svg" alt="TypeScript" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(199deg) brightness(104%) contrast(97%)' }} />
  </div>
);

const HTMLIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/html.svg" alt="HTML5" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(36%) sepia(94%) saturate(6385%) hue-rotate(6deg) brightness(95%) contrast(88%)' }} />
  </div>
);

const CSSIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/css.svg" alt="CSS3" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(77%) saturate(1497%) hue-rotate(240deg) brightness(97%) contrast(83%)' }} />
  </div>
);

const SASSIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/sass.svg" alt="SASS" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(52%) sepia(17%) saturate(2878%) hue-rotate(284deg) brightness(104%) contrast(97%)' }} />
  </div>
);

const TailwindIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/tailwindcss.svg" alt="Tailwind CSS" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(88%) saturate(1552%) hue-rotate(158deg) brightness(91%) contrast(85%)' }} />
  </div>
);

const NotionIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/notion.svg" alt="Notion" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }} />
  </div>
);

const ChatGPTIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/chatgpt.svg" alt="ChatGPT" width={80} height={80}
      className="object-contain"
      style={{ transform: 'scale(1.5)' }} />
  </div>
);

const NodeIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/nodejs.svg" alt="Node.js" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(89%) saturate(1553%) hue-rotate(58deg) brightness(102%) contrast(102%)' }} />
  </div>
);

const ClaudeIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/claude.svg" alt="Claude" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(57%) sepia(51%) saturate(1097%) hue-rotate(324deg) brightness(97%) contrast(89%)' }} />
  </div>
);

const GitHubIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/github.svg" alt="GitHub" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(8%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(94%) contrast(96%)' }} />
  </div>
);

const GitIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/git.svg" alt="Git" width={80} height={80}
      className="object-contain"
      style={{ filter: 'brightness(0) saturate(100%) invert(36%) sepia(94%) saturate(6385%) hue-rotate(6deg) brightness(95%) contrast(88%)' }} />
  </div>
);

// Données
const technologies = [
  { name: 'React', IconComponent: ReactIcon, description: 'React revolutionizes my web development approach...' },
  { name: 'Figma', IconComponent: FigmaIcon, description: 'Figma transforms my design workflow...' },
  { name: 'Next.js', IconComponent: NextIcon, description: 'Next.js elevates my React applications...' },
  { name: 'JavaScript', IconComponent: JavaScriptIcon, description: 'JavaScript powers the dynamic functionality...' },
  { name: 'TypeScript', IconComponent: TypeScriptIcon, description: 'TypeScript enhances my JavaScript development...' },
  { name: 'HTML', IconComponent: HTMLIcon, description: 'HTML forms the backbone of all my web projects...' },
  { name: 'CSS', IconComponent: CSSIcon, description: 'CSS brings my designs to life...' },
  { name: 'SASS', IconComponent: SASSIcon, description: 'SASS enhances my CSS workflow...' },
  { name: 'Tailwind', IconComponent: TailwindIcon, description: 'Tailwind accelerates my styling process...' },
  { name: 'Notion', IconComponent: NotionIcon, description: 'Notion organizes my entire workflow...' },
  { name: 'Node.js', IconComponent: NodeIcon, description: 'Node.js powers my backend development...' },
  { name: 'ChatGPT', IconComponent: ChatGPTIcon, description: 'ChatGPT accelerates my development process...' },
  { name: 'Claude', IconComponent: ClaudeIcon, description: 'Claude assists in my development workflow...' },
  { name: 'GitHub', IconComponent: GitHubIcon, description: 'GitHub serves as my code repository...' },
  { name: 'Git', IconComponent: GitIcon, description: 'Git is my essential version control system...' }
];

// Card flip avec tooltip
const TechCard = ({ tech }: { tech: typeof technologies[0], index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress individuel pour chaque card
  const { scrollYProgress: cardScrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.8", "end 0.1"]
  });
  
  // Animation de scale - grandissent en entrant seulement
  const cardScale = useTransform(cardScrollYProgress, [0, 0.3], [0.85, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ scale: cardScale }}
      className={`text-center group cursor-pointer relative ${showTooltip ? 'z-50' : 'z-10'}`}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Tooltip - Desktop/Tablette seulement */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute z-50 pointer-events-none hidden md:block"
          style={{
            left: mousePosition.x,
            top: mousePosition.y - 50,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="bg-white rounded-full shadow-lg px-4 py-2 text-sm border border-gray-200 whitespace-nowrap">
            <span className="text-gray-700 font-medium">
              {isFlipped ? "Tap to Flip" : "Tap to Flip"}
            </span>
          </div>
        </motion.div>
      )}

      <motion.div className="w-[430px] md:w-[360px] lg:w-[440px] h-[400px] md:h-[400px] lg:h-[480px] p-4 relative" style={{ perspective: "1000px" }}>
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Face avant */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="glass-bg-tech glass-backdrop absolute inset-0 z-0" />
            <div className="glass-foreground-tech relative z-10 flex flex-col items-center justify-center text-center h-full">
              <div className="mb-3">
                <tech.IconComponent />
              </div>
              <p className="font-semibold text-2xl text-gray-900">{tech.name}</p>
              
              {/* Texte d'instruction - Mobile seulement, positionné en bas */}
              <p className="text-gray-600 text-sm md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
                Tap to Flip
              </p>
            </div>
          </motion.div>

          {/* Face arrière */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "perspective(500px) rotateX(180deg)",
              backfaceVisibility: "hidden"
            }}
          >
            <div className="glass-bg-tech glass-backdrop absolute inset-0 z-0" />
            <div className="glass-foreground-tech relative z-10 flex items-center justify-center text-center p-6">
              <p className="text-gray-custom text-lg leading-relaxed">{tech.description}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

// Section Stack
export default function Stack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <div id="stack" ref={sectionRef} className="relative bg-white overflow-hidden">
      
      {/* Container pour l'effet de scroll */}
      <div className="relative min-h-[200vh] py-20">
        

        {/* Contenu qui défile par-dessus */}
        <div className="relative z-10">
          
          <div className="max-w-[1400px] mx-auto px-6">
            
            {/* Titre */}
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl font-medium text-gray-900 mb-6">
                My stack
              </h2>
            </div>

            {/* Grille unique des technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-2 max-w-7xl mx-auto justify-items-center">
              {technologies.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
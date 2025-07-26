'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Composants d'icônes avec vraies icônes SVG
const ReactIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/react.svg" alt="React" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(95%) saturate(1094%) hue-rotate(162deg) brightness(98%) contrast(94%)' }} />
  </div>
);

const NextIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/nextjs.svg" alt="Next.js" width={80} height={80} className="object-contain" />
  </div>
);

const FigmaIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/figma.svg" alt="Figma" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(92%) saturate(4593%) hue-rotate(344deg) brightness(98%) contrast(95%)' }} />
  </div>
);

const JavaScriptIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/javascript.jpg" alt="JavaScript" width={80} height={80} className="object-contain" />
  </div>
);

const TypeScriptIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/typescript.svg" alt="TypeScript" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(199deg) brightness(104%) contrast(97%)' }} />
  </div>
);

const HTMLIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/html.svg" alt="HTML5" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(36%) sepia(94%) saturate(6385%) hue-rotate(6deg) brightness(95%) contrast(88%)' }} />
  </div>
);

const CSSIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/css.svg" alt="CSS3" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(22%) sepia(77%) saturate(1497%) hue-rotate(240deg) brightness(97%) contrast(83%)' }} />
  </div>
);

const SASSIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/sass.svg" alt="SASS" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(52%) sepia(17%) saturate(2878%) hue-rotate(284deg) brightness(104%) contrast(97%)' }} />
  </div>
);

const TailwindIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/tailwindcss.svg" alt="Tailwind CSS" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(88%) saturate(1552%) hue-rotate(158deg) brightness(91%) contrast(85%)' }} />
  </div>
);

const NotionIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/notion.svg" alt="Notion" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)' }} />
  </div>
);


const ChatGPTIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/chatgpt.svg" alt="ChatGPT" width={80} height={80} className="object-contain" style={{ transform: 'scale(1.5)' }} />
  </div>
);

const NodeIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/nodejs.svg" alt="Node.js" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(89%) saturate(1553%) hue-rotate(58deg) brightness(102%) contrast(102%)' }} />
  </div>
);

const ClaudeIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/claude.svg" alt="Claude" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(57%) sepia(51%) saturate(1097%) hue-rotate(324deg) brightness(97%) contrast(89%)' }} />
  </div>
);

const GitHubIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/github.svg" alt="GitHub" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(8%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(94%) contrast(96%)' }} />
  </div>
);

const GitIcon = () => (
  <div className="w-20 h-20 flex items-center justify-center">
    <Image src="/assets/icons/git.svg" alt="Git" width={80} height={80} className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(36%) sepia(94%) saturate(6385%) hue-rotate(6deg) brightness(95%) contrast(88%)' }} />
  </div>
);

// Technologies avec descriptions et vraies icônes
const technologies = [
  { 
    name: 'React', 
    IconComponent: ReactIcon,
    description: 'React revolutionizes my web development approach. It provides a component-based architecture that makes building complex UIs intuitive and maintainable.'
  },
  { 
    name: 'Figma', 
    IconComponent: FigmaIcon,
    description: 'Figma transforms my design workflow. It offers a collaborative platform where I can create stunning interfaces and prototypes with precision.'
  },
  { 
    name: 'Next.js', 
    IconComponent: NextIcon,
    description: 'Next.js elevates my React applications. It provides server-side rendering, routing, and optimization features out of the box.'
  },
  { 
    name: 'JavaScript', 
    IconComponent: JavaScriptIcon,
    description: 'JavaScript powers the dynamic functionality of my web applications. It enables interactive user experiences and seamless client-server communication.'
  },
  { 
    name: 'TypeScript', 
    IconComponent: TypeScriptIcon,
    description: 'TypeScript enhances my JavaScript development. It provides type safety and better tooling for more robust and maintainable code.'
  },
  { 
    name: 'HTML', 
    IconComponent: HTMLIcon,
    description: 'HTML forms the backbone of all my web projects. It provides the semantic structure that makes content accessible and SEO-friendly.'
  },
  { 
    name: 'CSS', 
    IconComponent: CSSIcon,
    description: 'CSS brings my designs to life with beautiful styling and animations. It enables responsive layouts and stunning visual experiences.'
  },
  { 
    name: 'SASS', 
    IconComponent: SASSIcon,
    description: 'SASS enhances my CSS workflow with variables, mixins, and nested rules. It makes styling more maintainable and powerful.'
  },
  { 
    name: 'Tailwind', 
    IconComponent: TailwindIcon,
    description: 'Tailwind accelerates my styling process. It offers utility-first CSS that allows rapid prototyping and consistent design systems.'
  },
  { 
    name: 'Notion', 
    IconComponent: NotionIcon,
    description: 'Notion organizes my entire workflow. It serves as my second brain for project planning, documentation, and knowledge management.'
  },
  { 
    name: 'Node.js', 
    IconComponent: NodeIcon,
    description: 'Node.js powers my backend development. It enables JavaScript on the server side and provides a robust runtime for building scalable applications.'
  },
  { 
    name: 'ChatGPT', 
    IconComponent: ChatGPTIcon,
    description: 'ChatGPT accelerates my development process. It helps with code generation, debugging, and provides instant solutions to complex programming challenges.'
  },
  { 
    name: 'Claude', 
    IconComponent: ClaudeIcon,
    description: 'Claude assists in my development workflow with intelligent code analysis and suggestions. It helps optimize my code and explore new programming approaches.'
  },
  { 
    name: 'GitHub', 
    IconComponent: GitHubIcon,
    description: 'GitHub serves as my code repository and collaboration platform. It enables version control, project management, and seamless teamwork on development projects.'
  },
  { 
    name: 'Git', 
    IconComponent: GitIcon,
    description: 'Git is my essential version control system. It tracks changes, manages branches, and ensures code integrity throughout the development process.'
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
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: (index % 3) * 0.1 + Math.floor(index / 3) * 0.2,
        ease: "easeOut"
      }}
      style={{ willChange: 'transform' }}
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
        className="w-[373px] h-[394px] p-6 mx-auto relative"
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
              borderRadius: '24px',
              backgroundColor: 'white',
              backdropFilter: 'blur(5px)',
              border: '25px solid rgba(102, 112, 255, 0.04)',
              opacity: '1',
              backfaceVisibility: 'hidden'
            }}
          >
            <div className="mb-3">
              <tech.IconComponent />
            </div>
            <p className="font-semibold text-2xl text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              {tech.name}
            </p>
          </motion.div>

          {/* Face arrière */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center p-8"
            style={{ 
              borderRadius: '48px',
              backdropFilter: 'blur(5px)',
              border: 'none',
              boxShadow: 'none',
              opacity: '1',
              backfaceVisibility: 'hidden',
              transform: 'perspective(500px) rotateX(180deg)'
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
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            My Stack
          </h2>
        </div>

        {/* Container avec objet 3D fixe */}
        <div className="relative min-h-[800px]">
          {/* Objet 3D fixe au centre */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <Image 
              src="/assets/3d/cube-green.webp" 
              alt="3D Object" 
              width={800} 
              height={600} 
              className="opacity-80"
            />
          </div>
          
          {/* Container principal avec grille de technologies qui scrollent */}
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
            {technologies.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
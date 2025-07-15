'use client';

import { useState } from 'react';
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiMongodb, SiExpress, SiMysql, SiFigma, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { IconType } from 'react-icons';

type Skill = {
  name: string;
  icon: IconType;
};

const skillsData: Record<'Front-End' | 'Back-End' | 'Outils', Skill[]> = {
  'Front-End': [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Sass', icon: FaSass },
    { name: 'Vite', icon: SiVite },
  ],
  'Back-End': [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
  ],
  'Outils': [
    { name: 'Git', icon: FaGitAlt },
    { name: 'VS Code', icon: VscVscode },
    { name: 'Figma', icon: SiFigma },
    { name: 'Postman', icon: SiPostman },
  ],
};

export default function Skills() {
  const [category, setCategory] = useState<'Front-End' | 'Back-End' | 'Outils'>('Front-End');
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-[#1a1f27] to-[#11151c] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-handwriting text-center mb-16"
        >
        <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">
            Mes compétences
        </span>
        {/* Soulignement fin multicolore */}
        <div className="mt-2 w-48 h-1 mx-auto bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-500 rounded-full" />
        </motion.h2>

        {/* Onglets */}
        <div className="flex justify-center space-x-4 mb-10">
          {(['Front-End', 'Back-End', 'Outils'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full border-2 ${
                category === cat
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'border-yellow-400 text-yellow-400 hover:bg-yellow-100 hover:text-black transition'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {skillsData[category].map(({ name, icon: Icon }) => (
            <div
              key={name}
              onClick={() => setVisibleTooltip(visibleTooltip === name ? null : name)}
              onMouseEnter={() => setVisibleTooltip(name)}
              onMouseLeave={() => setVisibleTooltip(null)}
              className="relative bg-[#1f2937] p-6 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
            >
              <Icon className="text-4xl text-yellow-400 mb-2" />
              <span className="text-white">{name}</span>

              {visibleTooltip === name && (
                <div className="absolute -top-10 bg-black text-white text-sm px-3 py-1 rounded shadow-lg z-10 whitespace-nowrap">
                  {name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
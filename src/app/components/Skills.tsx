'use client';

import { useState } from 'react';
import { color, motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVite, SiMongodb, SiExpress, SiMysql, SiFigma, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { IconType } from 'react-icons';

type Skill = {
  name: string;
  icon: IconType;
  description?: string;
  color?: string;
};

const skillsData: Record<'Front-End' | 'Back-End' | 'Outils', Skill[]> = {
  'Front-End': [
    { name: 'React', icon: FaReact, description: 'Librairie JS pour créer des interfaces interactives', color: 'text-[#61DAFB]' },
    { name: 'Next.js', icon: SiNextdotjs, description: 'Framework React pour les sites performants et SEO-friendly' },
    { name: 'TypeScript', icon: SiTypescript, description: 'JavaScript avec des super pouvoirs typés' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Framework CSS utilitaire pour un design rapide et responsive' },
    { name: 'Sass', icon: FaSass, description: 'Préprocesseur CSS pour écrire des styles plus propres' },
    { name: 'Vite', icon: SiVite, description: 'Bundler ultrarapide pour le développement front moderne' },
  ],
  'Back-End': [
    { name: 'Node.js', icon: FaNodeJs, description: 'Environnement d\'exécution JavaScript côté serveur' },
    { name: 'Express', icon: SiExpress, description: 'Framework minimaliste pour Node.js' },
    { name: 'MongoDB', icon: SiMongodb, description: 'Base de données NoSQL orientée documents' },
    { name: 'MySQL', icon: SiMysql, description: 'Système de gestion de base de données relationnelle' },
  ],
  'Outils': [
    { name: 'Git', icon: FaGitAlt, description: 'Système de contrôle de version distribué' },
    { name: 'VS Code', icon: VscVscode, description: 'Éditeur de code source léger et puissant' },
    { name: 'Figma', icon: SiFigma, description: 'Outil de conception d\'interfaces collaboratif' },
    { name: 'Postman', icon: SiPostman, description: 'Outil de test d\'API' },
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
        <div className="flex justify-center gap-4 mb-12">
          {(['Front-End', 'Back-End', 'Outils'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full border-2 ${
                category === cat
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'border-yellow-400 text-yellow-400 hover:bg-yellow-100 hover:text-black transition'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille des skills */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {skillsData[category].map(({ name, icon }) => {
            const IconComponent = icon;

            return (
              <div
                key={name}
                onMouseEnter={() => setVisibleTooltip(name)}
                onMouseLeave={() => setVisibleTooltip(null)}
                className="relative bg-white text-[#1f2937] p-6 rounded-xl shadow-lg w-full max-w-[220px] flex flex-col items-center hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Scotch rose en bas */}
                <div className="absolute -top-3 right-6 w-20 h-5 bg-pink-300/70 rotate-[-5deg] z-10" />
                {/* Scotch jaune en haut */}
                <div className="absolute -bottom-3 left-4 w-24 h-6 bg-yellow-300/70 rotate-[4deg] z-10" />

                <IconComponent className={`text-4xl mb-2 ${color}`} />
                <span className="font-semibold">{name}</span>

                {visibleTooltip === name && (
                  <div className="absolute -top-10 bg-black text-white text-sm px-3 py-1 rounded shadow-lg z-20 whitespace-nowrap">
                    {skillsData[category].find(skill => skill.name === name)?.description || name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
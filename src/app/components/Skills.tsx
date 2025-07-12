'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const skillsData = {
    frontend: {
        title: 'Front-end',
        color: 'from-pink-400 to-purple-400',
        skills: [
            { name: 'React', level: 90, icon: '⚛️', color: '#61dafb' },
            { name: 'Next.js', level: 85, icon: '🔺', color: '#000000' },
            { name: 'TypeScript', level: 80, icon: '📘', color: '#3178c6' },
            { name: 'Tailwind CSS', level: 95, icon: '🎨', color: '#06b6d4' },
            { name: 'Framer Motion', level: 75, icon: '🌊', color: '#0055ff' },
            { name: 'GSAP', level: 70, icon: '⚡', color: '#88ce02' }
        ]
    },
    backend: {
        title: 'Back-end',
        color: 'from-blue-400 to-cyan-400',
        skills: [
            { name: 'Node.js', level: 80, icon: '🟢', color: '#68cc00' },
            { name: 'Express', level: 75, icon: '🚂', color: '#000000' },
            { name: 'MongoDB', level: 70, icon: '🍃', color: '#4db33d' },
            { name: 'MySQL', level: 65, icon: '🗄️', color: '#f29111' }
        ]
    },
    outils: {
        title: 'Mes Outils Favoris',
        color: 'from-green-400 to-emerald-400',
        skills: [
            { name: 'Git', level: 85, icon: '🌿', color: '#f1502f' },
            { name: 'GitHub', level: 90, icon: '🐙', color: '#171515' },
            { name: 'Figma', level: 80, icon: '🎭', color: '#f24e1e' },
            { name: 'Vercel', level: 85, icon: '▲', color: '#000000' }
        ]
    }
};

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<string>('frontend');
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const categories = Object.keys(skillsData) as (keyof typeof skillsData)[];

    return (
        <section id="skills" className="section-scrap paper-texture relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Titre principal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="relative inline-block">
                        <h2 className="text-6xl md:text-8xl font-handwriting text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mb-4">
                            Mes Compétences
                        </h2>
                        
                        {/* Notebook style lines */}
                        <div className="absolute -bottom-4 left-0 right-0 space-y-1">
                            <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded"></div>
                            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded"></div>
                        </div>
                    </div>
                    
                    <p className="text-xl font-handwriting text-gray-600 max-w-3xl mx-auto mt-6">
                        Mes armes secrètes pour créer des expériences digitales inoubliables !
                    </p>
                </motion.div>

                {/* Onglets de catégories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <div className="paper-card p-2 rounded-full flex space-x-2">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-handwriting text-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                                    activeCategory === category
                                        ? 'text-white'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className={`absolute inset-0 bg-gradient-to-r ${skillsData[category].color} rounded-full`}
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">
                                    {skillsData[category].title}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Grille de compétences */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillsData[activeCategory].skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="polaroid cursor-pointer group"
                            whileHover={{ 
                                scale: 1.05,
                                rotate: 0,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                        >
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 h-40 flex flex-col justify-between relative overflow-hidden">
                                {/* Icône et nom */}
                                <div className="flex items-center space-x-3 mb-4">
                                    <motion.div
                                        className="text-3xl"
                                        animate={hoveredSkill === skill.name ? {
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 360]
                                        } : {}}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <h3 className="font-bold text-gray-800 text-lg font-body">
                                        {skill.name}
                                    </h3>
                                </div>

                                {/* Barre de progression circulaire */}
                                <div className="relative flex justify-center">
                                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                                        {/* Cercle de fond */}
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="30"
                                            fill="none"
                                            stroke="#e5e7eb"
                                            strokeWidth="6"
                                        />
                                        {/* Cercle de progression */}
                                        <motion.circle
                                            cx="40"
                                            cy="40"
                                            r="30"
                                            fill="none"
                                            stroke={skill.color}
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                            initial={{ strokeDasharray: "0 188.5" }}
                                            animate={{ 
                                                strokeDasharray: `${(skill.level / 100) * 188.5} 188.5`
                                            }}
                                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                        />
                                    </svg>
                                    {/* Pourcentage au centre */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.span
                                            className="font-bold text-gray-700 text-sm"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                        >
                                            {skill.level}%
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Sticker avec niveau */}
                                <div className="absolute -top-2 -right-2">
                                    <motion.div
                                        className="sticker text-xs animate-pulse-soft"
                                        style={{ 
                                            backgroundColor: skill.color,
                                            color: 'white'
                                        }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Avancé' : 'En cours'}
                                    </motion.div>
                                </div>

                                {/* Effet de brillance */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                                    animate={hoveredSkill === skill.name ? {
                                        x: [-100, 200]
                                    } : {}}
                                    transition={{ duration: 0.8 }}
                                />
                            </div>

                            {/* Légende polaroid */}
                            <p className="font-handwriting text-center text-gray-600 mt-2 text-sm">
                                {skill.level >= 80 ? '🔥 Maîtrisé !' : skill.level >= 60 ? '📈 En progression' : '🌱 En apprentissage'}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Section statistiques amusantes */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                </motion.div>
            </div>
        </section>
    );
}
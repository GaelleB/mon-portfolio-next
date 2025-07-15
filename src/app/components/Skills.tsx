'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type Skill = { name: string; level: string; icon: string; color: string };
type CategoryKey = 'frontend' | 'backend' | 'outils';
type SkillsData = {
    [key in CategoryKey]: {
        title: string;
        color: string;
        skills: Skill[];
    }
};

const skillsData: SkillsData = {
    frontend: {
        title: 'Front-end',
        color: 'from-pink-400 to-purple-400',
        skills: [
            { name: 'React', level: 'Expert', icon: '⚛️', color: '#61dafb' },
            { name: 'Next.js', level: 'Avancé', icon: '🔺', color: '#000000' },
            { name: 'TypeScript', level: 'Avancé', icon: '📘', color: '#3178c6' },
            { name: 'Tailwind CSS', level: 'Expert', icon: '🎨', color: '#06b6d4' },
            { name: 'Framer Motion', level: 'Intermédiaire', icon: '🌊', color: '#0055ff' },
            { name: 'GSAP', level: 'Intermédiaire', icon: '⚡', color: '#88ce02' }
        ]
    },
    backend: {
        title: 'Back-end',
        color: 'from-blue-400 to-cyan-400',
        skills: [
            { name: 'Node.js', level: 'Avancé', icon: '🟢', color: '#68cc00' },
            { name: 'Express', level: 'Avancé', icon: '🚂', color: '#000000' },
            { name: 'MongoDB', level: 'Intermédiaire', icon: '🍃', color: '#4db33d' },
            { name: 'MySQL', level: 'Intermédiaire', icon: '🗄️', color: '#f29111' }
        ]
    },
    outils: {
        title: 'Outils',
        color: 'from-yellow-400 to-orange-400',
        skills: [
            { name: 'Vercel', level: 'Avancé', icon: '▲', color: '#000000' }
        ]
    }
};

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('frontend');
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const categories = Object.keys(skillsData) as CategoryKey[];

    const getLevelColor = (level: string) => {
        switch(level) {
            case 'Expert': return 'bg-green-500';
            case 'Avancé': return 'bg-blue-500';
            case 'Intermédiaire': return 'bg-yellow-500';
            default: return 'bg-gray-500';
        }
    };

    const getLevelWidth = (level: string) => {
        switch(level) {
            case 'Expert': return 'w-full';
            case 'Avancé': return 'w-4/5';
            case 'Intermédiaire': return 'w-3/5';
            default: return 'w-2/5';
        }
    };

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
                        Mes armes secrètes pour créer des expériences digitales inoubliables
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
                        {categories.map((category) => (
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
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 h-48 flex flex-col justify-between relative overflow-hidden">
                                {/* Header avec icône et nom */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <motion.div
                                            className="text-2xl p-2 rounded-full"
                                            style={{ backgroundColor: `${skill.color}20` }}
                                            animate={hoveredSkill === skill.name ? {
                                                rotate: [0, 360],
                                                scale: [1, 1.1, 1]
                                            } : {}}
                                            transition={{ duration: 0.8 }}
                                        >
                                            {skill.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-lg font-body">
                                                {skill.name}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Barre de progression moderne */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Niveau</span>
                                        <span className={`text-sm font-semibold px-2 py-1 rounded-full text-white ${getLevelColor(skill.level)}`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <motion.div
                                            className={`h-2 rounded-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: getLevelWidth(skill.level) === 'w-full' ? '100%' : 
                                                     getLevelWidth(skill.level) === 'w-4/5' ? '80%' : 
                                                     getLevelWidth(skill.level) === 'w-3/5' ? '60%' : '40%' }}
                                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>

                                {/* Description du niveau */}
                                <div className="mt-4">
                                    <p className="text-xs text-gray-500 font-body">
                                        {skill.level === 'Expert' ? 'Maîtrise complète et expérience approfondie' :
                                         skill.level === 'Avancé' ? 'Solide expérience et bonnes pratiques' :
                                         skill.level === 'Intermédiaire' ? 'Bases solides et en progression' :
                                         'Apprentissage en cours'}
                                    </p>
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
                                {skill.level === 'Expert' ? 'Expertise confirmée' : 
                                 skill.level === 'Avancé' ? 'Niveau avancé' : 
                                 skill.level === 'Intermédiaire' ? 'En progression' : 
                                 'En apprentissage'}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Section sur l'apprentissage continu */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="paper-card p-8 rounded-3xl relative">
                        <h3 className="text-4xl font-handwriting text-center text-gray-800 mb-6">
                            Toujours en apprentissage
                        </h3>
                        
                        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto font-body">
                            Le monde du développement évolue constamment, et j&apos;aime rester à jour avec les dernières technologies et tendances.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="text-center">
                                <h4 className="font-bold text-gray-800 mb-3 font-body">Actuellement j&apos;explore</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['Three.js', 'React Native', 'GraphQL', 'Docker'].map((tech, index) => (
                                        <motion.span
                                            key={tech}
                                            className="sticker text-xs bg-purple-100 text-purple-800"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ 
                                                rotate: 0,
                                                scale: 1.1,
                                                transition: { type: "spring", stiffness: 400 }
                                            }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center">
                                <h4 className="font-bold text-gray-800 mb-3 font-body">Prochainement</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {['Vue 3', 'Nuxt.js', 'Prisma', 'Supabase'].map((tech, index) => (
                                        <motion.span
                                            key={tech}
                                            className="sticker text-xs bg-blue-100 text-blue-800"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ 
                                                rotate: 0,
                                                scale: 1.1,
                                                transition: { type: "spring", stiffness: 400 }
                                            }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
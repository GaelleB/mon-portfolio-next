'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    
    const passions = [
        { icon: '🏙️', text: 'NYC Architecture', desc: 'Inspirée par les lignes urbaines' },
        { icon: '🎵', text: 'Musique', desc: 'La bande-son de Manhattan' },
        { icon: '📚', text: 'Literature', desc: 'De Fitzgerald à Patti Smith' },
        { icon: '🎬', text: 'Cinema', desc: 'Woody Allen à Marvel' }
    ];

    const journey = [
        { year: '2020', title: 'Le Début', desc: 'Reconversion professionnelle' },
        { year: '2021', title: 'Formation Intensive', desc: 'OpenClassrooms & projets fictifs' },
        { year: '2024', title: 'Freelance', desc: 'Premiers clients, vrais défis' },
        { year: '2025', title: 'NYC Dreams', desc: 'Objectif : coder depuis Manhattan' }
    ];

    return (
        <section id="about" className="py-20 px-4 relative">
            {/* Background subtil */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900 -z-10" />
            
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold uppercase mb-4">
                        <span className="text-white">About</span>{' '}
                        <span className="text-yellow-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Texte principal */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="manhattan-card p-8">
                            <h3 className="text-2xl font-display text-yellow-400 mb-6">
                                FROM PARIS TO NYC (IN MY MIND)
                            </h3>
                            
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Développeuse front-end passionnée, je construis des expériences web 
                                    qui allient <span className="text-yellow-400 font-semibold">performance</span> et{' '}
                                    <span className="text-yellow-400 font-semibold">esthétique</span>.
                                </p>
                                
                                <p>
                                    Mon parcours atypique, démarré dans le paramédical, m&apos;a donné une 
                                    approche unique : je code avec la précision d&apos;un chirurgien et la 
                                    créativité d&apos;un artiste de street art new-yorkais.
                                </p>
                                
                                <p>
                                    Fascinée par l&apos;énergie de NYC, je puise mon inspiration dans cette 
                                    ville qui ne dort jamais. Chaque projet est une opportunité de créer 
                                    quelque chose d&apos;aussi impressionnant que la skyline de Manhattan.
                                </p>
                            </div>

                            {/* Citation */}
                            <motion.blockquote
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8 p-4 border-l-4 border-yellow-400 bg-gray-800/50"
                            >
                                <p className="text-lg italic text-gray-300">
                                    &quot;In New York, concrete jungle where dreams are made of&quot;
                                </p>
                                <cite className="text-sm text-gray-500 mt-2 block">- Alicia Keys</cite>
                            </motion.blockquote>
                        </div>
                    </motion.div>

                    {/* Timeline & Passions */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Passions Grid */}
                        <div>
                            <h4 className="text-xl font-display text-white mb-4 uppercase tracking-wider">
                                Ce qui m&apos;inspire
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {passions.map((passion, index) => (
                                    <motion.div
                                        key={passion.text}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        onMouseEnter={() => setHoveredSkill(passion.text)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        className="relative group"
                                    >
                                        <div className="manhattan-card p-4 text-center cursor-pointer transition-all duration-300 hover:bg-gray-800/50">
                                            <div className="text-3xl mb-2">{passion.icon}</div>
                                            <p className="text-sm font-medium text-gray-300">{passion.text}</p>
                                            
                                            {/* Tooltip */}
                                            {hoveredSkill === passion.text && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-xs text-gray-300 rounded whitespace-nowrap z-10"
                                                >
                                                    {passion.desc}
                                                </motion.div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Journey Timeline */}
                        <div>
                            <h4 className="text-xl font-display text-white mb-6 uppercase tracking-wider">
                                Mon Parcours
                            </h4>
                            <div className="relative">
                                {/* Ligne de métro */}
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700" />
                                
                                {journey.map((step, index) => (
                                    <motion.div
                                        key={step.year}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative flex items-start mb-8 last:mb-0"
                                    >
                                        {/* Station de métro */}
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 bg-gray-900 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                                                <span className="text-xs font-bold text-yellow-400">{step.year}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Contenu */}
                                        <div className="ml-6 flex-1">
                                            <h5 className="text-lg font-semibold text-white mb-1">{step.title}</h5>
                                            <p className="text-sm text-gray-400">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
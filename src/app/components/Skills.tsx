'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const skills = {
        frontend: {
            title: 'Frontend Development',
            icon: '🏗️',
            color: 'from-yellow-400 to-amber-500',
            items: [
                { name: 'React', level: 90, desc: 'Hooks, Context, Next.js' },
                { name: 'TypeScript', level: 85, desc: 'Types, Interfaces, Generics' },
                { name: 'JavaScript ES6+', level: 95, desc: 'Async, Promises, Modules' },
                { name: 'HTML5 & CSS3', level: 95, desc: 'Semantic, Flexbox, Grid' },
                { name: 'Tailwind CSS', level: 90, desc: 'Utility-first styling' },
                { name: 'Framer Motion', level: 80, desc: 'Animations fluides' }
            ]
        },
        backend: {
            title: 'Backend & Tools',
            icon: '🔧',
            color: 'from-blue-400 to-blue-600',
            items: [
                { name: 'Node.js', level: 75, desc: 'Express, API REST' },
                { name: 'MongoDB', level: 70, desc: 'NoSQL, Mongoose' },
                { name: 'Git & GitHub', level: 85, desc: 'Version control' },
                { name: 'MySQL', level: 65, desc: 'SQL, Relations' },
                { name: 'Firebase', level: 70, desc: 'Auth, Firestore' },
                { name: 'API Integration', level: 80, desc: 'REST, GraphQL basics' }
            ]
        },
        design: {
            title: 'Design & UX',
            icon: '🎨',
            color: 'from-purple-400 to-pink-500',
            items: [
                { name: 'Responsive Design', level: 95, desc: 'Mobile-first approach' },
                { name: 'UI/UX Principles', level: 85, desc: 'User-centered design' },
                { name: 'Accessibility', level: 75, desc: 'WCAG, ARIA' },
            ]
        }
    };

    return (
        <section id="skills" className="py-20 px-4 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Motif de grille urbaine en arrière-plan */}
            <div className="absolute inset-0 window-grid opacity-5" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold uppercase mb-4">
                        <span className="text-white">Technical</span>{' '}
                        <span className="text-yellow-400">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8" />
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Building the digital skyline, one line of code at a time
                    </p>
                </motion.div>

                {/* Categories Tabs - Style métro NYC */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {Object.entries(skills).map(([key, category]) => (
                        <motion.button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`px-6 py-3 font-medium uppercase tracking-wider transition-all duration-300 ${
                                activeCategory === key
                                    ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/20'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.title}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {skills[activeCategory as keyof typeof skills].items.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="manhattan-card p-6 group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                                        {skill.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{skill.desc}</p>
                                </div>
                                <span className="text-2xl font-mono-custom text-yellow-400">
                                    {skill.level}%
                                </span>
                            </div>
                            
                            {/* Progress Bar - Style subway map */}
                            <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${
                                        skills[activeCategory as keyof typeof skills].color
                                    }`}
                                />
                                {/* Effet de lumière qui parcourt la barre */}
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '200%' }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 3,
                                        ease: "linear",
                                        delay: index * 0.2
                                    }}
                                    className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
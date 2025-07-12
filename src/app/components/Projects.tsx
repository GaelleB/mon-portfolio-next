'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
    {
        id: 1,
        title: 'Piiquante',
        description: 'API sécurisée pour une app gastronomique',
        tech: ['Node.js', 'MongoDB', 'Express'],
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&q=80',
        emoji: '🌶️'
    },
    {
        id: 2,
        title: 'Kasa',
        description: 'Application de location immobilière',
        tech: ['React', 'Sass', 'Router'],
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&q=80',
        emoji: '🏠'
    },
    {
        id: 3,
        title: 'Groupomania',
        description: 'Réseau social d’entreprise',
        tech: ['Vue.js', 'MySQL', 'Node.js'],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&q=80',
        emoji: '💬'
    }
    ]

    export default function Projects() {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <section id="projects" className="py-24 px-6 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold text-center mb-16"
                >
                Mes Projets
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHovered(project.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative bg-white text-gray-900 rounded-lg overflow-hidden shadow-xl"
                    >
                    <div className="overflow-hidden h-48">
                        <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: hovered === project.id ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{project.title} {project.emoji}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                            key={tech}
                            className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    )
}
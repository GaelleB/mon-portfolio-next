'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const projects = [
    {
        id: 1,
        title: 'Les Mailles de Sylvie',
        year: '2025',
        category: 'Site Vitrine',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=720&h=720&fit=crop',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        github: 'https://github.com/GaelleB/les-mailles-de-sylvie',
        demo: 'https://les-mailles-de-sylvie.vercel.app'
    },
    {
        id: 2,
        title: 'Portfolio Next.js',
        year: '2025',
        category: 'Portfolio',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=720&h=720&fit=crop',
        tech: ['Next.js', 'TypeScript', 'Framer Motion'],
        github: 'https://github.com/GaelleB/mon-portfolio-next',
        demo: 'https://mon-portfolio-next-mu.vercel.app'
    },
    {
        id: 3,
        title: 'GB WebAssist Linktree',
        year: '2025',
        category: 'Business Tool',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=720&h=720&fit=crop',
        tech: ['React', 'TypeScript', 'Vite'],
        github: 'https://github.com/GaelleB/linktree-gbwebassist',
        demo: 'https://linktree-gbwebassist.vercel.app'
    },
    {
        id: 4,
        title: 'Groupomania',
        year: '2022',
        category: 'Social Network',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=720&h=720&fit=crop',
        tech: ['Vue.js', 'Node.js', 'MySQL'],
        github: 'https://github.com/GaelleB/Groupomania',
        demo: null
    },
    {
        id: 5,
        title: 'Piiquante API',
        year: '2022',
        category: 'Backend API',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=720&h=720&fit=crop',
        tech: ['Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/GaelleB/Piiquante',
        demo: null
    },
    {
        id: 6,
        title: 'Portfolio Original',
        year: '2022',
        category: 'Portfolio',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&h=720&fit=crop',
        tech: ['HTML5', 'SASS', 'JavaScript'],
        github: 'https://github.com/GaelleB/Portfolio',
        demo: 'https://gaelleb.github.io/Portfolio/'
    }
]

export default function Projects() {
    const [showAll, setShowAll] = useState(false)
    const visibleProjects = showAll ? projects : projects.slice(0, 6)

    return (
        <section 
            id="projects" 
            className="min-h-screen bg-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Projects
                    </h2>
                </motion.div>

                {/* Projects Grid - 2 columns layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            {/* Card container with backdrop blur */}
                            <div 
                                className="relative rounded-[48px] p-6 backdrop-blur-[5px]"
                                style={{ 
                                    backgroundColor: 'rgba(102, 112, 255, 0.05)',
                                    width: '608px',
                                    maxWidth: '100%'
                                }}
                            >
                                {/* Image container */}
                                <div className="relative overflow-hidden rounded-[24px]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={564}
                                        height={382}
                                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        style={{ 
                                            width: '100%',
                                            height: '424px'
                                        }}
                                    />
                                    
                                    {/* Hover overlay with View Project button */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        {project.demo ? (
                                            <a 
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                                            >
                                                <span className="text-gray-900 font-medium">View Project</span>
                                                <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        ) : (
                                            <a 
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white rounded-full px-6 py-3 flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
                                            >
                                                <span className="text-gray-900 font-medium">View Code</span>
                                                <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Project Info - aligned with image, not card border */}
                            <div className="mt-6 ml-6">
                                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                                    {project.category}
                                </p>
                                <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                                    {project.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More/Less Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-12 py-4 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
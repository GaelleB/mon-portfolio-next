'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

// Hook pour suivre la position de la souris avec contraintes
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const tooltipWidth = 140; // Largeur approximative du tooltip
        
        // Contraindre la position X pour éviter le débordement
        let x = e.clientX - rect.left;
        const minX = tooltipWidth / 2;
        const maxX = rect.width - tooltipWidth / 2;
        x = Math.max(minX, Math.min(maxX, x));
        
        setMousePosition({
            x: x,
            y: e.clientY - rect.top
        });
    };
    
    return { mousePosition, handleMouseMove };
};

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

// Composant pour une card de projet
const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const [showCTA, setShowCTA] = useState(false);
    const { mousePosition, handleMouseMove } = useMousePosition();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card-no-cursor relative group"
            onMouseEnter={() => setShowCTA(true)}
            onMouseLeave={() => setShowCTA(false)}
            onMouseMove={handleMouseMove}
        >
            {/* CTA Button qui suit la souris */}
            {showCTA && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute z-50 pointer-events-none"
                    style={{
                        left: mousePosition.x,
                        top: mousePosition.y - 30,
                        transform: 'translateX(-50%)'
                    }}
                >
                    <a 
                        href={project.demo || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white rounded-full pl-6 pr-0 h-12 shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto group whitespace-nowrap"
                    >
                        <span className="text-gray-900 font-medium text-base mr-3">
                            View Project
                        </span>
                        <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-360deg]">
                            <span className="text-white text-base">→</span>
                        </div>
                    </a>
                </motion.div>
            )}

            {/* Card container with backdrop blur */}
            <div 
                className="relative glass-backdrop project-card-container overflow-hidden"
            >
                {/* Image container */}
                <div className="relative overflow-hidden rounded-[24px] group cursor-pointer">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={564}
                        height={382}
                        className="w-full object-cover transition-all duration-500 group-hover:scale-105"
                        style={{ 
                            width: '100%',
                            height: '424px'
                        }}
                    />
                    {/* Overlay blanc au hover */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
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
    );
};

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
                    <h2 className="section-title text-4xl font-medium text-gray-900 mb-6">
                        Projects
                    </h2>
                </motion.div>

                {/* Projects Grid - 2 columns layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
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
                        className="cta-button-glass font-public-sans"
                    >
                        <div className="glass-bg-button glass-backdrop" />
                        <div className="glass-foreground-button">
                            <span className="cta-button-text-glass">{showAll ? 'View Less' : 'View More'}</span>
                            <span className="cta-button-icon-glass">{showAll ? '↑' : '↓'}</span>
                        </div>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
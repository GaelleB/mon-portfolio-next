'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Piiquante',
            category: 'backend',
            description: 'API sécurisée pour une application d\'avis gastronomiques',
            longDesc: 'Développement d\'une API REST complète avec authentification, gestion des utilisateurs et upload d\'images. Mise en place de mesures de sécurité avancées.',
            tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Multer'],
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
            github: 'https://github.com/gaelleb/piiquante',
            demo: null,
            highlights: ['API REST', 'Authentication', 'Security']
        },
        {
            id: 2,
            title: 'Kasa',
            category: 'frontend',
            description: 'Application de location immobilière moderne',
            longDesc: 'Création d\'une application React moderne pour une plateforme de location. Interface responsive avec animations fluides et navigation optimisée.',
            tech: ['React', 'React Router', 'Sass', 'Responsive Design'],
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
            github: 'https://github.com/gaelleb/kasa',
            demo: 'https://kasa-demo.vercel.app',
            highlights: ['SPA', 'Animations', 'Responsive']
        },
        {
            id: 3,
            title: 'Groupomania',
            category: 'fullstack',
            description: 'Réseau social d\'entreprise complet',
            longDesc: 'Développement fullstack d\'un réseau social d\'entreprise avec système de posts, commentaires, likes et modération. Architecture complète front et back.',
            tech: ['Vue.js', 'Node.js', 'MySQL', 'Sequelize', 'Vuex'],
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            github: 'https://github.com/gaelleb/groupomania',
            demo: null,
            highlights: ['Full Stack', 'Social Features', 'Real-time']
        },
        {
            id: 4,
            title: 'Portfolio V1',
            category: 'frontend',
            description: 'Mon premier portfolio développeur',
            longDesc: 'Premier portfolio personnel avec animations CSS et design responsive. Une étape importante dans mon parcours de développeuse.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Animations'],
            image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80',
            github: 'https://github.com/gaelleb/portfolio-v1',
            demo: 'https://gaelleb.github.io/portfolio',
            highlights: ['Design', 'Animations', 'Responsive']
        }
    ];

    const categories = [
        { value: 'all', label: 'All Projects' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'fullstack', label: 'Full Stack' }
    ];

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20 px-4 relative">
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
                        <span className="text-white">My</span>{' '}
                        <span className="text-yellow-400">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8" />
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Building digital experiences, one project at a time
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-4 mb-12 flex-wrap"
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat.value}
                            onClick={() => setFilter(cat.value)}
                            className={`px-6 py-2 font-medium uppercase tracking-wider transition-all duration-300 ${
                                filter === cat.value
                                    ? 'bg-yellow-400 text-gray-900'
                                    : 'bg-transparent text-gray-400 border border-gray-700 hover:border-yellow-400 hover:text-yellow-400'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {cat.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedProject(project.id)}
                            >
                                <div className="manhattan-card overflow-hidden h-full">
                                    {/* Image avec overlay */}
                                    <div className="relative h-64 overflow-hidden">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />
                                        
                                        {/* Tape effect minimaliste */}
                                        <div className="tape-minimal" />
                                        
                                        {/* Category badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold uppercase">
                                            {project.category}
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 mb-4">
                                            {project.description}
                                        </p>
                                        
                                        {/* Tech stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.slice(0, 3).map((tech) => (
                                                <span key={tech} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 font-mono-custom">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400">
                                                    +{project.tech.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        
                                        {/* Highlights */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-2">
                                                {project.highlights.map((highlight) => (
                                                    <span key={highlight} className="text-xs text-yellow-400">
                                                        #{highlight}
                                                    </span>
                                                ))}
                                            </div>
                                            <motion.span
                                                className="text-yellow-400 group-hover:translate-x-2 transition-transform"
                                            >
                                                →
                                            </motion.span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                                onClick={() => setSelectedProject(null)}
                            />
                            
                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-4xl z-50"
                            >
                                {(() => {
                                    const project = projects.find(p => p.id === selectedProject);
                                    if (!project) return null;
                                    
                                    return (
                                        <div className="bg-gray-900 border border-gray-700 shadow-2xl overflow-hidden">
                                            {/* Close button */}
                                            <button
                                                onClick={() => setSelectedProject(null)}
                                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            
                                            {/* Modal Header with Image */}
                                            <div className="relative h-80 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                                    <h3 className="text-4xl font-display font-bold text-white mb-2">
                                                        {project.title}
                                                    </h3>
                                                    <div className="flex gap-4">
                                                        {project.github && (
                                                            <a
                                                                href={project.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                                </svg>
                                                                GitHub
                                                            </a>
                                                        )}
                                                        {project.demo && (
                                                            <a
                                                                href={project.demo}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                </svg>
                                                                Live Demo
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Modal Content */}
                                            <div className="p-8">
                                                <p className="text-lg text-gray-300 mb-6">
                                                    {project.longDesc}
                                                </p>
                                                
                                                {/* Technologies */}
                                                <div className="mb-6">
                                                    <h4 className="text-xl font-display text-yellow-400 mb-3 uppercase">
                                                        Technologies Used
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map((tech) => (
                                                            <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 font-mono-custom text-sm">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                
                                                {/* Key Features */}
                                                <div>
                                                    <h4 className="text-xl font-display text-yellow-400 mb-3 uppercase">
                                                        Key Features
                                                    </h4>
                                                    <div className="flex flex-wrap gap-3">
                                                        {project.highlights.map((highlight) => (
                                                            <span key={highlight} className="inline-flex items-center gap-1 text-gray-400">
                                                                <span className="text-yellow-400">▸</span>
                                                                {highlight}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
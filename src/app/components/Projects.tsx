'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const projects = [
    {
        id: 1,
        title: 'Piiquante',
        description: 'API sécurisée pour une app gastronomique avec gestion des utilisateurs et des sauces piquantes',
        longDescription: 'Développement d\'une API complète avec authentification JWT, upload d\'images optimisées et système de notation. Un projet qui m\'a fait découvrir les joies du backend.',
        tech: ['Node.js', 'MongoDB', 'Express', 'JWT', 'Multer'],
        image: '/assets/piiquante.jpg',
        color: 'from-red-400 to-orange-400',
        category: 'Backend',
        status: 'Terminé',
        year: '2023',
        highlights: ['Sécurité OWASP', 'Upload optimisé', 'API RESTful'],
        github: 'https://github.com/GaelleB/piiquante',
        demo: null
    },
    {
        id: 2,
        title: 'Kasa',
        description: 'Application de location immobilière moderne et responsive',
        longDescription: 'Refonte complète d\'une plateforme de location avec React Router, animations fluides et design responsive. Mon premier grand projet React.',
        tech: ['React', 'Sass', 'Router', 'CSS3', 'Responsive'],
        image: '/assets/kanap.jpg',
        color: 'from-blue-400 to-cyan-400',
        category: 'Frontend',
        status: 'Terminé',
        year: '2023',
        highlights: ['React Hooks', 'Animations CSS', 'Mobile First'],
        github: 'https://github.com/GaelleB/kasa',
        demo: null
    },
    {
        id: 3,
        title: 'Groupomania',
        description: 'Réseau social d\'entreprise avec fonctionnalités complètes',
        longDescription: 'Création d\'un réseau social d\'entreprise avec posts, commentaires, likes et modération. Un projet fullstack qui combine frontend moderne et backend robuste.',
        tech: ['Vue.js', 'MySQL', 'Node.js', 'Socket.io', 'JWT'],
        image: '/assets/groupomania.jpg',
        color: 'from-green-400 to-emerald-400',
        category: 'Fullstack',
        status: 'Terminé',
        year: '2024',
        highlights: ['Temps réel', 'Modération', 'UX/UI avancée'],
        github: 'https://github.com/GaelleB/groupomania',
        demo: null
    },
    {
        id: 4,
        title: 'Code in the City',
        description: 'Blog personnel sur le développement web et la tech',
        longDescription: 'Mon blog personnel où je partage mes expériences, tutoriels et réflexions sur le développement web. Créé avec Next.js et optimisé pour le SEO.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'Vercel'],
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&q=80',
        color: 'from-purple-400 to-pink-400',
        category: 'Frontend',
        status: 'En cours',
        year: '2024',
        highlights: ['Blog optimisé SEO', 'Content Management', 'Performance'],
        github: 'https://github.com/GaelleB/code-in-the-city',
        demo: 'https://code-in-the-city.vercel.app'
    },
    {
        id: 5,
        title: 'Electrik\'s Rock',
        description: 'Site vitrine pour une artiste tatoueure',
        longDescription: 'Création d\'un site vitrine élégant pour présenter le travail d\'une artiste tatoueure. Design sur mesure avec galerie interactive et formulaire de contact.',
        tech: ['React', 'Styled Components', 'Framer Motion', 'Netlify'],
        image: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=400&h=300&q=80',
        color: 'from-gray-800 to-gray-600',
        category: 'Frontend',
        status: 'Terminé',
        year: '2024',
        highlights: ['Design artistique', 'Galerie interactive', 'Responsive'],
        github: 'https://github.com/GaelleB/elektriks-rock',
        demo: 'https://elektriks-rock.netlify.app'
    },
    {
        id: 6,
        title: 'Portfolio V2',
        description: 'Mon portfolio actuel avec style scrapbooking et animations',
        longDescription: 'Conception et développement de ce portfolio avec un style scrapbooking unique, des animations Framer Motion fluides et une expérience utilisateur immersive.',
        tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind', 'Vercel'],
        image: '/assets/gaelle.jpg',
        color: 'from-yellow-400 to-orange-400',
        category: 'Frontend',
        status: 'En cours',
        year: '2024',
        highlights: ['Animations avancées', 'Design unique', 'Performance optimisée'],
        github: 'https://github.com/GaelleB/portfolio-v2',
        demo: null
    }
]

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    const [filter, setFilter] = useState<string>('Tous')

    const categories = ['Tous', 'Frontend', 'Backend', 'Fullstack']
    const filteredProjects = filter === 'Tous' 
        ? projects 
        : projects.filter(project => project.category === filter)

    const handleProjectClick = (projectId: number) => {
        setSelectedProject(selectedProject === projectId ? null : projectId)
    }

    return (
        <section id="projects" className="section-scrap bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Titre */}
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-handwriting text-center mb-16"
                >
                <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">
                    Mes créations
                </span>
                {/* Soulignement fin multicolore */}
                <div className="mt-2 w-48 h-1 mx-auto bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-500 rounded-full" />
                </motion.h2>

                {/* Filtres créatifs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <div className="paper-card p-3 rounded-full flex flex-wrap gap-2 justify-center">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full font-handwriting text-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                                    filter === category
                                        ? 'text-white'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                                whileHover={{ scale: 1.05, rotate: filter === category ? 0 : 2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    transform: filter !== category ? `rotate(${index % 2 === 0 ? -1 : 1}deg)` : 'rotate(0deg)'
                                }}
                            >
                                {filter === category && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Grille de projets en style scrapbook */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            onClick={() => handleProjectClick(project.id)}
                            className="cursor-pointer"
                        >
                            {/* Polaroid container */}
                            <div className="polaroid group relative">
                                {/* Image container */}
                                <div className="relative overflow-hidden rounded-lg bg-white">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                    
                                    {/* Overlay avec info */}
                                    <motion.div
                                        className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ 
                                            opacity: hoveredProject === project.id ? 1 : 0 
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-center text-white p-4">
                                            <h4 className="text-xl font-bold mb-2 font-body">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm mb-4 font-handwriting">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1 justify-center">
                                                {project.tech.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="sticker text-xs"
                                                        style={{ fontSize: '0.7rem', padding: '2px 6px' }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Status badge */}
                                    <div className="absolute top-3 right-3">
                                        <div className={`sticker text-xs ${
                                            project.status === 'Terminé' 
                                                ? 'bg-green-400 text-white' 
                                                : 'bg-yellow-400 text-gray-800'
                                        }`}>
                                            {project.status}
                                        </div>
                                    </div>

                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3">
                                        <div className={`sticker text-xs bg-gradient-to-r ${project.color} text-white`}>
                                            {project.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Légende polaroid */}
                                <div className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-800 font-body">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm text-gray-500 font-handwriting">
                                            {project.year}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-600 text-sm mb-3 font-body leading-relaxed">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tech.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                className="sticker text-xs"
                                                style={{
                                                    transform: `rotate(${techIndex % 2 === 0 ? -1 : 1}deg)`
                                                }}
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

                                    {/* Liens */}
                                    <div className="flex gap-2 mb-3">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-scrap text-xs flex-1 text-center"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Code
                                        </motion.a>
                                        {project.demo && (
                                            <motion.a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-scrap text-xs flex-1 text-center"
                                                style={{ background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)' }}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <span className="text-white">Demo</span>
                                            </motion.a>
                                        )}
                                    </div>

                                    {/* Bouton voir plus */}
                                    <motion.button
                                        className="btn-scrap text-sm w-full"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {selectedProject === project.id ? 'Masquer les détails' : 'Voir les détails'}
                                    </motion.button>
                                </div>

                                {/* Washi tape sur les polaroids */}
                                <div 
                                    className={`absolute top-8 -right-4 w-20 h-6 bg-gradient-to-r ${project.color} opacity-80 transform rotate-12 shadow-lg`}
                                ></div>
                            </div>

                            {/* Détails étendus */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ 
                                    height: selectedProject === project.id ? 'auto' : 0,
                                    opacity: selectedProject === project.id ? 1 : 0
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden mt-4"
                            >
                                <div className="paper-card p-6 rounded-2xl relative">
                                    <h4 className="text-xl font-handwriting text-gray-800 mb-3">
                                        L&apos;histoire de ce projet
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed mb-4 font-body">
                                        {project.longDescription}
                                    </p>
                                    
                                    <div className="space-y-3">
                                        <h5 className="font-bold text-gray-800 font-body">Points forts :</h5>
                                        <ul className="space-y-1">
                                            {project.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action créatif */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="paper-card p-8 rounded-3xl max-w-2xl mx-auto relative">
                        <h3 className="text-3xl font-handwriting text-gray-800 mb-4">
                            Vous avez un projet en tête ?
                        </h3>
                        <p className="text-gray-600 mb-6 font-body leading-relaxed">
                            Chaque grand projet commence par une petite idée. 
                            Partageons la vôtre et créons ensemble quelque chose d&apos;extraordinaire.
                        </p>
                        
                        <motion.a
                            href="#contact"
                            className="btn-scrap inline-block"
                            whileHover={{ 
                                scale: 1.05,
                                rotate: [0, -2, 2, 0],
                                transition: { duration: 0.5 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Créons ensemble
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Type pour un projet
type Project = {
    id: number;
    title: string;
    year: string;
    category: string;
    description?: string;
    image: string;
    tech: string[];
    github: string;
    demo: string | null;
    featured?: boolean;
};

// Liste des projets
const projects: Project[] = [
    {
        id: 4,
        title: 'Code in the City',
        year: 'Juin 2025',
        category: 'Blog personnel',
        description: 'Mon blog personnel sur New York : séries, musique, lieux de tournage et articles de développement web racontés comme des histoires. Une vitrine de mon univers éditorial.',
        image: '/assets/code-in-the-city.png',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
        github: 'https://github.com/GaelleB/code-in-the-city',
        demo: 'https://code-in-the-city.vercel.app/',
        featured: true
    },
    {
        id: 1,
        title: 'Netflix Clone',
        year: 'Octobre 2025',
        category: 'Clone site existant',
        image: '/assets/netflix.webp',
        tech: ['Next.js', 'JavaScript', 'CSS'],
        github: 'https://github.com/GaelleB/netflix-clone',
        demo: 'https://netflix-clone-tan-xi.vercel.app/'
    },
    {
        id: 2,
        title: 'Debug or Treat',
        year: 'Octobre 2025',
        category: 'Site interactif',
        image: '/assets/happy-halloween.jpg',
        tech: ['Astro'],
        github: 'https://github.com/GaelleB/halloween-site',
        demo: 'https://halloween-site.vercel.app/'
    },
    {
        id: 3,
        title: 'Groupomania',
        year: 'Octobre 2025',
        category: 'Portfolio',
        image: '/assets/groupomania.png',
        tech: ['Next.js', 'TypeScript'],
        github: 'https://github.com/GaelleB/groupomania-next',
        demo: 'https://groupomania-next.vercel.app/'
    }
];

// Composant pour le projet featured (Code in the City)
const FeaturedProject = ({ project }: { project: Project }) => {
    return (
        <motion.div
            className="mb-20 md:mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Image - 7 colonnes */}
                <div className="lg:col-span-7">
                    <motion.div
                        className="relative rounded-2xl overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                        {/* Overlay orange au hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                            style={{ backgroundColor: '#f97316' }}
                        />
                    </motion.div>
                </div>

                {/* Texte - 5 colonnes */}
                <div className="lg:col-span-5">
                    {/* Badge catégorie */}
                    <motion.span
                        className="inline-block font-mono text-xs md:text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full"
                        style={{
                            backgroundColor: 'rgba(249, 115, 22, 0.1)',
                            color: '#f97316',
                            letterSpacing: '0.1em'
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {project.category} · {project.year}
                    </motion.span>

                    {/* Titre */}
                    <motion.h3
                        className="font-serif font-bold text-3xl md:text-4xl mb-4"
                        style={{
                            color: '#253439',
                            lineHeight: '1.2'
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {project.title}
                    </motion.h3>

                    {/* Description */}
                    {project.description && (
                        <motion.p
                            className="font-sans text-base md:text-lg mb-6"
                            style={{
                                color: '#333333',
                                opacity: 0.9,
                                lineHeight: '1.6'
                            }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {project.description}
                        </motion.p>
                    )}

                    {/* Tech tags */}
                    <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="font-sans text-sm px-3 py-1 rounded-full"
                                style={{
                                    backgroundColor: 'rgba(249, 115, 22, 0.1)',
                                    color: '#f97316'
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {project.demo && (
                            <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 font-sans font-medium text-sm rounded-lg transition-all duration-300"
                                style={{
                                    backgroundColor: '#f97316',
                                    color: '#faf7f2'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: '#e86510',
                                    boxShadow: '0 8px 24px rgba(249, 115, 22, 0.25)'
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Voir le site
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </motion.a>
                        )}
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center font-sans text-sm group"
                            style={{ color: '#253439' }}
                            whileHover={{ x: 5 }}
                        >
                            <span className="border-b-2 border-transparent group-hover:border-current transition-all duration-300">
                                Voir sur GitHub
                            </span>
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>

            </div>
        </motion.div>
    );
};

// Composant pour une carte projet standard
const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <motion.div
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Image */}
            <motion.a
                href={project.demo || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden mb-4"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay orange au hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{ backgroundColor: '#f97316' }}
                    />
                </div>
            </motion.a>

            {/* Badge catégorie */}
            <span
                className="inline-block font-mono text-xs uppercase tracking-wider mb-2"
                style={{
                    color: '#f97316',
                    letterSpacing: '0.1em'
                }}
            >
                {project.category}
            </span>

            {/* Titre */}
            <h3
                className="font-serif font-bold text-xl md:text-2xl mb-3"
                style={{
                    color: '#253439',
                    lineHeight: '1.3'
                }}
            >
                {project.title}
            </h3>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                        key={index}
                        className="font-sans text-xs px-2 py-1 rounded-full"
                        style={{
                            backgroundColor: 'rgba(249, 115, 22, 0.1)',
                            color: '#f97316'
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Liens */}
            <div className="flex gap-4 text-sm">
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center group/link"
                        style={{ color: '#f97316' }}
                    >
                        <span className="group-hover/link:underline">Voir le site</span>
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center group/link"
                    style={{ color: '#253439' }}
                >
                    <span className="group-hover/link:underline">GitHub</span>
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    const [isMobile, setIsMobile] = useState(false);

    // Scroll parallax pour le watermark
    const { scrollY } = useScroll();
    const watermarkY = useTransform(scrollY, [0, 1000], [0, -100]);

    // Détection mobile
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const featuredProject = projects.find(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section
            id="projects"
            className="relative min-h-screen py-20 px-6 md:px-12 lg:px-16 overflow-hidden"
            style={{ backgroundColor: '#f5f0e8' }}
        >
            {/* Numérotation éditoriale "04" en arrière-plan */}
            <motion.div
                className="hidden lg:block absolute top-32 right-12 pointer-events-none select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <span
                    className="font-mono font-bold text-[180px] leading-none"
                    style={{
                        color: '#f97316',
                        opacity: 0.05
                    }}
                >
                    04
                </span>
            </motion.div>

            {/* Watermark typographique "WORK" en arrière-plan */}
            <motion.div
                className="absolute pointer-events-none select-none"
                style={{
                    top: isMobile ? '8%' : '12%',
                    left: isMobile ? '5%' : '8%',
                    y: watermarkY
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                <span
                    className="font-serif font-bold text-[100px] md:text-[160px] lg:text-[220px] leading-none"
                    style={{
                        color: '#f97316',
                        opacity: isMobile ? 0.02 : 0.03,
                        WebkitTextStroke: '1px rgba(249, 115, 22, 0.08)'
                    }}
                >
                    WORK
                </span>
            </motion.div>

            {/* Contenu principal */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">

                {/* HEADER ÉDITORIAL */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Surtitre */}
                    <span
                        className="inline-block font-mono text-xs md:text-sm uppercase tracking-wider mb-4"
                        style={{
                            color: '#f97316',
                            letterSpacing: '0.1em'
                        }}
                    >
                        Projets · Ce que je crée
                    </span>

                    {/* Titre principal */}
                    <h2
                        className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{
                            color: '#253439',
                            lineHeight: '1.2'
                        }}
                    >
                        Des sites qui racontent
                    </h2>

                    {/* Chapô */}
                    <p
                        className="font-sans text-base md:text-lg max-w-3xl mx-auto"
                        style={{
                            color: '#333333',
                            opacity: 0.9,
                            lineHeight: '1.6'
                        }}
                    >
                        Découvre une sélection de mes créations web, du blog personnel aux clones interactifs.
                    </p>
                </motion.div>

                {/* FEATURED PROJECT */}
                {featuredProject && <FeaturedProject project={featuredProject} />}

                {/* AUTRES PROJETS - Grid 3 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {otherProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

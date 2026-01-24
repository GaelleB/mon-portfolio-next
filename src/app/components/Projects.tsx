'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects, type Project } from '@/data/projects';
import { useIsMobile } from '@/hooks/useIsMobile';

// Composant pour le projet featured
const FeaturedProject = ({ project, reverse = false }: { project: Project, reverse?: boolean }) => {
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
                <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                    <motion.div
                        className="block relative rounded-2xl overflow-hidden group"
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
                <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
                    {/* Badge catégorie */}
                    <motion.span
                        className="inline-block font-mono text-xs md:text-sm uppercase tracking-wider mb-4 px-4 py-2 rounded-full"
                        style={{
                            backgroundColor: 'rgba(154, 52, 18, 0.1)',
                            color: '#9a3412',
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
                    <h3
                        className="font-serif font-bold text-3xl md:text-4xl mb-4"
                        style={{
                            color: '#1a2528',
                            lineHeight: '1.2'
                        }}
                    >
                        {project.title}
                    </h3>

                    {/* Description */}
                    {project.description && (
                        <p
                            className="font-sans text-base md:text-lg mb-6"
                            style={{
                                color: '#333333',
                                lineHeight: '1.6'
                            }}
                        >
                            {project.description}
                        </p>
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
                                    backgroundColor: 'rgba(154, 52, 18, 0.1)',
                                    color: '#9a3412'
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
                                    backgroundColor: '#c2410c',
                                    color: '#ffffff'
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 8px 24px rgba(154, 52, 18, 0.25)'
                                }}
                                whileTap={{ scale: 0.98 }}
                                aria-label={`Voir le site ${project.title} (ouvre dans un nouvel onglet)`}
                            >
                                Voir le site
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </motion.a>
                        )}
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
            <motion.div
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
            </motion.div>

            {/* Badge catégorie */}
            <span
                className="inline-block font-mono text-xs uppercase tracking-wider mb-2"
                style={{
                    color: '#9a3412',
                    letterSpacing: '0.1em'
                }}
            >
                {project.category}
            </span>

            {/* Titre */}
            <h3
                className="font-serif font-bold text-xl md:text-2xl mb-3"
                style={{
                    color: '#1a2528',
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
                            backgroundColor: 'rgba(154, 52, 18, 0.1)',
                            color: '#9a3412'
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
                        style={{ color: '#9a3412' }}
                        aria-label={`Voir le site ${project.title} (ouvre dans un nouvel onglet)`}
                    >
                        <span className="group-hover/link:underline">Voir le site</span>
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default function Projects() {
    const isMobile = useIsMobile();

    // Scroll parallax pour le watermark
    const { scrollY } = useScroll();
    const watermarkY = useTransform(scrollY, [0, 1000], [0, -100]);

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
                aria-hidden="true"
            >
                <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="140" fontFamily="monospace" fontWeight="bold" fontSize="180" fill="#f97316" fillOpacity="0.05">04</text>
                </svg>
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
                aria-hidden="true"
            >
                <svg
                    className="w-[250px] h-[100px] md:w-[400px] md:h-[160px] lg:w-[550px] lg:h-[220px]"
                    viewBox="0 0 550 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <text
                        x="0"
                        y="180"
                        fontFamily="serif"
                        fontWeight="bold"
                        fontSize="220"
                        fill="#f97316"
                        fillOpacity={isMobile ? 0.02 : 0.03}
                        stroke="rgba(249, 115, 22, 0.08)"
                        strokeWidth="1"
                    >
                        WORK
                    </text>
                </svg>
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
                            color: '#c2410c',
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
                        Des projets qui mêlent code et storytelling, de New York aux drapeaux américains.
                    </p>
                </motion.div>

                {/* FEATURED PROJECTS - Alternés */}
                {projects.filter(p => p.featured).map((project, index) => (
                    <FeaturedProject
                        key={project.id}
                        project={project}
                        reverse={index % 2 !== 0}
                    />
                ))}

                {/* AUTRES PROJETS - Grid adaptative */}
                {otherProjects.length > 0 && (
                    <div className={`grid gap-8 md:gap-10 ${
                        otherProjects.length === 1
                            ? 'grid-cols-1 max-w-2xl mx-auto'
                            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}>
                        {otherProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}

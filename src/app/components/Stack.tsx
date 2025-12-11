'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Organisation des technologies par catégories
const techCategories = [
    {
        title: "Développement",
        icon: "laptop",
        techs: [
            { name: 'React', icon: '/assets/icons/react.svg', color: '#61DAFB' },
            { name: 'TypeScript', icon: '/assets/icons/typescript.svg', color: '#3178C6' },
            { name: 'HTML', icon: '/assets/icons/html.svg', color: '#E34F26' },
            { name: 'CSS', icon: '/assets/icons/css.svg', color: '#1572B6' },
            { name: 'Tailwind', icon: '/assets/icons/tailwindcss.svg', color: '#06B6D4' }
        ]
    },
    {
        title: "Design & Outils",
        icon: "tools",
        techs: [
            { name: 'Figma', icon: '/assets/icons/figma.svg', color: '#F24E1E' },
            { name: 'Git', icon: '/assets/icons/git.svg', color: '#F05032' },
            { name: 'GitHub', icon: '/assets/icons/github.svg', color: '#181717' }
        ]
    },
    {
        title: "IA & Productivité",
        icon: "ai",
        techs: [
            { name: 'ChatGPT', icon: '/assets/icons/chatgpt.svg', color: '#10A37F' },
            { name: 'Claude', icon: '/assets/icons/claude.svg', color: '#D97757' }
        ]
    }
];

// Composant pour afficher une techno
const TechItem = ({ tech, index }: { tech: typeof techCategories[0]['techs'][0], index: number }) => {
    return (
        <motion.div
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
        >
            {/* Icône */}
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Nom */}
            <span
                className="font-sans text-base md:text-lg font-medium transition-colors duration-300"
                style={{
                    color: '#253439'
                }}
            >
                {tech.name}
            </span>

            {/* Point décoratif avec couleur de la techno */}
            <div
                className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
            />
        </motion.div>
    );
};

// Composant pour une catégorie
const CategorySection = ({ category, index }: { category: typeof techCategories[0], index: number }) => {
    return (
        <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            {/* Titre de catégorie */}
            <h3
                className="font-mono text-sm md:text-base uppercase tracking-wider mb-6"
                style={{
                    color: '#f97316',
                    letterSpacing: '0.1em'
                }}
            >
                {category.title}
            </h3>

            {/* Liste des technos en grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {category.techs.map((tech, techIndex) => (
                    <TechItem key={tech.name} tech={tech} index={techIndex} />
                ))}
            </div>
        </motion.div>
    );
};

export default function Stack() {
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

    return (
        <section
            id="stack"
            className="relative min-h-screen py-20 px-6 md:px-12 lg:px-16 overflow-hidden"
            style={{ backgroundColor: '#f5f0e8' }}
        >
            {/* Numérotation éditoriale "03" en arrière-plan */}
            <motion.div
                className="hidden lg:block absolute top-32 left-12 pointer-events-none select-none"
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
                    03
                </span>
            </motion.div>

            {/* Watermark typographique "STACK" en arrière-plan */}
            <motion.div
                className="absolute pointer-events-none select-none"
                style={{
                    top: isMobile ? '8%' : '12%',
                    right: isMobile ? '5%' : '8%',
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
                    STACK
                </span>
            </motion.div>

            {/* Contenu principal */}
            <div className="relative z-10 w-full max-w-6xl mx-auto">

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
                        Stack · Ma boîte à outils
                    </span>

                    {/* Titre principal */}
                    <h2
                        className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{
                            color: '#253439',
                            lineHeight: '1.2'
                        }}
                    >
                        Les technologies qui donnent vie aux histoires
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
                        React, TypeScript, Figma... Voici les outils que j&apos;utilise pour créer des expériences web sur mesure.
                    </p>
                </motion.div>

                {/* LES 3 CATÉGORIES */}
                <div className="max-w-5xl mx-auto">
                    {techCategories.map((category, index) => (
                        <CategorySection key={category.title} category={category} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

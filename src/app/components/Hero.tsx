'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Hero() {
    const isMobile = useIsMobile();

    // Value propositions statiques
    const valueProps = [
        "Pour webzines et maisons d'édition",
        "Développeuse React/Next spécialisée en contenu éditorial",
        "Quand le code rencontre la mise en page",
        "Des interfaces narratives pour la culture"
    ];

    // Scroll parallax pour les éléments décoratifs
    const { scrollY } = useScroll();
    const watermarkY = useTransform(scrollY, [0, 500], [0, -150]);
    const lineArtY = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 md:px-12 lg:px-16"
            style={{ backgroundColor: '#f5f0e8' }}
        >

            {/* Numérotation éditoriale "01" en arrière-plan - Desktop only */}
            <motion.div
                className="hidden lg:block absolute top-32 left-12 pointer-events-none select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                aria-hidden="true"
            >
                <span
                    className="font-mono font-bold text-[180px] leading-none"
                    style={{
                        color: '#f97316',
                        opacity: 0.05
                    }}
                >
                    01
                </span>
            </motion.div>

            {/* Typographie watermark "STORY" en arrière-plan */}
            <motion.div
                className="absolute pointer-events-none select-none"
                style={{
                    top: isMobile ? '10%' : '15%',
                    right: isMobile ? '5%' : '10%',
                    y: watermarkY
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                aria-hidden="true"
            >
                <span
                    className="font-serif font-bold text-[120px] md:text-[200px] lg:text-[280px] leading-none"
                    style={{
                        color: '#f97316',
                        opacity: isMobile ? 0.02 : 0.03,
                        WebkitTextStroke: '1px rgba(249, 115, 22, 0.08)'
                    }}
                >
                    STORY
                </span>
            </motion.div>

            {/* Illustration line art "Livre ouvert" - Desktop only */}
            <motion.div
                className="hidden lg:block absolute bottom-24 left-20 pointer-events-none"
                style={{ y: lineArtY }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                aria-hidden="true"
            >
                <motion.svg
                    width="120"
                    height="100"
                    viewBox="0 0 120 100"
                    fill="none"
                    animate={{
                        y: [0, -8, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Livre ouvert simplifié en line art */}
                    <path
                        d="M10 20 L10 80 L55 70 L55 15 L10 20Z"
                        stroke="#f97316"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                    />
                    <path
                        d="M110 20 L110 80 L65 70 L65 15 L110 20Z"
                        stroke="#f97316"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                    />
                    <path
                        d="M55 15 L60 12 L65 15"
                        stroke="#f97316"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.6"
                    />
                    {/* Lignes de texte stylisées */}
                    <line x1="20" y1="35" x2="45" y2="33" stroke="#f97316" strokeWidth="1" opacity="0.3" />
                    <line x1="20" y1="45" x2="45" y2="43" stroke="#f97316" strokeWidth="1" opacity="0.3" />
                    <line x1="20" y1="55" x2="45" y2="53" stroke="#f97316" strokeWidth="1" opacity="0.3" />
                    <line x1="75" y1="35" x2="100" y2="33" stroke="#f97316" strokeWidth="1" opacity="0.3" />
                    <line x1="75" y1="45" x2="100" y2="43" stroke="#f97316" strokeWidth="1" opacity="0.3" />
                    <line x1="75" y1="55" x2="100" y2="53" stroke="#f97316" strokeWidth="1" opacity="0.3" />
                </motion.svg>
            </motion.div>

            {/* Contenu principal */}
            <div className="relative z-10 w-full max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Zone gauche : Textes et CTA - 7 colonnes sur desktop */}
                    <div className="lg:col-span-7 text-center lg:text-left">

                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span
                                className="inline-block font-mono text-xs md:text-sm uppercase tracking-wider mb-6"
                                style={{
                                    color: '#f97316',
                                    letterSpacing: '0.1em'
                                }}
                            >
                                Développeuse Front-End · Projets Éditoriaux
                            </span>
                        </motion.div>

                        {/* Titre principal */}
                        <motion.h1
                            className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl mb-8"
                            style={{
                                color: '#253439',
                                lineHeight: '1.1'
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Je te crée un site qui raconte ton histoire
                        </motion.h1>

                        {/* Value propositions statiques */}
                        <motion.ul
                            className="mb-8 space-y-3 text-center lg:text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {valueProps.map((text, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start justify-center lg:justify-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                >
                                    <span
                                        className="inline-block w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                                        style={{ backgroundColor: '#f97316' }}
                                        aria-hidden="true"
                                    />
                                    <span
                                        className="font-sans text-base md:text-lg"
                                        style={{
                                            color: '#333333',
                                            lineHeight: '1.7'
                                        }}
                                    >
                                        {text}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Description courte */}
                        <motion.p
                            className="font-sans text-base md:text-lg mb-10 max-w-2xl mx-auto lg:mx-0"
                            style={{
                                color: '#333333',
                                opacity: 0.9,
                                lineHeight: '1.7'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            De la néonat&apos; au code, je développe des sites éditoriaux : blogs culturels, webzines narratifs, projets de contenu.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {/* CTA Principal */}
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 font-sans font-medium text-base rounded-lg transition-all duration-300 w-full sm:w-auto"
                                style={{
                                    backgroundColor: '#f97316',
                                    color: '#faf7f2'
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    backgroundColor: '#e86510',
                                    boxShadow: '0 8px 24px rgba(249, 115, 22, 0.25)'
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Parlons de ton projet
                            </motion.a>

                            {/* CTA Secondaire */}
                            <motion.a
                                href="#projects"
                                className="inline-flex items-center justify-center font-sans text-base group"
                                style={{ color: '#253439' }}
                                whileHover={{ x: 5 }}
                            >
                                <span className="border-b-2 border-transparent group-hover:border-current transition-all duration-300">
                                    Voir mes projets
                                </span>
                                <span className="ml-2 group-hover:translate-y-1 inline-block transition-transform duration-300" aria-hidden="true">↓</span>
                            </motion.a>
                        </motion.div>

                    </div>

                    {/* Zone droite : Photo et social proof - 5 colonnes sur desktop */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center">

                        {/* Photo de profil */}
                        <motion.div
                            className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div
                                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                                style={{
                                    boxShadow: '0 20px 60px rgba(37, 52, 57, 0.15)'
                                }}
                            >
                                <Image
                                    src="/assets/gaelle-new.jpg"
                                    alt="Gaëlle Boucher - Développeuse Front-End spécialisée projets éditoriaux"
                                    className="w-full h-full object-cover object-[47.9%_24.1%]"
                                    width={500}
                                    height={500}
                                    priority
                                    style={{
                                        filter: 'sepia(18%) saturate(85%) contrast(102%)',
                                    }}
                                />
                            </div>

                            {/* Bordure décorative orange */}
                            <motion.div
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                    border: '3px solid #f97316',
                                    opacity: 0.2
                                }}
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.2, 0.3, 0.2]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>

                        {/* Social proof */}
                        <motion.div
                            className="flex items-center justify-center space-x-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <div className="flex -space-x-2" aria-hidden="true">
                                <div
                                    className="w-8 h-8 rounded-full border-2 shadow-md"
                                    style={{
                                        backgroundColor: '#f97316',
                                        borderColor: '#f5f0e8'
                                    }}
                                />
                                <div
                                    className="w-8 h-8 rounded-full border-2 shadow-md"
                                    style={{
                                        backgroundColor: '#253439',
                                        borderColor: '#f5f0e8'
                                    }}
                                />
                                <div
                                    className="w-8 h-8 rounded-full border-2 shadow-md"
                                    style={{
                                        backgroundColor: '#333333',
                                        borderColor: '#f5f0e8'
                                    }}
                                />
                            </div>
                            <span
                                className="text-sm md:text-base font-medium ml-3"
                                style={{
                                    color: '#333333',
                                    opacity: 0.7
                                }}
                            >
                                Projets éditoriaux en cours
                            </span>
                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    );
}
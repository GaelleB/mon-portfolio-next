'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { chapters } from '@/data/chapters';
import { useIsMobile } from '@/hooks/useIsMobile';

// Composant pour les line art SVG
const ChapterIcon = ({ icon }: { icon: string }) => {
    if (icon === "heartbeat") {
        return (
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                {/* Coeur plus précis, pointe bien marquée */}
                <path
                    d="
                    M40 60
                    C28 48, 20 42, 20 32
                    C20 24, 26 20, 33 20
                    C37 20, 40 24, 40 28
                    C40 24, 43 20, 47 20
                    C54 20, 60 24, 60 32
                    C60 42, 52 48, 40 60 Z
                    "
                    stroke="#f97316"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.85"
                />

                {/* Ligne ECG plus nerveuse */}
                <polyline
                    points="12,40 26,40 30,32 34,48 40,30 46,40 68,40"
                    stroke="#f97316"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                />

                {/* Points de départ/fin */}
                <circle cx="12" cy="40" r="1.5" fill="#f97316" opacity="0.6" />
                <circle cx="68" cy="40" r="1.5" fill="#f97316" opacity="0.6" />
            </motion.svg>
        );
    }

    if (icon === "headphones") {
        return (
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                {/* Casque audio en line art */}
                <path d="M20 30 Q20 15 40 15 Q60 15 60 30 L60 50" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.6" />
                <rect x="15" y="45" width="10" height="20" rx="2" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.6" />
                <rect x="55" y="45" width="10" height="20" rx="2" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M20 50 L20 60" stroke="#f97316" strokeWidth="2" opacity="0.6" />
                <path d="M60 50 L60 60" stroke="#f97316" strokeWidth="2" opacity="0.6" />
            </motion.svg>
        );
    }

    if (icon === "laptop") {
        return (
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                {/* Écran avec code en line art */}
                <rect x="15" y="20" width="50" height="35" rx="2" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.6" />
                <line x1="15" y1="50" x2="65" y2="50" stroke="#f97316" strokeWidth="2" opacity="0.6" />
                <line x1="30" y1="55" x2="50" y2="55" stroke="#f97316" strokeWidth="2" opacity="0.6" />
                {/* Lignes de code */}
                <line x1="20" y1="28" x2="35" y2="28" stroke="#f97316" strokeWidth="1.5" opacity="0.4" />
                <line x1="20" y1="33" x2="45" y2="33" stroke="#f97316" strokeWidth="1.5" opacity="0.4" />
                <line x1="20" y1="38" x2="40" y2="38" stroke="#f97316" strokeWidth="1.5" opacity="0.4" />
                <line x1="20" y1="43" x2="50" y2="43" stroke="#f97316" strokeWidth="1.5" opacity="0.4" />
            </motion.svg>
        );
    }

    return null;
};

export default function About() {
    const isMobile = useIsMobile();

    // Scroll parallax pour le watermark
    const { scrollY } = useScroll();
    const watermarkY = useTransform(scrollY, [0, 1000], [0, -100]);

    return (
        <section
            id="about"
            className="relative min-h-screen py-20 px-6 md:px-12 lg:px-16 overflow-hidden"
            style={{ backgroundColor: '#f5f0e8' }}
        >
            {/* Numérotation éditoriale "02" en arrière-plan */}
            <motion.div
                className="hidden lg:block absolute top-32 right-12 pointer-events-none select-none"
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
                    02
                </span>
            </motion.div>

            {/* Watermark typographique "PARCOURS" en arrière-plan */}
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
                <span
                    className="font-serif font-bold text-[100px] md:text-[160px] lg:text-[220px] leading-none"
                    style={{
                        color: '#f97316',
                        opacity: isMobile ? 0.02 : 0.03,
                        WebkitTextStroke: '1px rgba(249, 115, 22, 0.08)'
                    }}
                >
                    PARCOURS
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
                        Parcours · De la néonat&apos; au code
                    </span>

                    {/* Titre principal */}
                    <h2
                        className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{
                            color: '#253439',
                            lineHeight: '1.2'
                        }}
                    >
                        Mon histoire en 3 chapitres
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
                        De l&apos;accompagnement des tout-petits à la création d&apos;expériences numériques,
                        voici comment je suis passée du soin au code.
                    </p>
                </motion.div>

                {/* LES 3 CHAPITRES */}
                <div className="space-y-16 md:space-y-20 mb-16 md:mb-20">
                    {chapters.map((chapter, index) => (
                        <motion.div
                            key={index}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Colonne gauche : Numéro + Illustration */}
                            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                                {/* Numéro décoratif */}
                                <motion.span
                                    className="font-mono font-bold text-6xl md:text-7xl mb-6"
                                    style={{
                                        color: '#f97316',
                                        opacity: 0.15
                                    }}
                                    whileHover={{ opacity: 0.3 }}
                                    aria-hidden="true"
                                >
                                    {chapter.number}
                                </motion.span>

                                {/* Illustration line art */}
                                <div className="mb-4 lg:mb-0" aria-hidden="true">
                                    <ChapterIcon icon={chapter.icon} />
                                </div>
                            </div>

                            {/* Colonne droite : Titre + Texte */}
                            <div className="lg:col-span-8">
                                {/* Titre du chapitre */}
                                <h3
                                    className="font-serif font-bold text-2xl md:text-3xl mb-4"
                                    style={{
                                        color: '#253439',
                                        lineHeight: '1.3'
                                    }}
                                >
                                    {chapter.title}
                                </h3>

                                {/* Texte narratif */}
                                <p
                                    className="font-sans text-base md:text-lg mb-3"
                                    style={{
                                        color: '#333333',
                                        opacity: 0.9,
                                        lineHeight: '1.7'
                                    }}
                                >
                                    {chapter.text}
                                </p>

                                <p
                                    className="font-sans text-base md:text-lg"
                                    style={{
                                        color: '#333333',
                                        opacity: 0.9,
                                        lineHeight: '1.7'
                                    }}
                                >
                                    {chapter.text2}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CITATION EN EXERGUE */}
                <motion.div
                    className="text-center mb-16 md:mb-20 py-12 md:py-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-3xl mx-auto">
                        {/* Citation */}
                        <blockquote
                            className="font-serif text-2xl md:text-3xl lg:text-4xl mb-6 italic"
                            style={{
                                color: '#253439',
                                lineHeight: '1.4'
                            }}
                        >
                            &ldquo;Du soin au code, une même envie : créer des expériences qui ont du sens.&rdquo;
                        </blockquote>

                        {/* Attribution */}
                        <p
                            className="font-mono text-sm md:text-base uppercase tracking-wider"
                            style={{
                                color: '#f97316',
                                letterSpacing: '0.1em'
                            }}
                        >
                            Gaëlle
                        </p>
                    </div>
                </motion.div>

                {/* CTA FINAL */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* CTA Principal - LinkedIn/CV */}
                    <motion.a
                        href="https://www.linkedin.com/in/gaelle-boucher/"
                        target="_blank"
                        rel="noopener noreferrer"
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
                        aria-label="Voir mon profil LinkedIn (ouvre dans un nouvel onglet)"
                    >
                        <span>Voir mon LinkedIn</span>
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </motion.a>

                    {/* CTA Secondaire - Télécharger CV */}
                    <motion.a
                        href="/cv-gaelle-boucher.pdf"
                        download
                        className="inline-flex items-center justify-center font-sans text-base group"
                        style={{ color: '#253439' }}
                        whileHover={{ x: 5 }}
                        aria-label="Télécharger mon CV en PDF"
                    >
                        <span className="border-b-2 border-transparent group-hover:border-current transition-all duration-300">
                            Télécharger mon CV
                        </span>
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                        </svg>
                    </motion.a>
                </motion.div>

            </div>
        </section>
    );
}

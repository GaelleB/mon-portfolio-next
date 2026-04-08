'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { processSteps } from '@/data/process';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Process() {
    const isMobile = useIsMobile();

    // Scroll parallax pour le watermark
    const { scrollY } = useScroll();
    const watermarkY = useTransform(scrollY, [0, 1000], [0, -100]);

    return (
        <section
            id="process"
            className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden"
            style={{ backgroundColor: '#f5f0e8' }}
        >
            {/* Numérotation éditoriale "06" en arrière-plan */}
            <motion.div
                className="hidden lg:block absolute top-32 right-12 pointer-events-none select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                aria-hidden="true"
            >
                <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="140" fontFamily="monospace" fontWeight="bold" fontSize="180" fill="#f97316" fillOpacity="0.05">06</text>
                </svg>
            </motion.div>

            {/* Watermark typographique "MÉTHODE" en arrière-plan */}
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
                    className="w-[280px] h-[100px] md:w-[450px] md:h-[160px] lg:w-[700px] lg:h-[220px]"
                    viewBox="0 0 900 220"
                    fill="none"
                    overflow="visible"
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
                        MÉTHODE
                    </text>
                </svg>
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
                            color: '#c2410c',
                            letterSpacing: '0.1em'
                        }}
                    >
                        Processus · Comment je travaille
                    </span>

                    {/* Titre principal */}
                    <h2
                        className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{
                            color: '#253439',
                            lineHeight: '1.2'
                        }}
                    >
                        Une méthode claire, du premier échange à la mise en ligne
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
                        Chaque projet suit un cadre simple et transparent. Tu sais où on en est, à chaque étape.
                    </p>
                </motion.div>

                {/* GRILLE DES ÉTAPES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="flex flex-col p-8 rounded-2xl"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            {/* Numéro décoratif */}
                            <span
                                className="block font-mono text-sm uppercase tracking-wider mb-6"
                                style={{
                                    color: '#c2410c',
                                    letterSpacing: '0.1em'
                                }}
                            >
                                {step.number}
                            </span>

                            {/* Titre */}
                            <h3
                                className="font-serif font-bold text-xl md:text-2xl mb-4"
                                style={{
                                    color: '#253439',
                                    lineHeight: '1.3'
                                }}
                            >
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="font-sans text-base"
                                style={{
                                    color: '#4a4a4a',
                                    lineHeight: '1.6'
                                }}
                            >
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

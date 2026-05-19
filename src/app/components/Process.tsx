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

                {/* HEADER */}
                <motion.div
                    className="mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span
                        className="inline-block font-mono text-xs md:text-sm uppercase tracking-wider mb-4"
                        style={{ color: '#c2410c', letterSpacing: '0.1em' }}
                    >
                        Processus · Comment je travaille
                    </span>
                    <h2
                        className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{ color: '#253439', lineHeight: '1.2' }}
                    >
                        Du premier échange à la mise en ligne
                    </h2>
                    <p
                        className="font-sans text-base md:text-lg max-w-2xl"
                        style={{ color: '#4a4a4a', lineHeight: '1.6' }}
                    >
                        Pas de surprise. Tu sais où on en est à chaque moment.
                    </p>
                </motion.div>

                {/* LISTE DES ÉTAPES */}
                <div>
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="py-10 md:py-12"
                            style={{ borderTop: '1px solid rgba(26, 37, 40, 0.15)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                                <div className="md:col-span-1">
                                    <span
                                        className="font-mono text-xs uppercase tracking-wider"
                                        style={{ color: '#c2410c' }}
                                    >
                                        {step.number}
                                    </span>
                                </div>
                                <div className="md:col-span-4">
                                    <h3
                                        className="font-serif font-bold text-2xl md:text-3xl"
                                        style={{ color: '#253439', lineHeight: '1.2' }}
                                    >
                                        {step.title}
                                    </h3>
                                </div>
                                <div className="md:col-span-7">
                                    <p
                                        className="font-sans text-base md:text-lg"
                                        style={{ color: '#4a4a4a', lineHeight: '1.7' }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(26, 37, 40, 0.15)' }} />
                </div>

            </div>
        </section>
    );
}

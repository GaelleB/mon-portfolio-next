'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { services } from '@/data/services';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Services() {
    const isMobile = useIsMobile();

    // Scroll parallax pour le watermark
    const { scrollY } = useScroll();
    const watermarkY = useTransform(scrollY, [0, 1000], [0, -100]);

    return (
        <section
            id="services"
            className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden"
            style={{ backgroundColor: '#f5f0e8' }}
        >
            {/* Numérotation éditoriale "05" en arrière-plan */}
            <motion.div
                className="hidden lg:block absolute top-32 right-12 pointer-events-none select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                aria-hidden="true"
            >
                <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="140" fontFamily="monospace" fontWeight="bold" fontSize="180" fill="#f97316" fillOpacity="0.05">05</text>
                </svg>
            </motion.div>

            {/* Watermark typographique "SERVICES" en arrière-plan */}
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
                        SERVICES
                    </text>
                </svg>
            </motion.div>

            {/* Contenu principal */}
            <div className="relative z-10 w-full max-w-6xl mx-auto">

                {/* HEADER ÉDITORIAL */}
                <motion.div
                    className="mb-16 md:mb-20"
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
                        Services · Comment je travaille
                    </span>

                    {/* Titre principal */}
                    <h2
                        className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{
                            color: '#253439',
                            lineHeight: '1.2'
                        }}
                    >
                        Selon là où tu en es
                    </h2>

                    {/* Chapô */}
                    <p
                        className="font-sans text-base md:text-lg max-w-2xl"
                        style={{
                            color: '#333333',
                            opacity: 0.9,
                            lineHeight: '1.6'
                        }}
                    >
                        Pas de package standard. Un diagnostic, une refonte ciblée, ou un site complet : selon ce que ton projet demande vraiment.
                    </p>
                </motion.div>

                {/* LISTE ÉDITORIALE DE SERVICES */}
                <div className="mb-16 md:mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="group py-10 md:py-12"
                            style={{ borderTop: '1px solid rgba(26, 37, 40, 0.15)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">

                                {/* Numéro */}
                                <div className="md:col-span-1">
                                    <span
                                        className="font-mono text-xs uppercase tracking-wider"
                                        style={{ color: '#c2410c' }}
                                    >
                                        {service.number}
                                    </span>
                                </div>

                                {/* Titre + Description */}
                                <div className="md:col-span-7">
                                    <h3
                                        className="font-serif font-bold text-2xl md:text-3xl mb-4 transition-colors duration-300"
                                        style={{
                                            color: '#253439',
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className="font-sans text-base md:text-lg"
                                        style={{
                                            color: '#4a4a4a',
                                            lineHeight: '1.7'
                                        }}
                                    >
                                        {service.description}
                                    </p>
                                </div>

                                {/* Prix */}
                                <div className="md:col-span-4 md:text-right">
                                    <span
                                        className="font-serif font-bold text-xl md:text-2xl"
                                        style={{ color: '#253439' }}
                                    >
                                        {service.price}
                                    </span>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                    {/* Ligne de fermeture */}
                    <div style={{ borderTop: '1px solid rgba(26, 37, 40, 0.15)' }} />
                </div>

            </div>
        </section>
    );
}

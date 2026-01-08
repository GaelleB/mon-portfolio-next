'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { navItems } from '@/data/navigation';

export default function Footer() {
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
        <footer
            id="contact"
            className="relative min-h-screen py-20 px-6 md:px-12 lg:px-16 overflow-hidden"
            style={{ backgroundColor: '#f5f0e8' }}
        >
            {/* Numérotation éditoriale "05" en arrière-plan */}
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
                    05
                </span>
            </motion.div>

            {/* Watermark typographique "CONTACT" en arrière-plan */}
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
                    CONTACT
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
                        Contact · Parlons projet
                    </span>

                    {/* Titre principal */}
                    <h2
                        className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{
                            color: '#253439',
                            lineHeight: '1.2'
                        }}
                    >
                        Créons ensemble ton prochain site
                    </h2>

                    {/* Chapô */}
                    <p
                        className="font-sans text-base md:text-lg max-w-3xl mx-auto mb-10"
                        style={{
                            color: '#333333',
                            opacity: 0.9,
                            lineHeight: '1.6'
                        }}
                    >
                        Prêt à donner vie à ton histoire ? Réservons un appel découverte pour en discuter.
                    </p>

                    {/* CTA Principal */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Bouton Calendly */}
                        <motion.a
                            href="https://calendly.com/gaelleboucher-dev/30min?subject=Appel découverte"
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
                        >
                            Réserver un appel découverte
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </motion.a>

                        {/* Lien email */}
                        <motion.a
                            href="mailto:gaelleboucher.dev@gmail.com"
                            className="inline-flex items-center justify-center font-sans text-base group"
                            style={{ color: '#253439' }}
                            whileHover={{ x: 5 }}
                        >
                            <span className="border-b-2 border-transparent group-hover:border-current transition-all duration-300">
                                Ou écris-moi directement
                            </span>
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* 3 COLONNES - Contact, Social, Navigation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Colonne 1 - Contact */}
                    <div>
                        <h3
                            className="font-mono text-sm uppercase tracking-wider mb-4"
                            style={{
                                color: '#f97316',
                                letterSpacing: '0.1em'
                            }}
                        >
                            Contact
                        </h3>
                        <div className="space-y-3">
                            <a
                                href="mailto:gaelleboucher.dev@gmail.com"
                                className="block font-sans text-base transition-colors duration-300 hover:text-[#f97316]"
                                style={{ color: '#253439' }}
                            >
                                gaelleboucher.dev@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2 - Social */}
                    <div>
                        <h3
                            className="font-mono text-sm uppercase tracking-wider mb-4"
                            style={{
                                color: '#f97316',
                                letterSpacing: '0.1em'
                            }}
                        >
                            Social
                        </h3>
                        <div className="space-y-3">
                            <a
                                href="https://www.linkedin.com/in/gaelle-boucher/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block font-sans text-base transition-colors duration-300 hover:text-[#f97316]"
                                style={{ color: '#253439' }}
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://www.instagram.com/gaelle_boucher23/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block font-sans text-base transition-colors duration-300 hover:text-[#f97316]"
                                style={{ color: '#253439' }}
                            >
                                Instagram
                            </a>
                            <a
                                href="https://medium.com/@gahell911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block font-sans text-base transition-colors duration-300 hover:text-[#f97316]"
                                style={{ color: '#253439' }}
                            >
                                Medium
                            </a>
                            <a
                                href="https://substack.com/@gahell911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block font-sans text-base transition-colors duration-300 hover:text-[#f97316]"
                                style={{ color: '#253439' }}
                            >
                                Substack
                            </a>
                        </div>
                    </div>

                    {/* Colonne 3 - Navigation */}
                    <div>
                        <h3
                            className="font-mono text-sm uppercase tracking-wider mb-4"
                            style={{
                                color: '#f97316',
                                letterSpacing: '0.1em'
                            }}
                        >
                            Navigation
                        </h3>
                        <div className="space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block font-sans text-base transition-colors duration-300 hover:text-[#f97316]"
                                    style={{ color: '#253439' }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* FOOTER MINIMAL */}
                <motion.div
                    className="pt-8 border-t"
                    style={{ borderColor: 'rgba(249, 115, 22, 0.2)' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p
                            className="font-sans text-sm"
                            style={{ color: '#333333', opacity: 0.7 }}
                        >
                            © 2025 Gaëlle Boucher · Tous droits réservés
                        </p>
                        <p
                            className="font-sans text-sm"
                            style={{ color: '#333333', opacity: 0.7 }}
                        >
                            Fait avec ❤️
                        </p>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}

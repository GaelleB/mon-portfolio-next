'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function Footer() {
    return (
        <>
            <style jsx>{`
                .footer-text {
                    font-size: 45px;
                    line-height: 45px;
                    position: relative;
                    left: 50%;
                    transform: translateY(45%) translateX(-50%);
                }

                /* Mobile large */
                @media (min-width: 480px) {
                    .footer-text {
                        font-size: 50px;
                        line-height: 50px;
                    }
                }

                /* Tablette portrait iPad */
                @media (min-width: 768px) and (max-width: 834px) and (orientation: portrait) {
                    .footer-text {
                        font-size: 85px;
                        line-height: 85px;
                    }
                }

                /* Tablette paysage */
                @media (min-width: 768px) and (orientation: landscape) and (max-width: 1023px) {
                    .footer-text {
                        font-size: 100px;
                        line-height: 100px;
                    }
                }

                /* Desktop small (MacBook Air) */
                @media (min-width: 1024px) {
                    .footer-text {
                        font-size: 120px;
                        line-height: 120px;
                    }
                }

                /* Desktop medium */
                @media (min-width: 1280px) {
                    .footer-text {
                        font-size: 160px;
                        line-height: 160px;
                    }
                }

                /* MacBook Air 13" et écrans similaires */
                @media (min-width: 1440px) and (max-width: 1600px) {
                    .footer-text {
                        font-size: 162px;
                        line-height: 162px;
                    }
                }

                /* Large desktop */
                @media (min-width: 1600px) {
                    .footer-text {
                        font-size: 200px;
                        line-height: 200px;
                    }
                }
            `}</style>
            <footer id="contact" className="bg-gray-50 relative overflow-hidden pt-100">
            <div className="max-w-6xl mx-auto px-6 pb-42 relative z-20">
                {/* Section principale - 3 colonnes */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-16 mb-8">
                    {/* Colonne 1 - Contact Me */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-body font-bold text-black px-4">
                            Contact Me
                        </h2>
                        <div className="space-y-1">
                            <motion.a
                                href="https://calendly.com/gaelleboucher-dev/30min?subject=Appel découverte"
                                data-cursor-text="Call Me"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body py-2 px-4"
                            >
                                Book a call
                            </motion.a>
                            <motion.a
                                href="mailto:contact@gaelleb.dev"
                                data-cursor-text="Email Me"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body py-2 px-4"
                            >
                                gaelleboucher.dev@gmail.com
                            </motion.a>
                        </div>
                    </div>

                    {/* Colonne 2 - Useful Links */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-body font-bold text-black px-4">
                            Useful Links
                        </h2>
                        <div className="space-y-1">
                            <motion.a
                                href="#home"
                                data-cursor-text="Visit Home Page"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body py-2 px-4"
                            >
                                Home
                            </motion.a>
                            <motion.a
                                href="/nonexistent-page"
                                data-cursor-text="Visit 404 Page"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body py-2 px-4"
                            >
                                404 Page
                            </motion.a>
                            <motion.a
                                href="/licensing"
                                data-cursor-text="Visit Licensing Page"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body py-2 px-4"
                            >
                                Licensing
                            </motion.a>
                        </div>
                    </div>

                    {/* Colonne 3 - Social */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-body font-bold text-black px-4">
                            Social
                        </h2>
                        <div className="space-y-1">
                            <motion.a
                                href="https://www.malt.fr/profile/gaelleboucher"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor-text="My Malt Profile"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body py-2 px-4"
                            >
                                Malt
                            </motion.a>
                            <motion.a
                                href="https://github.com/GaelleB"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor-text="My GitHub Page"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body py-2 px-4"
                            >
                                GitHub
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/gaelle-boucher/"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor-text="My LinkedIn Profile"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body py-2 px-4"
                            >
                                LinkedIn
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Section du bas */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-70"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-lg text-gray-600 font-body">
                                © Copyright 2025
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-lg text-gray-600 font-body">
                                Made by{" "}
                                <motion.a
                                    href="https://www.linkedin.com/in/gaelle-boucher/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cursor-text="Visit My Profile"
                                    className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Gaëlle
                                </motion.a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Texte coupé en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-28 overflow-hidden z-0">
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="font-public-sans text-black leading-none tracking-tighter select-none whitespace-nowrap footer-text" 
                        style={{ 
                            fontWeight: 900,
                            width: '100vw',
                            textAlign: 'center'
                        }}>
                        GAËLLE BOUCHER
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}
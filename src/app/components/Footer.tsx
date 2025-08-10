'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-50 relative overflow-hidden pt-65">
            <div className="max-w-6xl mx-auto px-6 pb-42 relative z-20">
                {/* Section principale - 3 colonnes */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-12 mb-16"
                >
                    {/* Colonne 1 - Contact Me */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-body font-bold text-black">
                            Contact Me
                        </h2>
                        <div className="space-y-4">
                            <motion.a
                                href="https://calendly.com/gaelleboucher-dev/30min?subject=Appel découverte"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body"
                            >
                            <span data-cursor-text="Call Me">Book a call</span>
                            </motion.a>
                            <motion.a
                                href="mailto:contact@gaelleb.dev"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body"
                            >
                            <span data-cursor-text="Email Me">gaelleboucher.dev@gmail.com</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Colonne 2 - Useful Links */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-body font-bold text-black">
                            Useful Links
                        </h2>
                        <div className="space-y-4">
                            <motion.a
                                href="#home"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body"
                            >
                            <span data-cursor-text="Visit Home Page">Home</span>
                            </motion.a>
                            <motion.a
                                href="/nonexistent-page"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body"
                            >
                            <span data-cursor-text="Visit 404 Page">404 Page</span>
                            </motion.a>
                            <motion.a
                                href="/licensing"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body"
                            >
                            <span data-cursor-text="Visit Licensing Page">Licensing</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Colonne 3 - Social */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-body font-bold text-black">
                            Social
                        </h2>
                        <div className="space-y-4">
                            <motion.a
                                href="https://www.malt.fr/profile/gaelleboucher"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body"
                            >
                            <span data-cursor-text="My Malt Profile">Malt</span>
                            </motion.a>
                            <motion.a
                                href="https://github.com/GaelleB"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body"
                            >
                            <span data-cursor-text="My GitHub Page">GitHub</span>
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/gaelle-boucher/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-2xl text-gray-600 hover:text-gray-600 transition-colors duration-300 font-body"
                            >
                            <span data-cursor-text="My LinkedIn Profile">LinkedIn</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Section du bas */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="pt-8"
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
                                    className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span data-cursor-text="Visit My Profile">Gaëlle</span>
                                </motion.a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Texte coupé en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-0">
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="font-public-sans text-black leading-none tracking-tighter select-none" 
                        style={{ 
                            fontWeight: 900, 
                            fontSize: '165px', 
                            lineHeight: '165px',
                            transform: 'translateY(45%)',
                            width: '100vw',
                            textAlign: 'center'
                        }}>
                        GAËLLE BOUCHER
                    </div>
                </div>
            </div>
        </footer>
    );
}
'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 relative z-10">
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
                        <h3 className="text-2xl font-handwriting text-gray-800">
                            Contact Me
                        </h3>
                        <div className="space-y-4">
                            <motion.a
                                href="mailto:contact@gaelleb.dev?subject=Demande d'appel découverte"
                                className="block text-gray-600 hover:text-pink-500 transition-colors duration-300 font-body"
                                whileHover={{ x: 5 }}
                                data-cursor-text="Call Me"
                            >
                                Call Me
                            </motion.a>
                            <motion.a
                                href="mailto:contact@gaelleb.dev"
                                className="block text-gray-600 hover:text-pink-500 transition-colors duration-300 font-body"
                                whileHover={{ x: 5 }}
                                data-cursor-text="Email Me"
                            >
                                gaelleboucher.dev@gmail.com
                            </motion.a>
                        </div>
                    </div>

                    {/* Colonne 2 - Useful Links */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-handwriting text-gray-800">
                            Useful Links
                        </h3>
                        <div className="space-y-4">
                            <motion.a
                                href="#home"
                                className="block text-gray-600 hover:text-pink-500 transition-colors duration-300 font-body"
                                whileHover={{ x: 5 }}
                                data-cursor-text="Visit Home Page"
                            >
                                Home
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block text-gray-600 hover:text-pink-500 transition-colors duration-300 font-body"
                                whileHover={{ x: 5 }}
                                data-cursor-text="Visit 404 Page"
                            >
                                404 Page
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block text-gray-600 hover:text-pink-500 transition-colors duration-300 font-body"
                                whileHover={{ x: 5 }}
                                data-cursor-text="Licensing"
                            >
                                Licensing
                            </motion.a>
                        </div>
                    </div>

                    {/* Colonne 3 - Social */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-handwriting text-gray-800">
                            Social
                        </h3>
                        <div className="space-y-4">
                            <motion.a
                                href="https://framer.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-600 hover:text-pink-500 transition-colors duration-300 font-body"
                                whileHover={{ x: 5 }}
                                data-cursor-text="Visit My Framer Page"
                            >
                                Framer
                            </motion.a>
                            <motion.a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-600 hover:text-pink-500 transition-colors duration-300 font-body"
                                whileHover={{ x: 5 }}
                                data-cursor-text="Visit My X Page"
                            >
                                X
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/gaelle-boucher/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-600 hover:text-pink-500 transition-colors duration-300 font-body"
                                whileHover={{ x: 5 }}
                                data-cursor-text="Visit My LinkedIn Profile"
                            >
                                LinkedIn
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
                    className="border-t border-gray-200 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-gray-600 font-body">
                                © Copyright 2025
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Logo COHÉSION en bas */}
            <div className="bg-black text-white py-8">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.h1
                        className="text-6xl md:text-8xl font-black text-center tracking-wider"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        COHÉSION
                    </motion.h1>
                </div>
            </div>
        </footer>
    );
}
'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const footerQuotes = [
    "La créativité, c'est l'intelligence qui s'amuse. – Albert Einstein",
    "Le code est comme l'humour. Quand il faut l'expliquer, c'est qu'il n'est pas bon.",
    "Créer, c'est vivre deux fois. – Albert Camus",
    "Le design n'est pas seulement ce à quoi ça ressemble, c'est comment ça fonctionne. – Steve Jobs"
];

export default function Footer() {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % footerQuotes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="paper-texture relative overflow-hidden">
            {/* Washi tape décoratif en haut */}
            <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-70 transform -rotate-1 shadow-lg"></div>
            
            <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 relative z-10">
                {/* Section principale du footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    {/* Titre créatif */}
                    <motion.div
                        className="relative inline-block mb-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h3 className="text-5xl font-handwriting text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                            Merci de votre visite
                        </h3>
                    </motion.div>

                    {/* Citation rotative */}
                    <motion.div
                        key={currentQuote}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="paper-card p-6 rounded-2xl max-w-md mx-auto mb-8"
                    >
                        <p className="text-lg font-handwriting text-gray-700">
                            {footerQuotes[currentQuote]}
                        </p>
                        
                        {/* Indicateurs de citation */}
                        <div className="flex justify-center space-x-2 mt-4">
                            {footerQuotes.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                        index === currentQuote ? 'bg-pink-400' : 'bg-gray-300'
                                    }`}
                                    whileHover={{ scale: 1.5 }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Informations et crédits */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-200 pt-8"
                >
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        {/* Colonne 1 - Copyright */}
                        <div className="space-y-2">
                            <h4 className="font-handwriting text-xl text-gray-700">
                                © {new Date().getFullYear()} Gaëlle Boucher
                            </h4>
                        </div>

                        {/* Colonne 2 - Technologies */}
                        <div className="space-y-2">
                            <h4 className="font-handwriting text-xl text-gray-700">
                                Créé avec
                            </h4>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'].map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        className="sticker text-xs"
                                        style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                                        whileHover={{ 
                                            rotate: 0,
                                            scale: 1.1,
                                            transition: { type: "spring", stiffness: 400 }
                                        }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Message final */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mt-8 pt-6 border-t border-gray-100"
                    >
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
}
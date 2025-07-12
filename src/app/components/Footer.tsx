'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';

export default function Footer() {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

    const socialLinks = [
        {
            id: 'email',
            href: 'mailto:gaelleboucher.dev@gmail.com',
            icon: '📧',
            label: 'Email',
            color: 'from-yellow-400 to-orange-400',
            description: 'Écrivez-moi !'
        },
        {
            id: 'github',
            href: 'https://github.com/GaelleB',
            icon: '💻',
            label: 'GitHub',
            color: 'from-purple-400 to-pink-400',
            description: 'Mes projets'
        },
        {
            id: 'linkedin',
            href: 'https://www.linkedin.com/in/gaelle-boucher/',
            icon: '👩‍💼',
            label: 'LinkedIn',
            color: 'from-blue-400 to-cyan-400',
            description: 'Connectons-nous'
        }
    ];

    const footerQuotes = [
        "Code avec ❤️ et beaucoup de ☕",
        "Inspiré par 🗽 NYC et les 📺 séries",
        "Chaque pixel compte ✨",
        "Du café au code, il n'y a qu'un pas ☕➡️💻"
    ];

    const [currentQuote, setCurrentQuote] = useState(0);

    // Change de citation toutes les 3 secondes
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % footerQuotes.length);
        }, 3000);
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            Merci de votre visite !
                        </h3>
                        
                        {/* Doodles autour du titre */}
                        <motion.div
                            className="absolute -top-4 -left-8 text-2xl"
                            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            🌟
                        </motion.div>
                        <motion.div
                            className="absolute -top-2 -right-6 text-xl"
                            animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            ✨
                        </motion.div>
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

                    {/* Liens sociaux créatifs */}
                    <div className="flex justify-center space-x-8 mb-8">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : '_self'}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="polaroid block group"
                                style={{ transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)` }}
                                onMouseEnter={() => setHoveredIcon(link.id)}
                                onMouseLeave={() => setHoveredIcon(null)}
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 0,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <motion.div
                                        className="text-3xl"
                                        animate={hoveredIcon === link.id ? {
                                            scale: [1, 1.3, 1],
                                            rotate: [0, 360]
                                        } : {}}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {link.icon}
                                    </motion.div>
                                    
                                    {/* Effet de fond au hover */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                                    />
                                </div>
                                
                                {/* Légende */}
                                <p className="font-handwriting text-center text-gray-600 mt-2 text-sm">
                                    {link.description}
                                </p>
                            </motion.a>
                        ))}
                    </div>
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
                                © {new Date().getFullYear()} Gaëlle B.
                            </h4>
                            <p className="text-sm text-gray-500 font-body">
                                Fait avec Next.js, beaucoup d&lsquo;amour et quelques tasses de café ☕
                            </p>
                        </div>

                        {/* Colonne 2 - Technologies */}
                        <div className="space-y-2">
                            <h4 className="font-handwriting text-xl text-gray-700">
                                Créé avec 🛠️
                            </h4>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind'].map((tech, index) => (
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

                        {/* Colonne 3 - Fun fact */}
                        <div className="space-y-2">
                            <h4 className="font-handwriting text-xl text-gray-700">
                                Fun Fact 🎭
                            </h4>
                            <p className="text-sm text-gray-500 font-body">
                                Ce portfolio a été codé en écoutant la playlist &quot;NYC Vibes&ldquo; 🎵🗽
                            </p>
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
                        <p className="text-gray-500 font-handwriting text-lg">
                            Passez une excellente journée ! ✨
                        </p>
                        <motion.div
                            className="text-2xl mt-2"
                            animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            😊
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Éléments décoratifs flottants */}
            <motion.div
                className="absolute bottom-20 left-8 text-2xl opacity-40"
                animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 20, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                🎨
            </motion.div>
            
            <motion.div
                className="absolute bottom-32 right-12 text-xl opacity-50"
                animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, -25, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            >
                💫
            </motion.div>

            <motion.div
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-lg opacity-30"
                animate={{ 
                    scale: [1, 1.4, 1],
                    rotate: [0, 360, 0],
                    opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            >
                ⭐
            </motion.div>

            {/* Confettis de fin */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        background: ['#facc15', '#f472b6', '#3b82f6', '#10b981', '#8b5cf6'][i % 5],
                        left: `${10 + Math.random() * 80}%`,
                        bottom: `${Math.random() * 100}px`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 360],
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </footer>
    );
}
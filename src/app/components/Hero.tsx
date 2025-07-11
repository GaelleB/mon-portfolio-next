'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
    
    const [currentTime, setCurrentTime] = useState('');
    const [isNight, setIsNight] = useState(true);
    
    // Horloge NYC
    useEffect(() => {
        const updateTime = () => {
            const nyTime = new Date().toLocaleTimeString('en-US', {
                timeZone: 'America/New_York',
                hour: '2-digit',
                minute: '2-digit',
            });
            setCurrentTime(nyTime);
            
            const hour = new Date().getHours();
            setIsNight(hour < 6 || hour > 18);
        };
        
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background NYC Skyline */}
            <motion.div 
                style={{ y, scale }} 
                className="absolute inset-0 z-0"
            >
                {/* Gradient urbain */}
                <div className={`absolute inset-0 transition-all duration-1000 ${
                    isNight 
                        ? 'bg-gradient-to-b from-gray-900 via-blue-950/50 to-gray-900' 
                        : 'bg-gradient-to-b from-blue-900/30 via-gray-800/50 to-gray-900'
                }`} />
                
                {/* Image NYC */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: 'url("https://images.unsplash.com/photo-1470219556762-1771e7f9427d?w=1920&q=80")',
                        filter: 'brightness(0.3) contrast(1.2) saturate(0.8)'
                    }} 
                />
                
                {/* Effet building avec fenêtres */}
                <div className="absolute inset-0 window-grid opacity-20" />
                
                {/* Lumières de la ville */}
                <div className="absolute inset-0">
                    {/* Lumières des buildings */}
                    <motion.div
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/30 rounded-full blur-3xl animate-building-lights"
                    />
                    <motion.div
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl"
                    />
                    
                    {/* Reflets bleus des gratte-ciels */}
                    <motion.div
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                    />
                </div>
            </motion.div>

            {/* Contenu Hero */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                {/* Badge NYC Time */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full"
                >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-sm font-mono-custom text-gray-300">
                        NYC {currentTime}
                    </span>
                </motion.div>

                {/* Titre principal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight mb-4">
                        <motion.span 
                            className="block text-white"
                            whileHover={{ scale: 1.02 }}
                        >
                            Gaëlle
                        </motion.span>
                        <motion.span 
                            className="block text-yellow-400"
                            whileHover={{ scale: 1.02 }}
                        >
                            Boucher
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Subtitle avec effet machine à écrire */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                >
                    <div className="inline-block">
                        <span className="text-xl md:text-2xl text-gray-300 font-mono-custom">
                            {'<'} Front-End Developer {'/>'} 
                        </span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                            className="inline-block w-0.5 h-6 bg-yellow-400 ml-1"
                        />
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Building digital experiences from the city that never sleeps
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#projects"
                        className="btn-taxi group relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">VIEW MY WORK</span>
                    </motion.a>
                    
                    <motion.a
                        href="#contact"
                        className="btn-glass glass-shine"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        GET IN TOUCH
                    </motion.a>
                </motion.div>

                {/* Stats rapides */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
                >
                    {[
                        { number: '3+', label: 'Years Experience' },
                        { number: '20+', label: 'Projects' },
                        { number: '∞', label: 'Coffee Cups' }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                        >
                            <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                                {stat.number}
                            </div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator style métro */}
            <motion.div 
                style={{ opacity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
                    <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-3 bg-yellow-400 rounded-full mx-auto"
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Ligne de métro décorative */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50" />
        </section>
    );
}
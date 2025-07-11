'use client'

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 150]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <motion.div 
            style={{ y }} 
            className="absolute inset-0 z-0"
        >
            {/* Gradient & Image background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 via-yellow-900/20 to-zinc-900/80"></div>
            <div 
            className="absolute inset-0 bg-cover bg-center brightness-[.25] contrast-[1.2]" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=80")' }} 
            />

            {/* Pulsing color blobs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        </motion.div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6">
                <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
                >
                <span className="text-yellow-400">Gaëlle</span>{' '}
                <span className="text-white">Boucher</span>
                </motion.h1>

                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-3xl text-white/80 font-light mb-8"
                >
                Développeuse front-end
                </motion.p>

                {/* Call to actions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center gap-6"
                    >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full bg-yellow-400 text-zinc-900 font-bold shadow-md hover:bg-yellow-300 transition"
                        >
                            Voir mes projets
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full border border-white text-white hover:bg-white/10 transition"
                        >
                            Me contacter
                        </a>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <div className="flex justify-center mt-4 text-yellow-400">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
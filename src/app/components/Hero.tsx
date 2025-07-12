'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-900 text-white"
        >
        <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <span className="text-yellow-400">Gaëlle</span>{' '}
            <span className="text-white">Boucher</span>
        </motion.h1>

        <motion.p
            className="mt-4 text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            Développeuse front-end
        </motion.p>

        <motion.div
            className="mt-10 flex gap-6 flex-col sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <a
            href="#projects"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:scale-105 transition-transform"
            >
            Voir mes projets
            </a>
            <a
            href="#contact"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
            Me contacter
            </a>
        </motion.div>

        {/* Flèche scroll */}
        <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-yellow-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </motion.div>
        </section>
    )
}
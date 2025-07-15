'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-32 md:pt-40 text-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-950">
            {/* Avatar + nom */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10"
            >
                <div className="inline-block p-1 rounded-md bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 shadow-lg">
                <Image
                    src="/assets/gaelle.jpg"
                    alt="Gaëlle Boucher"
                    width={160}
                    height={160}
                    className="rounded-full object-cover border-4 border-white shadow-md"
                />
                </div>
            </motion.div>

            {/* Titre + job */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 mb-6"
            >
                Gaëlle <span className="text-white dark:text-gray-100">Boucher</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4"
            >
                <span className="inline-block px-6 py-2 bg-white dark:bg-gray-800 rounded-full shadow text-lg font-medium text-gray-800 dark:text-gray-200">
                Développeuse front-end
                </span>
            </motion.div>

            {/* Phrase d'accroche */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-10"
            >
                Je crée des expériences digitales qui racontent votre histoire
            </motion.p>

            {/* Boutons */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
                <Link href="#projects">
                <span className="inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow hover:scale-105 transition-transform">
                    Voir mes projets
                </span>
                </Link>
                <Link href="#contact">
                <span className="inline-block px-6 py-3 bg-white/10 border border-white/30 text-white rounded-full shadow hover:scale-105 transition-transform">
                    Me contacter
                </span>
                </Link>
            </motion.div>

            {/* Flèche */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 flex flex-col items-center"
            >
                <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-yellow-400"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                </motion.div>
                <p className="mt-2 text-sm text-gray-500">Découvrez mon univers</p>
            </motion.div>
        </section>
    )
}
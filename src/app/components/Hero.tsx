'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
        
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100
            }
        }
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 paper-texture overflow-hidden"
        >
            {/* Contenu principal */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="relative z-10 max-w-4xl mx-auto"
            >
                {/* Polaroid avec photo de profil */}
                <motion.div
                    variants={itemVariants}
                    className="polaroid mb-8 mx-auto max-w-xs"
                    whileHover={{ 
                        scale: 1.05,
                        rotate: 0,
                        transition: { type: "spring", stiffness: 300 }
                    }}
                >
                    <div className="w-full h-48 bg-gradient-to-br from-yellow-200 to-pink-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                        {/* Avatar stylisé */}
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-pink-400 flex items-center justify-center text-6xl shadow-lg">
                            👩‍💻
                        </div>
                        {/* Sparkles */}
                        <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full animate-sparkle"></div>
                        <div className="absolute bottom-3 left-3 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <p className="font-handwriting text-gray-700 text-center mt-2">Hello, c&apos;est moi ! ✨</p>
                </motion.div>

                {/* Nom avec style scrapbooking */}
                <motion.div
                    variants={itemVariants}
                    className="relative mb-6"
                >
                    <h1 className="text-6xl md:text-8xl font-bold leading-tight font-body relative z-10">
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
                            whileHover={{ 
                                scale: 1.1,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                        >
                            Gaëlle
                        </motion.span>{' '}
                        <motion.span
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
                            whileHover={{ 
                                scale: 1.1,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                        >
                            Boucher
                        </motion.span>
                    </h1>
                    
                </motion.div>

                {/* Titre avec stickers */}
                <motion.div
                    variants={itemVariants}
                    className="mb-8 relative"
                >
                    <div className="paper-card inline-block px-8 py-4 rounded-2xl relative">
                        <p className="text-xl md:text-2xl font-handwriting text-gray-700 relative z-10">
                            Développeuse front-end
                        </p>
                    </div>
                </motion.div>

                {/* Description avec style handwriting */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl font-handwriting text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Je crée des expériences digitales qui racontent votre histoire
                </motion.p>

                {/* Boutons avec style scrapbooking */}
                <motion.div
                    variants={itemVariants}
                    className="flex gap-6 flex-col sm:flex-row justify-center items-center"
                >
                    <motion.a
                        href="#projects"
                        className="btn-scrap group relative overflow-hidden"
                        whileHover={{ 
                            y: -2,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Voir mes projets</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </motion.a>
                    
                    <motion.a
                        href="#projects"
                        className="btn-scrap group relative overflow-hidden"
                        whileHover={{ 
                            y: -2,
                            transition: { type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Me contacter</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Indicateur de scroll stylisé */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
            >
                <div className="paper-card p-4 rounded-full shadow-lg">
                    <motion.div
                        className="text-yellow-500 text-2xl"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        👇
                    </motion.div>
                </div>
                <p className="font-handwriting text-gray-500 mt-2 text-sm">Découvrez mon univers !</p>
            </motion.div>

            {/* Curseur personnalisé (optionnel) */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    background: 'radial-gradient(circle, #facc15, #f472b6)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </section>
    )
}
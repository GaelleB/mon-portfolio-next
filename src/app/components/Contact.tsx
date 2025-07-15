'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)
    const [isFormVisible, setIsFormVisible] = useState(false)

    const contactCards = [
        {
            id: 'email',
            icon: '📧',
            title: 'Email',
            subtitle: 'Pour les projets sérieux',
            content: 'contact@gaelleb.dev',
            href: 'mailto:contact@gaelleb.dev',
            color: 'from-yellow-400 to-orange-400',
            description: 'Écrivez-moi pour discuter de vos projets !'
        },
        {
            id: 'linkedin',
            icon: '👩‍💼',
            title: 'LinkedIn',
            subtitle: 'Networking professionnel',
            content: 'Gaëlle Boucher',
            href: 'https://www.linkedin.com/in/gaelle-boucher/',
            color: 'from-blue-400 to-cyan-400',
            description: 'Connectons-nous professionnellement !'
        },
        {
            id: 'github',
            icon: '💻',
            title: 'GitHub',
            subtitle: 'Mes codes secrets',
            content: '@GaelleB',
            href: 'https://github.com/GaelleB',
            color: 'from-purple-400 to-pink-400',
            description: 'Explorez mes projets et contributions !'
        },
        {
            id: 'coffee',
            icon: '☕',
            title: 'Café Virtuel',
            subtitle: 'Pour discuter autour d\'un café',
            content: 'Prenons un café !',
            href: 'mailto:contact@gaelleb.dev?subject=Prenons un café virtuel !',
            color: 'from-green-400 to-emerald-400',
            description: 'Parlons de code et de créativité !'
        }
    ]

    const reasons = [
        { emoji: '🚀', text: 'Un projet à développer' },
        { emoji: '💡', text: 'Une idée à concrétiser' },
        { emoji: '🤝', text: 'Une collaboration' },
        { emoji: '📚', text: 'Une question technique' },
        { emoji: '🎭', text: 'Juste pour dire bonjour' },
        { emoji: '📺', text: 'Une série à recommander' }
    ]

    return (
        <section id="contact" className="section-scrap bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Washi tape décoratifs */}
            <div className="absolute top-0 right-12 w-40 h-8 bg-gradient-to-r from-pink-400 to-purple-400 opacity-70 transform rotate-3 shadow-lg"></div>
            <div className="absolute bottom-0 left-20 w-56 h-6 bg-gradient-to-l from-yellow-400 to-orange-400 opacity-80 transform -rotate-2 shadow-lg"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Titre principal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="relative inline-block">
                        <h2 className="text-6xl md:text-8xl font-handwriting text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-4">
                            Contactez-moi !
                        </h2>

                        {/* Notebook style lines */}
                        <div className="absolute -bottom-4 left-0 right-0 space-y-1">
                            <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded"></div>
                            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded"></div>
                        </div>
                    </div>
                    
                    <p className="text-xl font-handwriting text-gray-600 max-w-3xl mx-auto mt-8">
                        Une idée ? Un projet ? Une série à me recommander ? 
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                            Écrivez-moi, j&apos;adore rencontrer de nouvelles personnes ! 🤗
                        </span>
                    </p>
                </motion.div>

                {/* Cartes de contact créatives */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {contactCards.map((card, index) => (
                        <motion.a
                            key={card.id}
                            href={card.href}
                            target={card.href.startsWith('http') ? '_blank' : '_self'}
                            rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="polaroid block group cursor-pointer"
                            onMouseEnter={() => setHoveredCard(card.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            whileHover={{ 
                                scale: 1.05,
                                rotate: 0,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            initial={{ rotate: index % 2 === 0 ? -2 : 2 }}
                        >
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 h-48 flex flex-col justify-between relative overflow-hidden">
                                {/* Icône animée */}
                                <motion.div
                                    className="text-5xl text-center mb-4"
                                    animate={hoveredCard === card.id ? {
                                        scale: [1, 1.3, 1],
                                        rotate: [0, 10, -10, 0]
                                    } : {}}
                                    transition={{ duration: 0.6 }}
                                >
                                    {card.icon}
                                </motion.div>

                                {/* Contenu */}
                                <div className="text-center space-y-1">
                                    <h3 className={`font-bold text-lg bg-gradient-to-r ${card.color} bg-clip-text text-transparent font-body`}>
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-handwriting">
                                        {card.subtitle}
                                    </p>
                                    <p className="text-sm text-gray-700 font-mono">
                                        {card.content}
                                    </p>
                                </div>

                                {/* Effet hover */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                />

                                {/* Sticker décoratif */}
                                <div className="absolute -top-2 -right-2">
                                    <motion.div
                                        className="sticker text-xs"
                                        style={{ 
                                            background: `linear-gradient(45deg, ${card.color.split(' ')[1]}, ${card.color.split(' ')[3]})`,
                                            color: 'white'
                                        }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        Click !
                                    </motion.div>
                                </div>
                            </div>

                            {/* Légende polaroid */}
                            <p className="font-handwriting text-center text-gray-600 mt-3 text-sm">
                                {card.description}
                            </p>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Section "Pourquoi me contacter" */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="paper-card p-8 rounded-3xl relative">
                        <h3 className="text-4xl font-handwriting text-center text-gray-800 mb-8">
                            Pourquoi me contacter ? 🤔
                        </h3>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 shadow-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        transition: { type: "spring", stiffness: 400 }
                                    }}
                                >
                                    <motion.span
                                        className="text-2xl"
                                        whileHover={{ 
                                            scale: 1.3,
                                            rotate: [0, -10, 10, 0]
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {reason.emoji}
                                    </motion.span>
                                    <span className="text-gray-700 font-body">
                                        {reason.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Washi tape sur la section */}
                        <div className="absolute top-0 left-1/4 w-32 h-6 bg-gradient-to-r from-pink-400 to-yellow-400 opacity-70 transform rotate-3 shadow-lg"></div>
                    </div>
                </motion.div>

                {/* Message d'encouragement créatif */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="paper-card p-8 rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-4 left-4 text-6xl">💌</div>
                            <div className="absolute bottom-4 right-4 text-6xl">✨</div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl">📱</div>
                        </div>

                        <motion.div
                            className="relative z-10"
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-4xl font-handwriting text-gray-800 mb-6">
                                N&apos;hésitez pas ! 🌟
                            </h3>
                            
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto font-body">
                                Que ce soit pour un projet professionnel, une collaboration créative, 
                                ou simplement pour échanger sur nos passions communes 
                                (développement, séries, musique, NYC...), 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">
                                    {" "}je serais ravie de vous lire !
                                </span>
                            </p>

                            {/* CTA principal avec animation spéciale */}
                            <motion.a
                                href="mailto:contact@gaelleb.dev"
                                className="inline-block relative overflow-hidden"
                                whileHover="hover"
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="btn-scrap text-xl px-8 py-4 relative z-10"
                                    style={{
                                        background: 'linear-gradient(45deg, #f472b6, #8b5cf6, #3b82f6)',
                                        color: 'white',
                                        fontSize: '1.2rem'
                                    }}
                                    variants={{
                                        hover: {
                                            scale: 1.05,
                                            rotate: [0, -1, 1, 0],
                                            transition: { duration: 0.5 }
                                        }
                                    }}
                                >
                                    Écrivez-moi maintenant ! 💌✨
                                </motion.div>
                                
                                {/* Effet de particules au hover */}
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    variants={{
                                        hover: {
                                            opacity: 1
                                        }
                                    }}
                                    initial={{ opacity: 0 }}
                                >
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                                            style={{
                                                left: `${20 + Math.random() * 60}%`,
                                                top: `${20 + Math.random() * 60}%`,
                                            }}
                                            variants={{
                                                hover: {
                                                    scale: [0, 1, 0],
                                                    y: [-20, -40],
                                                    x: [0, Math.random() * 40 - 20],
                                                    opacity: [0, 1, 0]
                                                }
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.1,
                                                ease: "easeOut"
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            </motion.a>

                            {/* Sous-texte amusant */}
                            <p className="text-sm text-gray-500 mt-4 font-handwriting">
                                PS : Si vous avez des recommandations de séries, c&apos;est encore mieux ! 📺😉
                            </p>
                        </motion.div>

                        {/* Stickers décoratifs */}
                        <div className="absolute -top-3 -left-3 sticker animate-wiggle">
                            🚀 Rapide
                        </div>
                        <div className="absolute -bottom-3 -right-3 sticker animate-wiggle" style={{ animationDelay: '1s' }}>
                            💯 Sympa
                        </div>
                        <div className="absolute top-1/2 -left-4 sticker animate-pulse-soft" style={{ animationDelay: '0.5s' }}>
                            ✨ Pro
                        </div>
                    </div>
                </motion.div>

                {/* Info de réponse */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="paper-card p-6 rounded-2xl max-w-md mx-auto">
                        <div className="flex items-center justify-center space-x-3 mb-3">
                            <motion.div
                                className="text-2xl"
                                animate={{ 
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                ⏰
                            </motion.div>
                            <h4 className="font-handwriting text-xl text-gray-700">
                                Temps de réponse
                            </h4>
                        </div>
                        <p className="text-gray-600 font-body">
                            Je réponds généralement sous{" "}
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                                24h
                            </span>
                            {" "}(sauf si je binge-watch une série 😅)
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Éléments décoratifs flottants */}
            <motion.div
                className="absolute top-1/4 left-4 text-3xl opacity-50"
                animate={{ 
                    y: [0, -25, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                }}
                transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                💌
            </motion.div>
            
            <motion.div
                className="absolute bottom-1/4 right-8 text-2xl opacity-40"
                animate={{ 
                    y: [-20, 20, -20],
                    rotate: [0, -180, 0],
                    scale: [1, 1.4, 1]
                }}
                transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            >
                📱
            </motion.div>

            <motion.div
                className="absolute top-1/2 right-16 text-xl opacity-30"
                animate={{ 
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                    rotate: [0, 45, 0]
                }}
                transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            >
                ✉️
            </motion.div>

            <motion.div
                className="absolute top-3/4 left-12 text-lg opacity-60"
                animate={{ 
                    scale: [1, 1.5, 1],
                    rotate: [0, -360, 0],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
            >
                🌟
            </motion.div>
        </section>
    )
}
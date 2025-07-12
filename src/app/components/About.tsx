'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function About() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const personalityCards = [
        {
            emoji: '🗽',
            title: 'NYC Lover',
            description: 'Inspirée par l\'énergie de New York, je crée des expériences digitales qui ne dorment jamais !',
            color: 'from-yellow-400 to-orange-400'
        },
        {
            emoji: '📺',
            title: 'Sériephile',
            description: 'Entre deux lignes de code, je dévore des séries. Mon code est aussi addictif qu\'une bonne série !',
            color: 'from-pink-400 to-purple-400'
        },
        {
            emoji: '🎵',
            title: 'Music Addict',
            description: 'La musique guide mes créations. Chaque projet a sa playlist, chaque fonction son rythme !',
            color: 'from-blue-400 to-cyan-400'
        },
        {
            emoji: '✨',
            title: 'Code Artistique',
            description: 'Pour moi, le code est un art. J\'aime créer des interfaces qui racontent des histoires.',
            color: 'from-green-400 to-emerald-400'
        }
    ]

    return (
        <section id="about" className="section-scrap paper-texture relative">
            {/* Washi tape décoratif */}
            <div className="absolute top-0 left-20 w-40 h-6 bg-gradient-to-r from-pink-400 to-purple-400 opacity-70 transform rotate-3 shadow-lg"></div>
            <div className="absolute bottom-10 right-10 w-32 h-5 bg-gradient-to-l from-blue-400 to-cyan-400 opacity-80 transform -rotate-2 shadow-lg"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Titre principal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="relative inline-block">
                        <h2 className="text-6xl md:text-8xl font-handwriting text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-4">
                            À propos de moi
                        </h2>

                        {/* Notebook style lines */}
                        <div className="absolute -bottom-4 left-0 right-0 space-y-1">
                            <div className="h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded"></div>
                            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded"></div>
                        </div>
                        
                        {/* Doodles autour du titre */}
                        <motion.div
                            className="absolute -top-4 -left-8 text-3xl"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-2 -right-6 text-2xl"
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                        </motion.div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Photo et présentation principale */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="paper-card p-8 rounded-3xl relative overflow-hidden">
                            {/* Polaroid style */}
                            <div className="polaroid max-w-sm mx-auto mb-6">
                                <div className="w-full h-64 bg-gradient-to-br from-yellow-100 to-pink-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="text-8xl">👩‍💻</div>
                                </div>
                                <p className="font-handwriting text-center text-gray-600 mt-3">
                                    Moi dans mon élément ! 📸
                                </p>
                            </div>

                            <div className="text-center space-y-4">
                                <h3 className="text-3xl font-handwriting text-gray-800 mb-4">
                                    Salut, moi c&apos;est Gaëlle ! 👋
                                </h3>
                                
                                <p className="text-gray-700 leading-relaxed font-body">
                                    Je suis une développeuse web passionnée qui trouve son inspiration dans l&apos;énergie 
                                    bouillonnante de New York, les intrigues captivantes des séries et les mélodies 
                                    qui rythment mes journées de code.
                                </p>
                                
                                <p className="text-gray-700 leading-relaxed font-body">
                                    Pour moi, chaque ligne de code est une opportunité de raconter une histoire, 
                                    de créer quelque chose de beau et de fonctionnel. J&apos;aime mélanger créativité 
                                    et technique pour donner vie à des projets uniques.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cartes de personnalité */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {personalityCards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="paper-card p-6 rounded-2xl cursor-pointer relative overflow-hidden"
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                whileHover={{ 
                                    scale: 1.02,
                                    rotate: hoveredCard === index ? 0 : (index % 2 === 0 ? -1 : 1),
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                initial={{ rotate: index % 2 === 0 ? -1 : 1 }}
                                style={{
                                    transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`
                                }}
                            >
                                <div className="flex items-start space-x-4">
                                    <motion.div
                                        className="text-4xl"
                                        animate={hoveredCard === index ? { 
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 10, -10, 0]
                                        } : {}}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {card.emoji}
                                    </motion.div>
                                    <div className="flex-1">
                                        <h4 className={`text-xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent font-body`}>
                                            {card.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed mt-2 font-body">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Washi tape sur les cartes */}
                                <div 
                                    className={`absolute top-0 right-0 w-16 h-4 bg-gradient-to-r ${card.color} opacity-60 transform rotate-45 translate-x-4 -translate-y-2`}
                                ></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
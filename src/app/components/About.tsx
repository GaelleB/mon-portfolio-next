'use client'

import { motion } from 'framer-motion'

export default function About() {
    const passions = [
        { icon: '🗽', title: 'NYC Lover', text: "Inspirée par l'énergie de New York, je crée des expériences digitales qui ne dorment jamais !" },
        { icon: '📺', title: 'Sériephile', text: "Je dévore des séries entre deux lignes de code. Mon code est aussi addictif qu'une bonne série." },
        { icon: '🎧', title: 'Music Addict', text: 'Chaque projet a sa playlist, chaque ligne de code a son rythme.' },
        { icon: '🎨', title: 'Code Artistique', text: "Pour moi, le code est un art. J'aime créer des interfaces qui racontent des histoires." },
    ]

    return (
        <section id="about" className="bg-base-100 py-20 px-6 text-gray-800">
            <div className="max-w-6xl mx-auto">
                {/* Titre */}
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-handwriting text-center mb-16"
                >
                <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">
                    À propos de moi
                </span>
                {/* Soulignement fin multicolore */}
                <div className="mt-2 w-48 h-1 mx-auto bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-500 rounded-full" />
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Bloc texte */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-lg shadow-xl p-8 relative"
                    >
                        {/* Scotch rose en bas */}
                        <div className="absolute -bottom-3 left-4 w-24 h-6 bg-pink-300/70 rotate-[-5deg] z-10" />
                        {/* Scotch jaune en haut */}
                        <div className="absolute -top-3 right-6 w-20 h-5 bg-yellow-300/70 rotate-[4deg] z-10" />

                        <div className="relative z-20">
                        <p className="font-semibold text-xl mb-4">
                            Salut, moi c’est <span className="text-pink-500">Gaëlle</span> !
                        </p>
                        <p className="mb-3 leading-relaxed">
                            Je suis une développeuse web passionnée qui puise son inspiration dans les séries, la musique et l’effervescence de New York.
                        </p>
                        <p className="leading-relaxed">
                            Mon code raconte des histoires. J’aime mélanger la rigueur du front-end avec une touche sensible, poétique et très personnelle.
                        </p>
                        </div>
                    </motion.div>

                    {/* Cartes passions */}
                    <div className="space-y-6">
                        {passions.map((passion, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-white rounded-lg shadow-md p-6 relative"
                        >
                            {/* Stickers scrapbooking */}
                            <div className="absolute -top-2 left-4 w-20 h-4 bg-yellow-300/80 rotate-[-3deg]" />
                            <div className="absolute -bottom-2 right-4 w-24 h-4 bg-pink-300/80 rotate-[3deg]" />

                            <div className="relative z-10 flex items-start gap-4">
                            <span className="text-3xl">{passion.icon}</span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">{passion.title}</h3>
                                <p className="text-sm text-gray-600">{passion.text}</p>
                            </div>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
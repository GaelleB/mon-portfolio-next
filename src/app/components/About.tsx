'use client'

import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-gray-950 text-white">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-8"
                >
                À propos
                </motion.h2>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
                >
                Je suis Gaëlle, développeuse web passionnée par New York, les séries, la musique et les lignes de code bien propres. J’aime mélanger le code et la créativité pour concevoir des sites sur mesure qui racontent une histoire — la tienne.
                </motion.p>
            </div>
        </section>
    )
}